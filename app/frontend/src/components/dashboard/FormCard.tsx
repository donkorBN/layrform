import Link from 'next/link'
import { MoreHorizontal, MessageSquare, Calendar } from 'lucide-react'

export default function FormCard({ form }: { form: any }) {
    return (
        <Link href={`/dashboard/forms/${form.id}`} className="block group">
            <div className="bg-card hover:bg-secondary/20 border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${form.status === 'published'
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                        {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
                    </div>
                    <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-secondary transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                <h3 className="text-xl font-bold mb-2 font-serif group-hover:text-primary transition-colors line-clamp-1">
                    {form.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                    {form.description || 'No description provided.'}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>0 responses</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(form.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
