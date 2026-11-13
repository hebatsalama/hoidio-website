# Hoidio website – instructions for coding agents

This repository is the public marketing website for **Hoidio**, a medication organizer app for seniors and their family caregivers. It is served at **https://hoidio.com** by GitHub Pages straight from the `main` branch.

## How the site is built

- Plain static HTML and one stylesheet. **No build step, no framework, no package.json, no JavaScript dependencies.** Do not add any.
- `.nojekyll` is present, so every file in the repo is published as is. `CNAME` must stay `hoidio.com`.
- One shared stylesheet: `styles.css`. Reuse its existing classes and CSS variables before adding new ones. New CSS goes into `styles.css`, never inline `<style>` blocks or `style=""` attributes.
- Icons are inline SVG (24×24 viewBox, `stroke="currentColor"`, `stroke-width="2"`, round caps and joins, `aria-hidden="true"`). Follow the same pattern for new icons.
- The only script on the site is the small tab switcher at the bottom of each `index.html`. Keep scripts minimal and vanilla.
- No analytics, trackers, cookies, cookie banners, external widgets or new third-party requests. The site promises "no tracking". The only external resource is Google Fonts.

## Files and languages

| Page | English | Finnish | Arabic (RTL) |
| --- | --- | --- | --- |
| Home | `index.html` | `fi/index.html` | `ar/index.html` |
| Terms of use | `terms.html` | `fi/kayttoehdot.html` | – |
| Privacy policy | `privacy.html` | `fi/tietosuoja.html` | – |
| Support | `support.html` | – | – |
| Not found | `404.html` | – | – |

- **English is the reference.** Any content change to a home page must be made in all three home pages (`index.html`, `fi/index.html`, `ar/index.html`), and any change to terms or privacy in both the English and the Finnish version. Keep the same section order and classes across languages.
- Section ids differ by language and must stay as they are: English and Arabic use English ids (`#how`, `#faq`); Finnish uses Finnish ids (`#miten`, `#tuki`, `…-otsikko` for headings). The Finnish home page also has a longer FAQ and different nav links than the English one; keep those.
- `styles.css` has a dark theme (`prefers-color-scheme: dark`). Use the CSS variables (`--surface`, `--ink`, `--muted`, `--accent`, `--chip`, `--line`, `--amber` …) instead of fixed colours so new parts work in both themes.
- Arabic pages use `<html lang="ar" dir="rtl">`. Keep the RTL layout working: check that new components mirror correctly (use logical CSS properties such as `margin-inline-start`, `padding-inline`, `inset-inline-end` instead of left/right).
- The plan name **Hoidio Family** stays in Latin script in every language (it is the name shown in the stores), as do App Store and Google Play. In Arabic running text the app itself is written هويديو, as the Arabic page already does.
- Prices are written the local way: `4,99 €` in Finnish, `€4.99` in English, `4.99 €` in Arabic.

## Product facts (source of truth – do not invent others)

- Hoidio is **free for the person whose medicines it tracks**: all of their own features, any number of medicines, and inviting caregivers. Always free.
- **Free view for caregivers:** without a plan, a caregiver can follow **one** person and see their medicine schedule and the doses they have taken. No alerts, no summaries.
- **Hoidio Family** is the paid caregiver plan:
  - Alert if a reminder isn't confirmed or the daily "I'm OK" check-in isn't answered
  - Daily, weekly or monthly summaries
  - Follow up to **2 people**, with up to **3 caregivers** on one plan (only one caregiver pays)
  - The full health record when the person allows it: visits, side effects and measurements
- Price: **€4.99 per month or €49.99 per year**, VAT included. Every new plan starts with a **14-day free trial**.
- Bought in the app through the App Store or Google Play. Renews automatically; cancel in the Apple or Google account settings at least 24 hours before the period ends. Deleting the app does not cancel it.
- The apps are **not in the stores yet**. Keep "Coming soon for iPhone and Android". Never add store badges, download links or "available now".
- App languages: Finnish, Swedish, English, Arabic. Users must be 18 or over.
- Data is stored in the EU (Frankfurt). No ads, no tracking, never sold.
- Company line (footer): `© 2026 Laryngology Courses Oy (HLC-International), Espoo, Finland`. Do not change it.

## Writing rules

- Plain, warm, short sentences. The readers are seniors and their adult children.
- No medical claims. Hoidio organizes information and reminds; it does not diagnose, treat or advise. Keep the disclaimer "Hoidio helps you organize your health information. It does not replace advice from your doctor or pharmacist." on every home page.
- Never promise that an alert always arrives. Say "can get an alert".
- Do not mention competitors.

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

- Never push to `main` directly: `main` is live on hoidio.com. Work on a branch and open a pull request for Heba to review.
- Commit messages in English, imperative ("Add Hoidio Family pricing section").
- Don't commit generated files, screenshots or editor folders.
