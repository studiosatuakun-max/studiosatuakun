import { Metadata } from "next";
import { ProfileView } from "@/components/profile/profile-view";

// In a real app, this would come from a database or CMS
const getMemberData = (slug: string) => {
  return {
    name: slug.split("-").map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(" "),
    role: "Senior Full Stack Developer",
    bio: "Berpengalaman dalam membangun aplikasi web modern berskala besar menggunakan Next.js dan ekosistem React. Fokus pada performa, aksesibilitas, dan arsitektur kode yang clean.",
    slug,
  };
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = getMemberData(slug);
  
  return {
    title: `${member.name} - ${member.role} | Studio Satu Akun`,
    description: `Profil ${member.name}, ${member.role} di Studio Satu Akun.`,
  };
}

export default async function MemberProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = getMemberData(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "worksFor": {
      "@type": "GovernmentOrganization",
      "name": "Studio Satu Akun"
    },
    "url": `https://studiosatuakun.id/anggota/${slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="min-h-screen pt-24 pb-12 px-4 sm:px-8">
        <ProfileView data={member} />
      </section>
    </>
  );
}
