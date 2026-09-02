import { createClient } from '@supabase/supabase-js'

// Add these values to .env; they are intentionally not committed.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

// Helper functions for common operations
export const submitContactForm = async (formData) => {
  if (!supabase) return { error: { message: 'Supabase not configured' } }
  return await supabase
    .from('contact_submissions')
    .insert([formData])
}

export const fetchFromTable = async (tableName, options = {}) => {
  if (!supabase) return { error: { message: 'Supabase not configured' } }
  let query = supabase.from(tableName).select(options.select || '*')
  
  if (options.limit) query = query.limit(options.limit)
  if (options.orderBy) query = query.order(options.orderBy, { ascending: options.ascending !== false })
  if (options.filter) {
    const [column, operator, value] = options.filter
    query = query.filter(column, operator, value)
  }
  
  return await query
}

export const deleteFromTable = async (tableName, id) => {
  if (!supabase) return { error: { message: 'Supabase not configured' } }
  return await supabase
    .from(tableName)
    .delete()
    .eq('id', id)
}

export const updateTable = async (tableName, id, updateData) => {
  if (!supabase) return { error: { message: 'Supabase not configured' } }
  return await supabase
    .from(tableName)
    .update(updateData)
    .eq('id', id)
}