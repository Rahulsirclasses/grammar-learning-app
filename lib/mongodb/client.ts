"use client"

function parseError(response: any, fallback: string) {
  const message = response?.error || fallback
  return { message }
}

async function callApi(path: string, init: RequestInit) {
  const res = await fetch(path, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  })

  const json = await res.json().catch(() => ({}))

  if (!res.ok) {
    return { ok: false, json }
  }

  return { ok: true, json }
}

class BrowserClient {
  auth = {
    getUser: async () => {
      const result = await callApi("/api/auth/me", { method: "GET", cache: "no-store" })
      if (!result.ok) {
        return { data: { user: null }, error: parseError(result.json, "Unable to fetch user") }
      }
      return { data: { user: result.json.user || null }, error: null }
    },

    getSession: async () => {
      const token = new URLSearchParams(window.location.search).get("token")
      if (!token) {
        return { data: { session: null }, error: null }
      }

      const result = await callApi(`/api/auth/reset-password/verify?token=${encodeURIComponent(token)}`, {
        method: "GET",
        cache: "no-store",
      })

      if (!result.ok || !result.json.valid) {
        return { data: { session: null }, error: parseError(result.json, "Invalid reset token") }
      }

      return {
        data: {
          session: {
            token,
          },
        },
        error: null,
      }
    },

    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      const result = await callApi("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      })

      if (!result.ok) {
        return { data: { user: null }, error: parseError(result.json, "Invalid login credentials") }
      }

      return { data: { user: result.json.user }, error: null }
    },

    signUp: async ({
      email,
      password,
      options,
    }: {
      email: string
      password: string
      options?: { data?: Record<string, any> }
    }) => {
      const result = await callApi("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          name: options?.data?.name,
          phone: options?.data?.phone,
        }),
      })

      if (!result.ok) {
        return { data: { user: null }, error: parseError(result.json, "Signup failed") }
      }

      return { data: { user: result.json.user }, error: null }
    },

    signOut: async () => {
      const result = await callApi("/api/auth/logout", {
        method: "POST",
        body: JSON.stringify({}),
      })

      if (!result.ok) {
        return { error: parseError(result.json, "Logout failed") }
      }

      return { error: null }
    },

    resetPasswordForEmail: async (
      email: string,
      options?: {
        redirectTo?: string
      },
    ) => {
      const result = await callApi("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email, redirectTo: options?.redirectTo }),
      })

      if (!result.ok) {
        return { error: parseError(result.json, "Unable to process password reset") }
      }

      return { error: null }
    },

    updateUser: async ({ password }: { password: string }) => {
      const token = new URLSearchParams(window.location.search).get("token")
      const result = await callApi("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ token, password }),
      })

      if (!result.ok) {
        return { error: parseError(result.json, "Unable to update password") }
      }

      return { error: null }
    },
  }

  from(table: string) {
    return {
      insert: async (payload: Record<string, any> | Record<string, any>[]) => {
        const result = await callApi("/api/db", {
          method: "POST",
          body: JSON.stringify({ table, action: "insert", payload }),
        })

        return {
          data: result.ok ? result.json.data : null,
          error: result.ok ? null : parseError(result.json, "Insert failed"),
        }
      },

      update: (payload: Record<string, any>) => ({
        eq: async (field: string, value: any) => {
          const result = await callApi("/api/db", {
            method: "POST",
            body: JSON.stringify({ table, action: "update", payload, filter: { [field]: value } }),
          })

          return {
            data: result.ok ? result.json.data : null,
            error: result.ok ? null : parseError(result.json, "Update failed"),
          }
        },
      }),

      delete: () => ({
        eq: async (field: string, value: any) => {
          const result = await callApi("/api/db", {
            method: "POST",
            body: JSON.stringify({ table, action: "delete", filter: { [field]: value } }),
          })

          return {
            data: result.ok ? result.json.data : null,
            error: result.ok ? null : parseError(result.json, "Delete failed"),
          }
        },
      }),
    }
  }
}

let client: BrowserClient | undefined

export function createBrowserClient() {
  if (client) {
    return client
  }

  client = new BrowserClient()
  return client
}

export const createClient = createBrowserClient
