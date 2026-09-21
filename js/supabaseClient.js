/* ============================================================
   supabaseClient.js — conexão com o Supabase

   >>> COLE AQUI os mesmos dois valores que você já usava. <<<
   Painel do Supabase > Project Settings > API:
     - SUPABASE_URL      = "Project URL"  (SÓ a URL base, termina em .supabase.co
                                           — SEM /rest/v1 no final!)
     - SUPABASE_ANON_KEY = chave "anon public" (ou "publishable")
   NUNCA use a chave "service_role" aqui.
   ============================================================ */
const SUPABASE_URL = 'https://itektsdofwuqkktzqmre.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wiauQzCCTQVV4hxidr9gqA_flt_R352';

// Não mexa daqui para baixo
window.supabaseClient =
  window.supabase && !SUPABASE_URL.startsWith('COLE_AQUI')
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
