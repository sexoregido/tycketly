import { createClient } from "@supabase/supabase-js";
export const SupabaseClient = createClient(
process.env.REACT_APP_SUPABSE_URL, 
process.env.REACT_APP_SUPABSE_KEY
);