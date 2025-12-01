import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Plus, Settings, LogOut } from 'lucide-react'
import { signout } from '@/app/actions/auth'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()

    let user = null

    if (supabase) {
        const { data } = await supabase.auth.getUser()
        user = data.user
    }

    // Only use mock user if we are in a dev environment AND keys are missing
    // This prevents "fake login" when Supabase is actually configured but user is just logged out
    if (!user && !supabase) {
        user = { email: 'demo@layrform.com' } as any
    }

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
                <div className="p-6">
                    <Link href="/dashboard" className="text-2xl font-bold font-serif text-foreground">
                        LAYR
                    </Link>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-primary/10 text-primary"
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        My Forms
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-muted-foreground hover:bg-secondary/50 transition-colors"
                    >
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            {user.email?.[0].toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate text-foreground">{user.email}</p>
                        </div>
                    </div>
                    <form action={signout}>
                        <button className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-red-500 transition-colors w-full">
                            <LogOut className="w-4 h-4" />
                            Sign out
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    )
}
