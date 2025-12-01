'use client'

import { useState } from 'react'
import { Wand2 } from 'lucide-react'
import { generateForm } from '@/app/actions/form-builder'

export default function PromptInput() {
    const [prompt, setPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!prompt.trim()) return

        setIsLoading(true)
        try {
            await generateForm(prompt)
        } catch (error) {
            console.error(error)
            // Handle error (could use a toast here)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <div className="relative">
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe your form... e.g., 'Create a patient intake form asking for name, date of birth, and medical history.'"
                    className="w-full h-40 p-6 rounded-2xl border border-border bg-card text-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none shadow-sm transition-shadow"
                    disabled={isLoading}
                />
                <div className="absolute bottom-4 right-4">
                    <button
                        type="submit"
                        disabled={!prompt.trim() || isLoading}
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Wand2 className="w-5 h-5" />
                                Generate Form
                            </>
                        )}
                    </button>
                </div>
            </div>
        </form>
    )
}
