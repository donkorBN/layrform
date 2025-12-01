'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { generateObject } from 'ai'
import { openai } from '@ai-sdk/openai'
import { z } from 'zod'

export async function generateForm(prompt: string) {
    const supabase = await createClient()

    if (!supabase) {
        throw new Error('Supabase client not initialized')
    }

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Define the schema for the form structure
    const formSchema = z.object({
        title: z.string().describe('A clear, professional title for the form'),
        description: z.string().describe('A brief description of what the form is for'),
        fields: z.array(z.object({
            id: z.string().describe('Unique ID for the field (e.g., "field_1")'),
            type: z.enum(['text', 'email', 'textarea', 'number', 'select', 'date', 'tel']).describe('The type of input field'),
            label: z.string().describe('The question or label for the field'),
            required: z.boolean().describe('Whether this field is mandatory'),
            placeholder: z.string().optional().describe('Example text for the input'),
            options: z.array(z.string()).optional().describe('Options for select fields only')
        }))
    })

    try {
        const { object: formStructure } = await generateObject({
            model: openai('gpt-4o-mini'),
            schema: formSchema,
            prompt: `Create a form based on this description: "${prompt}". 
      Ensure the fields are relevant and cover all necessary information implied by the description.
      Use professional language.`
        })

        // Insert the new form
        const { data, error } = await supabase
            .from('forms')
            .insert({
                user_id: user.id,
                title: formStructure.title,
                description: formStructure.description,
                status: 'draft',
                fields: formStructure.fields
            })
            .select()
            .single()

        if (error) {
            console.error('Error creating form:', error)
            throw new Error('Failed to create form')
        }

        // In the future, we might redirect to the form editor
        // For now, back to dashboard to see the new form
        redirect('/dashboard')

    } catch (error) {
        console.error('AI Generation Error:', error)
        throw new Error('Failed to generate form. Please try again.')
    }
}
