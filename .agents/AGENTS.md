<!-- BEGIN:catalog-automation-rules -->
# Catalog Ingestion Automation Rule

**Trigger:** When the user shares a GitHub repository link for a template or project.

**Action:**
1. **Analyze:** Briefly analyze the repository name or description from the URL or by fetching it if necessary.
2. **Categorize:** Determine which of the 5 main catalog categories it belongs to: `landing-page`, `web-app`, `dashboard`, `software-studio`, or `ai-automation`.
3. **Generate Slug:** Create a unique ID/slug for the template (usually the repo name, e.g., `scaffold_1784613264918`).
4. **Update Catalog Data:** Automatically edit `src/data/catalog.ts` and append a new `CatalogTemplate` object into the `TEMPLATES` array.
   - Set `id` to the slug.
   - Set `category` to the deduced category.
   - Set `title` to a human-readable version of the repo name.
   - Set `githubUrl` to the provided link.
   - Set `previewUrl` to `/preview/[slug]`.
   - Set `techStack` based on your analysis (e.g., Next.js, Tailwind).
5. **Confirm:** Inform the user that the template has been automatically added to the catalog under the specific category. Do NOT ask for permission to do this, just do it.

**Context:** The user relies on this automation to manage their dual-funnel preview catalog. You must act autonomously to categorize their templates.
<!-- END:catalog-automation-rules -->
