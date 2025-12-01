import { Mic } from 'lucide-react'

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-card/50 rounded-3xl border border-dashed border-border">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">No forms yet</h3>
            <p className="text-muted-foreground max-w-sm text-center mb-8">
                Create your first conversational form by simply describing what you need.
            </p>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Create your first form
            </button>
        </div>
    )
}
