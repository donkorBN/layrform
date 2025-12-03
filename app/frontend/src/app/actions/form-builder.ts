'use server'

import fs from 'fs'
import path from 'path'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { generateObject } from 'ai'
import { google } from '@ai-sdk/google'
import { z } from 'zod'

export async function generateForm(prompt: string) {
    const supabase = await createClient()

    // Debug logging to file
    const logPath = path.join(process.cwd(), 'debug.log')
    const log = (msg: string) => fs.appendFileSync(logPath, new Date().toISOString() + ': ' + msg + '\n')

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

    // Debug logging
    log(`Generating form with prompt: ${prompt}`)
    log(`Has Google Key: ${!!process.env.GOOGLE_GENERATIVE_AI_API_KEY}`)

    try {
        const { object: formStructure } = await generateObject({
            model: google('gemini-1.5-flash'),
            schema: formSchema,
            prompt: `Create a form based on this description: "${prompt}". 
      Ensure the fields are relevant and cover all necessary information implied by the description.
      Use professional language.`
        })

        log('Success! Generated structure.')
        console.log('AI generated structure:', JSON.stringify(formStructure, null, 2))

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
            console.error('Supabase Insert Error:', error)
            throw new Error('Failed to save form to database: ' + error.message)
        }

        redirect('/dashboard')

    } catch (error: any) {
        log(`ERROR: ${error.message}`)
        log(`Full Error: ${JSON.stringify(error, Object.getOwnPropertyNames(error))}`)

        console.error('Full Error Details:', error)
        if (error.message.includes('API key')) {
            throw new Error('Invalid Google API Key. Please check your .env.local file.')
        }
        throw new Error(`Failed to generate form: ${error.message}`)
    }
}
