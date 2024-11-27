import { SupabaseClient } from "../Supabase/Client";

const GetUser=async()=>{
    const { data, error } = await SupabaseClient
    .from('nombre_tabla')
    .select(`
      campo1,
      campo2
    `);

  if (error) {
    console.error("Error al obtener datos", error);
    return [];
  }

  return data;
}