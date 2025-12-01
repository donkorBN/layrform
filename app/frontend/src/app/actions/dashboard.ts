'use server'

import { createClient } from '@/utils/supabase/server'

export async function getForms() {
    const supabase = await createClient()

    if (!supabase) {
        // Return mock data if Supabase is not configured
        return {
            forms: [
                {
                    id: '1',
                    title: 'Patient Intake Form',
                    description: 'Standard intake for new patients',
                    status: 'published',
                    created_at: new Date().toISOString(),
                },
                {
                    id: '2',
                    title: 'Event Feedback',
                    description: 'Feedback collection for the design workshop',
                    status: 'draft',
                    created_at: new Date().toISOString(),
                },
            ],
            error: null
        }
    }

    try {
        const { data: forms, error } = await supabase
            .from('forms')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching forms:', error)
            return { forms: [], error: error.message }
        }

        return { forms, error: null }
    } catch (error) {
        console.error('Unexpected error:', error)
        return { forms: [], error: 'An unexpected error occurred' }
    }
}
