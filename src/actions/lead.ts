"use server";

import { revalidatePath } from "next/cache";

// Type definition for Lead
export interface LeadData {
  name: string;
  company?: string;
  email: string;
  whatsapp: string;
  budget?: string;
  message: string;
}

export async function submitLead(data: LeadData) {
  try {
    // In a real application, you would connect to Supabase here:
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
    // const { error } = await supabase.from('leads').insert([data]);
    // if (error) throw error;
    
    // For now, we simulate a successful database insertion
    console.log("New Lead Received:", data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Optional: Revalidate paths if needed
    // revalidatePath("/admin/leads");

    return { success: true, message: "Pesan berhasil terkirim." };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { success: false, message: "Terjadi kesalahan. Silakan coba lagi." };
  }
}
