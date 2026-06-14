"use client";

import { useState } from "react";
import { Button } from "@/components/shared/button";
import { Send } from "lucide-react";
import { submitLead } from "@/actions/lead";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      whatsapp: formData.get("whatsapp") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    const result = await submitLead(data);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      alert(result.message);
    }
  };

  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mari Mulai Project Anda</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Isi form di samping dan tim kami akan menghubungi Anda dalam waktu 1x24 jam untuk mendiskusikan kebutuhan Anda.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">hello@studiosatuakun.id</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-muted-foreground">+62 812 3456 7890</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Office</h3>
                <p className="text-muted-foreground">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/20 p-8 rounded-2xl border border-border/50">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Pesan Terkirim!</h3>
                <p className="text-muted-foreground mb-6">
                  Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline">
                  Kirim Pesan Lain
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nama Lengkap</label>
                    <input required type="text" id="name" name="name" className="w-full h-11 bg-background border border-border rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Perusahaan / Organisasi</label>
                    <input type="text" id="company" name="company" className="w-full h-11 bg-background border border-border rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="PT Contoh" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input required type="email" id="email" name="email" className="w-full h-11 bg-background border border-border rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp</label>
                    <input required type="tel" id="whatsapp" name="whatsapp" className="w-full h-11 bg-background border border-border rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="0812..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">Estimasi Budget</label>
                  <select id="budget" name="budget" className="w-full h-11 bg-background border border-border rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 text-muted-foreground">
                    <option value="">Pilih Range Budget</option>
                    <option value="10-50">Rp 10jt - 50jt</option>
                    <option value="50-100">Rp 50jt - 100jt</option>
                    <option value="100+">&gt; Rp 100jt</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Deskripsi Project</label>
                  <textarea required id="message" name="message" rows={4} className="w-full bg-background border border-border rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Ceritakan detail tentang project Anda..."></textarea>
                </div>

                <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
