import { Plus } from 'lucide-react'

export default function DashboardHeader() {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold font-serif text-foreground">My Forms</h1>
                <p className="text-muted-foreground mt-1">Manage and track your conversational forms.</p>
            </div>

            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                <Plus className="w-5 h-5" />
                Create Form
            </button>
        </div>
    )
}
