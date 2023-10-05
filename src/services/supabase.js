import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://isuulpvpwkerixwaodul.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXVscHZwd2tlcml4d2FvZHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDU3NzUsImV4cCI6MjAxMjA4MTc3NX0.keNYjLGxMpB_g3em8E_4cZ1rOshS6aG8lMsz9cN68ZE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;