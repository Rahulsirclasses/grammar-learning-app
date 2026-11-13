"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { createClient } from "@/lib/mongodb/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  BookOpen,
  Award,
  BarChart3,
  Home,
  Menu,
  PenTool,
  ClipboardList,
  LogOut,
  Settings,
  Bell,
  Search,
  HelpCircle,
  ChevronRight,
  X,
  Shield,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { triggerPWAInstall } from "@/components/pwa-install"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardLayoutProps {
  children: React.ReactNode
  user?: {
    id: string
    email?: string
    role?: string
    user_metadata?: {
      name?: string
    }
  } | null
}

export default function DashboardLayout({ children, user }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Prevent hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Security: Periodically check if account is disabled while on dashboard
  useEffect(() => {
    if (!user?.id || pathname === "/account-disabled") return

    const checkAccountStatus = async () => {
      try {
        const res = await fetch("/api/auth/me")
        if (res.ok) {
          const data = await res.json()
          if (data.status === "disabled") {
            router.push("/account-disabled")
            router.refresh()
          }
        }
      } catch (err) {
        console.error("Status check failed:", err)
      }
    }

    // Check every 60 seconds
    const interval = setInterval(checkAccountStatus, 60000)
    return () => clearInterval(interval)
  }, [user?.id, pathname, router])

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home, badge: null },
    { name: "Theory", href: "/theory", icon: BookOpen, badge: null },
    { name: "Practice", href: "/practice", icon: PenTool, badge: null },
    { name: "Mock Tests", href: "/mock-tests", icon: ClipboardList, badge: { text: "New", variant: "default" } },
    { name: "Progress", href: "/progress", icon: BarChart3, badge: null },
    { name: "Leaderboard", href: "/leaderboard", icon: Award, badge: null },
  ]

  // Add Admin link for staff
  if (user?.role === "admin" || user?.role === "super-admin") {
    navigation.push({ name: "Admin", href: "/admin/users", icon: Shield, badge: { text: "Staff", variant: "secondary" } })
  }

  // Generate breadcrumb items based on pathname
  const getBreadcrumbs = () => {
    if (!pathname) return []

    const paths = pathname.split("/").filter(Boolean)
    if (paths.length === 0) return []

    return paths.map((path, index) => {
      // Create a href for each breadcrumb
      const href = `/${paths.slice(0, index + 1).join("/")}`

      // Format the path name to be more readable
      const name = path.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())

      return { name, href }
    })
  }

  const breadcrumbs = getBreadcrumbs()

  if (!isMounted) {
    return null
  }

  const handleLogout = async () => {
    const dbClient = createClient()
    await dbClient.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  const userDisplayName = user?.user_metadata?.name || user?.email?.split("@")[0] || "User"
  const userEmail = user?.email || "guest@example.com"
  const userInitials = userDisplayName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background shadow-sm">
        <div className="container flex h-14 sm:h-16 items-center justify-between py-2 sm:py-4">
          <div className="flex items-center gap-2 md:gap-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://i.ibb.co/2042BM6H/R-copy.png"
                        alt="Rahulsirclasses Logo"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="flex-1 overflow-auto py-2">
                    <nav className="flex flex-col gap-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                            pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                          }`}
                        >
                          <div className="flex items-center">
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.name}
                          </div>
                          {item.badge && <Badge variant={item.badge.variant as any}>{item.badge.text}</Badge>}
                        </Link>
                      ))}
                    </nav>
                  </div>

                  <div className="p-4 border-t mt-auto">
                    <div className="rounded-lg bg-primary/10 p-4">
                      <h4 className="text-sm font-medium mb-2">Need help?</h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        Get instant support with our comprehensive documentation.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start bg-transparent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <HelpCircle className="h-4 w-4 mr-2" />
                        View resources
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/2042BM6H/R-copy.png"
                alt="Rahulsirclasses Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="relative flex-1 max-w-md mx-4 hidden md:block">
            {isSearchOpen ? (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for topics, questions, or tests..."
                  className="w-full pl-10 pr-4"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full justify-start text-muted-foreground bg-transparent"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4 mr-2" />
                Search...
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">âŒ˜</span>K
                </kbd>
              </Button>
            )}
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            {/* PWA Install Button */}
            <button
              onClick={triggerPWAInstall}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 text-emerald-600 hover:text-emerald-700 dark:text-emerald-300 dark:hover:text-white text-xs font-bold transition"
              title="Install App"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Install</span>
              <span className="text-[10px] bg-emerald-500/30 px-1 rounded">APK</span>
            </button>
            <Button variant="ghost" size="icon" className="relative md:flex hidden">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600"></span>
              <span className="sr-only">Notifications</span>
            </Button>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Help & Resources</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent"
              onClick={() => {
                /* Implement mobile search */
              }}
            >
              <Search className="h-5 w-5" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/diverse-students-studying.png" alt="@user" />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userDisplayName}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userEmail}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {(user?.role === "admin" || user?.role === "super-admin") && (
                  <>
                    <Link href="/admin/users">
                      <DropdownMenuItem className="cursor-pointer">
                        <Shield className="mr-2 h-4 w-4" />
                        <span>Admin Panel</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuSeparator />
                  </>
                )}
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-[240px] flex-col border-r bg-muted/40 md:flex">
          <div className="flex flex-col gap-2 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <div className="flex items-center">
                  <item.icon
                    className={`h-5 w-5 mr-3 ${pathname === item.href ? "" : "group-hover:text-foreground"}`}
                  />
                  {item.name}
                </div>
                {item.badge && (
                  <Badge variant={item.badge.variant as any} className="ml-auto">
                    {item.badge.text}
                  </Badge>
                )}
              </Link>
            ))}
          </div>

          <div className="mt-auto p-4 border-t">
            <div className="rounded-lg bg-primary/10 p-4">
              <h4 className="text-sm font-medium mb-2">Need help?</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Get instant support with our comprehensive documentation and tutorials.
              </p>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                <HelpCircle className="h-4 w-4 mr-2" />
                View resources
              </Button>
            </div>
          </div>
        </aside>

        <main className="flex-1 min-w-0 overflow-x-hidden">
          <div className="container max-w-6xl py-4 sm:py-6 px-4 sm:px-6">
            {breadcrumbs.length > 0 && (
              <div className="mb-4 sm:mb-6 overflow-x-auto pb-1 -mx-4 px-4 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>
                    {breadcrumbs.map((breadcrumb, i) => (
                      <React.Fragment key={breadcrumb.href}>
                        <BreadcrumbItem>
                          {i === breadcrumbs.length - 1 ? (
                            <span className="font-medium text-foreground">{breadcrumb.name}</span>
                          ) : (
                            <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.name}</BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {i < breadcrumbs.length - 1 && (
                          <BreadcrumbSeparator>
                            <ChevronRight className="h-4 w-4" />
                          </BreadcrumbSeparator>
                        )}
                      </React.Fragment>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

