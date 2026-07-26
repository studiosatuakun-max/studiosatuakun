<!-- BEGIN:catalog-automation-rules -->
# Catalog Ingestion Automation Rule

**Trigger:** When the user shares a GitHub repository link for a template or project.

**Action:**
1. **Analyze:** Fetch the repo URL and examine its name, README, and `src/` structure to understand the template's purpose and target industry.
2. **Categorize:** Determine which of the 5 main catalog categories it belongs to:
   - `landing-page` — UMKM, barbershop, agency, F&B, personal brand
   - `web-app` — booking system, SaaS, portal, marketplace
   - `dashboard` — admin panel, data visualization, reporting tool
   - `umkm` — sistem ERP lokal, POS, portal operasional UMKM
   - `ai-automation` — LLM integration, RAG system, agentic workflow
3. **Generate Slugs:**
   - `repoSlug`: Use the exact repository name (e.g., `fade_1784619000074`) for git cloning and vercel deploying.
   - `cleanSlug`: Remove any trailing timestamp numbers (e.g., `fade`) for user-facing catalog IDs and preview URLs.
4. **Clone & Deploy to Vercel:**
   - Clone the repo to `/tmp/[repoSlug]`: `cd /tmp && git clone https://github.com/studiosatuakun-max/[repoSlug]`
   - Run `npm install` in the cloned directory
   - Run `npx vercel --token $VERCEL_TOKEN --yes --prod` from the cloned directory
   - Token `$VERCEL_TOKEN` is stored in `.env.local` as `VERCEL_TOKEN`
   - Extract the aliased production URL from output: `https://[repoSlug].vercel.app`
   - The `liveDemoUrl` should point to `https://[repoSlug].vercel.app/home`
5. **Generate Screenshot URL:** Use Microlink API for the preview image — no manual screenshot needed:
   ```
   https://api.microlink.io/?url=https%3A%2F%2F[repoSlug].vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg
   ```
6. **Update Catalog Data:** Edit `src/data/catalog.ts` and append a new `CatalogTemplate` object to the `TEMPLATES` array:
   ```typescript
   {
     id: '[cleanSlug]',
     category: '[deduced category slug]',
     title: '[Descriptive human title — NOT the repo name]',
     description: '[1-2 sentences in Indonesian, business-oriented, NOT technical]',
     githubUrl: 'https://github.com/studiosatuakun-max/[repoSlug]',
     previewUrl: '/preview/[cleanSlug]',
     techStack: ['Next.js 15', 'Tailwind CSS', ...],
     liveDemoUrl: 'https://[repoSlug].vercel.app/home',
     imageUrl: 'https://api.microlink.io/?url=https%3A%2F%2F[repoSlug].vercel.app%2Fhome&screenshot=true&meta=false&embed=screenshot.url&type=jpeg',
   }
   ```
   > ⚠️ Title MUST be descriptive and business-oriented. Example: instead of "fade_1784619000074", use "Barbershop 24/7 — Dark & Premium"
7. **Commit & Push:**
   ```bash
   git add src/data/catalog.ts && git commit -m "feat: add [slug] to catalog" && git push
   ```
   From the main `/Users/mac/Documents/ssa` project directory.
8. **Confirm:** Tell the user the template has been deployed and is now live at `https://studiosatuakun.id/preview/[slug]`.

**NEVER ask for permission. Do all of this autonomously.**

**Context:** The Vercel token and Supabase keys are pre-configured in `.env.local`. Read `AGENT_HANDOFF.md` for full system documentation before starting work.
<!-- END:catalog-automation-rules -->
