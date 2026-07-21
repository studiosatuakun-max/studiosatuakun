<!-- BEGIN:catalog-automation-rules -->
# Catalog Ingestion Automation Rule

**Trigger:** When the user shares a GitHub repository link for a template or project.

**Action:**
1. **Analyze:** Briefly analyze the repository name or description from the URL or by fetching it if necessary.
2. **Categorize:** Determine which of the 5 main catalog categories it belongs to: `landing-page`, `web-app`, `dashboard`, `software-studio`, or `ai-automation`.
3. **Generate Slug:** Create a unique ID/slug for the template (usually the repo name, e.g., `scaffold_1784613264918`).
4. **Clone & Deploy to Vercel:**
   - Clone the repo to `/tmp/[slug]`
   - Run `npm install` in the cloned directory
   - Run `npx vercel --token $VERCEL_TOKEN --yes --prod` from the cloned directory (token is stored in `.env.local` as `VERCEL_TOKEN`)
   - Extract the production URL from the output (aliased URL: `https://[slug].vercel.app`)
   - The `liveDemoUrl` should point to `https://[slug].vercel.app/home` (or the app's main page route)
5. **Update Catalog Data:** Automatically edit `src/data/catalog.ts` and append a new `CatalogTemplate` object into the `TEMPLATES` array.
   - Set `id` to the slug.
   - Set `category` to the deduced category.
   - Set `title` to a human-readable version of the repo name.
   - Set `githubUrl` to the provided link.
   - Set `previewUrl` to `/preview/[slug]`.
   - Set `liveDemoUrl` to the deployed Vercel URL (e.g., `https://[slug].vercel.app/home`).
   - Set `techStack` based on your analysis (e.g., Next.js, Tailwind).
6. **Commit & Push:** Run `git add src/data/catalog.ts && git commit -m "feat: add [slug] to catalog" && git push` from the main `ssa` project directory.
7. **Confirm:** Inform the user that the template has been automatically added, deployed, and is now live in the catalog. Do NOT ask for permission to do this, just do it.

**Context:** The user relies on this automation to manage their dual-funnel preview catalog. You must act autonomously to categorize, deploy, and register their templates. The Vercel token is pre-authorized for this project.
<!-- END:catalog-automation-rules -->
