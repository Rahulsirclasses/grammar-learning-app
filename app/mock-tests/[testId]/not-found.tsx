import Link from "next/link"
import { Button } from "@/components/ui/button"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export default function MockTestNotFound() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Test Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The mock test you're looking for doesn't exist or may have been removed.
        </p>
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href="/mock-tests">View All Tests</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
