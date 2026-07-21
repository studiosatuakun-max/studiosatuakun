'use server';

import { supabase } from '@/lib/supabase';

export type OrderPayload = {
  template_id: string;
  template_title: string;
  full_name: string;
  email: string;
  whatsapp: string;
  company?: string;
  domain_plan?: string;
  content_status: 'ready' | 'need_dummy';
  addons: string[];
  notes?: string;
};

export async function submitOrder(data: OrderPayload): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('orders').insert([
    {
      template_id: data.template_id,
      template_title: data.template_title,
      full_name: data.full_name,
      email: data.email,
      whatsapp: data.whatsapp,
      company: data.company || null,
      domain_plan: data.domain_plan || null,
      content_status: data.content_status,
      addons: data.addons,
      notes: data.notes || null,
      status: 'new',
    },
  ]);

  if (error) {
    console.error('Supabase insert error:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
