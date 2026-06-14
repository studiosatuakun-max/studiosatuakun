"use client";

import { ArrowLeft, Link as LinkIcon, User, AtSign } from "lucide-react";
import Link from "next/link";
import { Button } from "../shared/button";

// LOCKED COMPONENT as per <RULE[user_global]>
// DILARANG KERAS mengubah tata letak UI, ikon sosial media, atau logika tab pada komponen ini tanpa perintah eksplisit dari Owner.

interface ProfileData {
  name: string;
  role: string;
  bio: string;
  slug: string;
}

export function ProfileView({ data }: { data: ProfileData }) {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link href="/about" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Tim
      </Link>

      <div className="bg-secondary/20 rounded-3xl border border-border/50 p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Placeholder */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex-shrink-0 flex items-center justify-center text-4xl font-bold text-primary">
            {data.name.charAt(0)}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{data.name}</h1>
            <p className="text-primary font-medium text-lg mb-6">{data.role}</p>
            
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">
                {data.bio}
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <LinkIcon className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <User className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <AtSign className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
