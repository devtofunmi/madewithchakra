import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodGJmdGx0c2dwY3d5aGp2a2lyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzkwNTgyMCwiZXhwIjoxOTgzNDgxODIwfQ.pNLEa4B-Rm8xviKJ2sCCHmF6994SHk_oYbp0xLLW5RE";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
