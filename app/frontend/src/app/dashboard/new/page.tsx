import PromptInput from '@/components/form-builder/PromptInput'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewFormPage() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                </Link>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold font-serif mb-4">Create a new form</h1>
                    <p className="text-xl text-muted-foreground">
                        Just describe what you need, and we'll build it for you.
                    </p>
                </div>

                <PromptInput />
            </div>
        </div>
    )
}
