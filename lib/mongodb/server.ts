import { cookies } from "next/headers"
import { AUTH_COOKIE_NAME, verifyAuthToken } from "@/lib/auth/jwt"
import {
  countRows,
  deleteRows,
  findMany,
  findOne,
  insertRows,
  updateRows,
} from "@/lib/mongodb/repositories/table-repository"
import { findUserById, mapDbUserToAuthShape } from "@/lib/mongodb/repositories/user-repository"

interface SelectOptions {
  count?: "exact"
  head?: boolean
}

function normalizeFilter(filter: Record<string, any>) {
  const out: Record<string, any> = {}
  Object.entries(filter).forEach(([k, v]) => {
    if (v !== undefined) {
      out[k] = v
    }
  })
  return out
}

class ServerQueryBuilder {
  private filter: Record<string, any> = {}
  private sort: Record<string, 1 | -1> = {}
  private action: "select" | "update" | "delete" = "select"
  private patch: Record<string, any> = {}
  private selectOptions: SelectOptions = {}

  constructor(
    private table: string,
    private columns: string = "*",
  ) { }

  select(columns: string = "*", options?: SelectOptions) {
    this.columns = columns
    this.selectOptions = options || {}
    this.action = "select"
    return this
  }

  eq(field: string, value: any) {
    this.filter[field] = value
    return this
  }

  order(field: string, params?: { ascending?: boolean }) {
    this.sort[field] = params?.ascending === false ? -1 : 1
    return this
  }

  update(patch: Record<string, any>) {
    this.action = "update"
    this.patch = patch
    return this
  }

  delete() {
    this.action = "delete"
    return this
  }

  async single() {
    try {
      const data = await findOne(this.table, normalizeFilter(this.filter))
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  async execute() {
    try {
      const filter = normalizeFilter(this.filter)

      if (this.action === "update") {
        const data = await updateRows(this.table, filter, this.patch)
        return { data, error: null }
      }

      if (this.action === "delete") {
        const data = await deleteRows(this.table, filter)
        return { data, error: null }
      }

      if (this.selectOptions.head && this.selectOptions.count === "exact") {
        const count = await countRows(this.table, filter)
        return { data: null, error: null, count }
      }

      const data = await findMany(this.table, filter, this.sort)
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  then<TResult1 = any, TResult2 = never>(
    onfulfilled?: ((value: any) => TResult1 | PromiseLike<TResult1>) | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
  ): Promise<TResult1 | TResult2> {
    return this.execute().then(onfulfilled, onrejected)
  }
}

class ServerClient {
  auth = {
    getUser: async () => {
      try {
        const cookieStore = await cookies()
        const token = cookieStore.get(AUTH_COOKIE_NAME)?.value

        if (!token) {
          return { data: { user: null }, error: null }
        }

        const payload = await verifyAuthToken(token)
        if (!payload || !payload.id) {
          return { data: { user: null }, error: null }
        }
        const dbUser = await findUserById(payload.id)
        const user = mapDbUserToAuthShape(dbUser)

        return { data: { user }, error: null }
      } catch {
        return { data: { user: null }, error: null }
      }
    },
  }

  from(table: string) {
    return new ServerQueryBuilder(table)
  }
}

export async function createServerClient() {
  return new ServerClient()
}

export const createClient = createServerClient

export async function getUser() {
  const client = await createServerClient()
  const { data: { user } } = await client.auth.getUser()
  return user
}
