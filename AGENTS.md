# Hoidio website – instructions for coding agents

This repository is the public marketing website for **Hoidio**, a medication organizer app for seniors and their family caregivers. It is served at **https://hoidio.com** by GitHub Pages straight from the `main` branch.

## How the site is built

- Plain static HTML and one stylesheet. **No build step, no framework, no package.json, no JavaScript dependencies.** Do not add any.
- `.nojekyll` is present, so every file in the repo is published as is. `CNAME` must stay `hoidio.com`.
- One shared stylesheet: `styles.css`. Reuse its existing classes and CSS variables before adding new ones. New CSS goes into `styles.css`, never inline `<style>` blocks or `style=""` attributes.
- Icons are inline SVG (24×24 viewBox, `stroke="currentColor"`, `stroke-width="2"`, round caps and joins, `aria-hidden="true"`). Follow the same pattern for new icons.
- Scripts on the site: the small tab switcher at the bottom of each `index.html`, `notify.js` (iPhone launch sign-up form and Google Play campaign tags, home pages only), and `ga.js` (Google Analytics) in every page's `<head>`. Keep scripts minimal and vanilla.
- Website statistics: Google Analytics 4 (`G-91C7M618EW`) in **cookieless mode only** (decided by Ahmed, 23 Nov 2026): `analytics_storage`, ad storage and all other consent types stay `denied`, Google signals and ad personalisation off. Never set cookies or local storage, never add a cookie banner, other trackers, pixels, external widgets or new third-party requests. The only external resources are Google Analytics and, only when a visitor submits it, the iPhone launch sign-up form (`notify.js`), which sends to Hoidio's own Supabase project (EU – Frankfurt, table `launch_signups`, insert-only public key; agreed by Heba and Ahmed, 25 Nov 2026). Fonts are self-hosted in `/fonts/` (`fonts.css`, Arabic pages `fonts-ar.css`, same files as Google Fonts) and the main ones are preloaded in each page's `<head>`; don't load Google Fonts again. The privacy policy (EN + FI, section 5 "Website statistics") describes this; update it if the setup changes.

## Files and languages

| Page | English | Finnish | Swedish | Arabic (RTL) |
| --- | --- | --- | --- | --- |
| Home | `index.html` | `fi/index.html` | `sv/index.html` | `ar/index.html` |
| Terms of use | `terms.html` | `fi/kayttoehdot.html` | – | – |
| Privacy policy | `privacy.html` | `fi/tietosuoja.html` | – | – |
| Support | `support.html` | – | – | – |
| Not found | `404.html` | – | – | – |
| Guides (SEO) | – | `fi/laakemuistutus.html`, `fi/omaishoitaja-laakkeet.html`, `fi/laakelista.html`, `fi/reseptin-uusiminen.html`, `fi/dosetti-vai-sovellus.html` | – | – |

- The Finnish guide pages are general, practical texts (no medical advice). Heba (licensed pharmacist) checks any change to their health content. Each has an `Article` JSON-LD block and a sitemap entry.

- **English is the reference.** Any content change to a home page must be made in all four home pages (`index.html`, `fi/index.html`, `sv/index.html`, `ar/index.html`), and any change to terms or privacy in both the English and the Finnish version. Keep the same section order and classes across languages.
- Section ids differ by language and must stay as they are: English, Swedish and Arabic use English ids (`#how`, `#faq`); Finnish uses Finnish ids (`#miten`, `#tuki`, `…-otsikko` for headings). The Finnish home page also has a longer FAQ and different nav links than the English one; keep those.
- `styles.css` has a dark theme (`prefers-color-scheme: dark`). Use the CSS variables (`--surface`, `--ink`, `--muted`, `--accent`, `--chip`, `--line`, `--amber` …) instead of fixed colours so new parts work in both themes.
- Arabic pages use `<html lang="ar" dir="rtl">`. Keep the RTL layout working: check that new components mirror correctly (use logical CSS properties such as `margin-inline-start`, `padding-inline`, `inset-inline-end` instead of left/right).
- The plan name **Hoidio Family** stays in Latin script in every language (it is the name shown in the stores), as do App Store and Google Play. In Arabic running text the app itself is written هويديو, as the Arabic page already does.
- Prices are written the local way: `4,99 €` in Finnish and Swedish, `€4.99` in English, `4.99 €` in Arabic.

## Product facts (source of truth – do not invent others)

**Final subscription model (decided 14 Nov 2026 by Heba and Ahmed – do not change or reopen):**

- Hoidio is **free for the person whose medicines it tracks**: all of their own features, any number of medicines, and inviting caregivers. Always free.
- **Caregivers need Hoidio Family from the very first caregiver.** There is **no free caregiver tier**: never write that a caregiver can follow someone, or see anything, for free (apart from the 14-day trial).
- **Hoidio Family** is the caregiver plan. It is needed to follow a person at all, and includes:
  - Seeing the person's medicine schedule, doses taken and "I'm OK" status
  - Alert if a reminder isn't confirmed or the daily "I'm OK" check-in isn't answered
  - Daily, weekly or monthly summaries
  - Follow up to **2 people**, with up to **3 caregivers** on one plan (only one caregiver pays)
  - The full health record when the person allows it: visits, side effects and measurements
- Price: **€4.99 per month or €49.99 per year**, VAT included. Every new caregiver starts with a **14-day free trial**; after it, a paid plan is needed to keep following.
- Bought in the app through the App Store or Google Play. Renews automatically; cancel in the Apple or Google account settings at least 24 hours before the period ends. Deleting the app does not cancel it.
- **Android is live** on Google Play: https://play.google.com/store/apps/details?id=com.hoidio.app. **iPhone is not in the App Store yet**: keep "coming soon" for iPhone and never add an App Store link or "available now" for iPhone until Apple has approved and released the app (then use https://apps.apple.com/app/id6831315840).
- App languages: Finnish, Swedish, English, Arabic. Users must be 18 or over.
- Data is stored in the EU (Frankfurt). No ads, no tracking, never sold.
- Company name: write **HLC-International** (the auxiliary business name, aputoiminimi, of Laryngology Courses Oy). Footer: `© 2026 HLC-International, Espoo, Finland` (Finnish pages: `…, Espoo`). Never add "Oy" to HLC-International. Terms and privacy keep the legal company and Business ID 3421195-7 next to it (e.g. "HLC-International, an auxiliary business name of Laryngology Courses Oy"). Do not change this without Ahmed or Heba.

## Writing rules

- Plain, warm, short sentences. The readers are seniors and their adult children.
- No medical claims. Hoidio organizes information and reminds; it does not diagnose, treat or advise. Keep the disclaimer "Hoidio helps you organize your health information. It does not replace advice from your doctor or pharmacist." on every home page.
- Never promise that an alert always arrives. Say "can get an alert".
- Do not mention competitors.

## Search engines and AI assistants

- Every page's `<head>` has: a title (about 50–60 characters) and description (up to about 160), `rel="canonical"`, `hreflang` links to its translations plus `x-default` (the English page), Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image` with that language's promo poster, `og:locale`) and `twitter:card`.
- The four home pages also have one `application/ld+json` block (Organization, WebSite, MobileApplication, FAQPage). **When you change a home page FAQ, update the FAQPage answers in the same page's JSON-LD.**
- When you add, rename or remove a page, update `sitemap.xml` (with its `xhtml:link` alternates) and `llms.txt` in the same pull request.
- `llms.txt` is the plain-language summary for AI assistants. Keep it in line with the product facts above.
- `robots.txt` allows all crawlers, including AI crawlers, and points to the sitemap. `404.html` stays `noindex`.

## Accessibility (required)

- One `<h1>` per page; sections use `<section aria-labelledby="…">` with a matching heading id, like the existing sections.
- Text contrast at least WCAG AA; don't rely on colour alone (e.g. "Included / Not included" must also be written or announced, not only shown as ✓/✗).
- Tap targets at least 44×44 px. Keyboard focus must stay visible.
- Tables need `<caption>` or `aria-label`, `<th scope>` on headers.

## Checking your work

There is nothing to compile. Before finishing:

```bash
# 1. Serve the site locally and open / , /fi/ and /ar/ (also at 375 px width)
python3 -m http.server 8080

# 2. All internal links and anchors resolve (no output = good)
grep -rhoE 'href="/[^"#]*' --include=*.html . | sed 's/href="//' | sort -u | while read p; do f=".$p"; [ -d "$f" ] && f="$f/index.html"; [ -e "$f" ] || echo "missing: $p"; done

# 3. Section ids and headings per home page (compare: same sections, same order)
for f in index.html fi/index.html ar/index.html; do echo "$f: $(grep -oE '<section[^>]*' $f | grep -oE 'id="[^"]+"|aria-labelledby="[^"]+"' | tr '\n' ' ')"; done

# 4. HTML is well-formed (optional, needs network)
npx --yes html-validate index.html fi/index.html ar/index.html terms.html fi/kayttoehdot.html privacy.html fi/tietosuoja.html
```

## Git

- `main` is live on hoidio.com: whatever is merged into it is public within minutes.
- Two people own this website and may each change it on their own: **Heba Salama** (repository owner) and **Ahmed Geneid** (collaborator since 19 Nov 2026). Neither needs the other's approval. Ahmed may merge his own pull requests, and Heba hers.
- Work on a branch and open a pull request, so every change has a record and can be undone. The person who asked for the change (Heba or Ahmed) reviews and merges it. Push straight to `main` only when that person explicitly asks for it.
- Repository settings, collaborators, GitHub Pages and the domain stay with Heba as the owner.
- Commit messages in English, imperative ("Add Hoidio Family pricing section").
- Don't commit generated files, screenshots or editor folders.
