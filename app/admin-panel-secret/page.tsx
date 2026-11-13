import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/mongodb/server"

export default async function AdminPanelPage() {
  const dbClient = await createServerClient()

  const {
    data: { user },
  } = await dbClient.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/admin-panel-secret")
  }

  // Check if user is an admin
  const { data: adminUser } = await dbClient.from("admin_users").select("*").eq("email", user.email).single()

  if (!adminUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
          <p className="text-muted-foreground">You do not have permission to access this admin panel.</p>
        </div>
      </div>
    )
  }

  // Redirect to admin dashboard
  redirect("/admin-panel-secret/dashboard")
}
