
"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    Search,
    MoreHorizontal,
    UserCheck,
    UserMinus,
    UserPlus,
    ShieldAlert,
    ShieldCheck,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Loader2,
    Users,
    Clock,
    UserX,
    CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

interface User {
    id: string
    email: string
    role: string
    status: string
    name: string
    avatar: string | null
    created_at: string
}

export default function AdminUsersPage() {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState<any>(null)
    const [users, setUsers] = useState<User[]>([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [status, setStatus] = useState("all")
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [isActionLoading, setIsActionLoading] = useState<string | null>(null)

    // Stats
    const [stats, setStats] = useState({
        total: 0,
        pending: 0,
        active: 0,
        disabled: 0
    })

    // Dialog state
    const [userToDisable, setUserToDisable] = useState<User | null>(null)

    // Verify Admin Role
    const checkAccess = useCallback(async () => {
        try {
            const res = await fetch("/api/auth/me")
            if (!res.ok) throw new Error()
            const data = await res.json()
            if (data.role !== "admin" && data.role !== "super-admin") {
                router.push("/dashboard")
                return
            }
            setCurrentUser(data)
        } catch (err) {
            router.push("/login")
        }
    }, [router])

    const fetchUsers = useCallback(async () => {
        setIsLoading(true)
        try {
            const query = new URLSearchParams({
                page: page.toString(),
                limit: "20",
                status: status,
                search: search
            })
            const res = await fetch(`/api/admin/users?${query.toString()}`)
            if (!res.ok) throw new Error("Failed to fetch users")
            const data = await res.json()
            setUsers(data.users)
            setTotal(data.total)
            setTotalPages(data.totalPages)
        } catch (err) {
            toast.error("Could not load users")
        } finally {
            setIsLoading(false)
        }
    }, [page, status, search])

    // Fetch Stats (called separately or extracted from main query if overhead is high)
    const fetchStats = useCallback(async () => {
        try {
            const statuses = ["all", "pending", "active", "disabled"]
            const counts = await Promise.all(
                statuses.map(s =>
                    fetch(`/api/admin/users?limit=1&status=${s}`).then(r => r.json().then(d => d.total))
                )
            )
            setStats({
                total: counts[0],
                pending: counts[1],
                active: counts[2],
                disabled: counts[3]
            })
        } catch (err) {
            console.error("Stats fetch failed", err)
        }
    }, [])

    useEffect(() => {
        checkAccess()
    }, [checkAccess])

    useEffect(() => {
        if (currentUser) {
            fetchUsers()
            fetchStats()
        }
    }, [currentUser, fetchUsers, fetchStats])

    // Debounced Search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentUser) fetchUsers()
        }, 300)
        return () => clearTimeout(timer)
    }, [search, currentUser, fetchUsers])

    const handleAction = async (userId: string, action: string) => {
        setIsActionLoading(userId)
        try {
            const res = await fetch(`/api/admin/users/${userId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action })
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data.error || "Action failed")

            // Optimistic Update
            setUsers(prev => prev.map(u => u.id === userId ? data : u))
            toast.success(`${action.charAt(0).toUpperCase() + action.slice(1)} successful`)
            fetchStats() // refresh counts
        } catch (err: any) {
            toast.error(err.message)
        } finally {
            setIsActionLoading(null)
            setUserToDisable(null)
        }
    }

    const getRoleColor = (role: string) => {
        switch (role) {
            case "super-admin": return "bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-transparent"
            case "admin": return "bg-purple-500/10 text-purple-400 border-purple-500/20"
            default: return "bg-blue-500/10 text-blue-400 border-blue-500/20"
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            case "disabled": return "bg-red-500/10 text-red-400 border-red-500/20"
            case "pending": return "bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse"
            default: return "bg-gray-500/10 text-gray-400 border-gray-500/20"
        }
    }

    if (!currentUser) return null

    return (
        <div className="min-h-screen bg-[#050510] text-gray-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            User Management
                        </h1>
                        <p className="text-gray-400 mt-1">
                            Manage permissions, approvals, and account states.
                        </p>
                    </div>
                    {stats.pending > 0 && (
                        <Badge variant="destructive" className="w-fit h-fit px-4 py-1.5 text-sm animate-bounce shadow-lg shadow-red-500/20">
                            {stats.pending} pending approval
                        </Badge>
                    )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: "Total Users", value: stats.total, icon: Users, color: "blue" },
                        { label: "Pending", value: stats.pending, icon: Clock, color: "amber" },
                        { label: "Active", value: stats.active, icon: CheckCircle2, color: "emerald" },
                        { label: "Disabled", value: stats.disabled, icon: UserX, color: "red" },
                    ].map((stat, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={stat.label}
                            className="glass p-6 rounded-2xl border border-white/5 relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-${stat.color}-500/10 rounded-full blur-3xl -mr-8 -mt-8 transition-transform group-hover:scale-150`} />
                            <div className="flex items-center justify-between relative z-10">
                                <div>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                                </div>
                                <div className={`p-3 bg-${stat.color}-500/10 rounded-xl border border-${stat.color}-500/20`}>
                                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Filters & Table */}
                <div className="glass rounded-3xl border border-white/5 overflow-hidden">
                    <div className="p-6 border-b border-white/5 space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <Tabs value={status} onValueChange={setStatus} className="w-full md:w-auto">
                                <TabsList className="bg-black/40 border border-white/5 p-1 rounded-xl">
                                    <TabsTrigger value="all" className="rounded-lg px-6">All</TabsTrigger>
                                    <TabsTrigger value="pending" className="rounded-lg px-6 relative">
                                        Pending
                                        {stats.pending > 0 && (
                                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center border-2 border-[#050510]">
                                                {stats.pending}
                                            </span>
                                        )}
                                    </TabsTrigger>
                                    <TabsTrigger value="active" className="rounded-lg px-6">Active</TabsTrigger>
                                    <TabsTrigger value="disabled" className="rounded-lg px-6">Disabled</TabsTrigger>
                                </TabsList>
                            </Tabs>

                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <Input
                                    placeholder="Search by name or email..."
                                    className="bg-black/40 border-white/5 pl-10 h-11 rounded-xl focus:ring-blue-500/50"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-white/5">
                                <TableRow className="hover:bg-transparent border-white/5">
                                    <TableHead className="text-gray-400 font-medium py-4 px-6">User</TableHead>
                                    <TableHead className="text-gray-400 font-medium">Role</TableHead>
                                    <TableHead className="text-gray-400 font-medium">Status</TableHead>
                                    <TableHead className="text-gray-400 font-medium">Joined</TableHead>
                                    <TableHead className="text-right px-6"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <AnimatePresence mode="popLayout">
                                    {isLoading ? (
                                        <TableRow className="hover:bg-transparent border-transparent">
                                            <TableCell colSpan={5} className="h-48 text-center">
                                                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mx-auto" />
                                            </TableCell>
                                        </TableRow>
                                    ) : users.length === 0 ? (
                                        <TableRow className="hover:bg-transparent border-transparent">
                                            <TableCell colSpan={5} className="h-48 text-center text-gray-500">
                                                No users found matching your filters.
                                            </TableCell>
                                        </TableRow>
                                    ) : (
                                        users.map((user, idx) => (
                                            <motion.tr
                                                key={user.id}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 10 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="group border-white/5 hover:bg-white/[0.02] transition-colors"
                                            >
                                                <TableCell className="py-4 px-6">
                                                    <div className="flex items-center gap-3">
                                                        <Avatar className="h-10 w-10 border border-white/10">
                                                            <AvatarImage src={user.avatar || ""} />
                                                            <AvatarFallback className="bg-blue-500/10 text-blue-400 text-xs">
                                                                {user.name.slice(0, 2).toUpperCase()}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex flex-col min-w-0">
                                                            <span className="font-semibold text-gray-100 truncate">{user.name}</span>
                                                            <span className="text-sm text-gray-500 truncate">{user.email}</span>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className={`rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${getRoleColor(user.role)}`}>
                                                        {user.role === "super-admin" ? "Gold Admin" : user.role}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <Badge variant="outline" className={`rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${getStatusColor(user.status)}`}>
                                                        {user.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-sm text-gray-400">
                                                    {new Date(user.created_at).toLocaleDateString(undefined, {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric"
                                                    })}
                                                </TableCell>
                                                <TableCell className="text-right px-6">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10 rounded-lg">
                                                                {isActionLoading === user.id ? (
                                                                    <Loader2 className="h-4 w-4 animate-spin text-blue-400" />
                                                                ) : (
                                                                    <MoreHorizontal className="h-4 w-4 text-gray-400" />
                                                                )}
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="bg-[#0f0f1a] border-white/10 text-gray-200 w-48 rounded-xl shadow-2xl p-1">
                                                            <DropdownMenuLabel className="text-gray-500 text-[10px] uppercase font-bold tracking-widest px-2 py-2">Account Actions</DropdownMenuLabel>

                                                            {user.status === "pending" && (
                                                                <DropdownMenuItem
                                                                    onClick={() => handleAction(user.id, "approve")}
                                                                    className="rounded-lg focus:bg-emerald-500/10 focus:text-emerald-400 cursor-pointer"
                                                                >
                                                                    <UserCheck className="w-4 h-4 mr-2" /> Approve User
                                                                </DropdownMenuItem>
                                                            )}

                                                            {user.status === "active" && (
                                                                <DropdownMenuItem
                                                                    onClick={() => setUserToDisable(user)}
                                                                    className="rounded-lg focus:bg-red-500/10 focus:text-red-400 cursor-pointer"
                                                                >
                                                                    <UserX className="w-4 h-4 mr-2" /> Disable User
                                                                </DropdownMenuItem>
                                                            )}

                                                            {user.status === "disabled" && (
                                                                <DropdownMenuItem
                                                                    onClick={() => handleAction(user.id, "enable")}
                                                                    className="rounded-lg focus:bg-blue-500/10 focus:text-blue-400 cursor-pointer"
                                                                >
                                                                    <UserPlus className="w-4 h-4 mr-2" /> Enable User
                                                                </DropdownMenuItem>
                                                            )}

                                                            {currentUser.role === "super-admin" && (
                                                                <>
                                                                    <DropdownMenuSeparator className="bg-white/5 mx-2 my-1" />
                                                                    <DropdownMenuLabel className="text-gray-500 text-[10px] uppercase font-bold tracking-widest px-2 py-2">Role Management</DropdownMenuLabel>
                                                                    {user.role === "user" ? (
                                                                        <DropdownMenuItem
                                                                            onClick={() => handleAction(user.id, "promote")}
                                                                            className="rounded-lg focus:bg-purple-500/10 focus:text-purple-400 cursor-pointer"
                                                                        >
                                                                            <ShieldCheck className="w-4 h-4 mr-2" /> Promote to Admin
                                                                        </DropdownMenuItem>
                                                                    ) : (
                                                                        <DropdownMenuItem
                                                                            onClick={() => handleAction(user.id, "demote")}
                                                                            className="rounded-lg focus:bg-amber-500/10 focus:text-amber-400 cursor-pointer"
                                                                        >
                                                                            <UserMinus className="w-4 h-4 mr-2" /> Demote to User
                                                                        </DropdownMenuItem>
                                                                    )}
                                                                </>
                                                            )}
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </motion.tr>
                                        ))
                                    )}
                                </AnimatePresence>
                            </TableBody>
                        </Table>
                    </div>

                    {/* Pagination */}
                    {!isLoading && totalPages > 1 && (
                        <div className="p-6 border-t border-white/5 flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                                Page <span className="text-gray-200 font-medium">{page}</span> of {totalPages}
                            </span>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-lg bg-transparent border-white/5 hover:bg-white/5"
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                >
                                    <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="rounded-lg bg-transparent border-white/5 hover:bg-white/5"
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Disable Confirmation Dialog */}
            <AlertDialog open={!!userToDisable} onOpenChange={(open) => !open && setUserToDisable(null)}>
                <AlertDialogContent className="bg-[#0f0f1a] border-white/10 rounded-3xl shadow-2xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="text-gray-100 flex items-center gap-2">
                            <ShieldAlert className="w-5 h-5 text-red-500" />
                            Disable User Account?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-400">
                            This will immediately disable <span className="text-gray-100 font-semibold">{userToDisable?.name}</span>'s access.
                            They will be logged out of all active sessions and cannot access the dashboard until re-enabled.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel className="bg-transparent border-white/5 text-gray-400 hover:bg-white/5 rounded-xl">
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={() => userToDisable && handleAction(userToDisable.id, "disable")}
                            className="bg-red-600 hover:bg-red-700 text-white border-none rounded-xl"
                        >
                            Confirm Disable
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <style jsx global>{`
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
        </div>
    )
}
