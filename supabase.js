import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://yxcmngjfckxthmptdifa.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4Y21uZ2pmY2t4dGhtcHRkaWZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1NjU0NzUsImV4cCI6MjAzMzE0MTQ3NX0.T3cgfWZwWHDym3nf61FKejWaBrSd8pS8xHwEc20Sl7M"

export const supabase = createClient(supabaseUrl,supabaseKey)