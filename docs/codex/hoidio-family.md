# Task: add Hoidio Family to the website

Read `AGENTS.md` first. It has the product facts, file map, writing rules and checks.

**Goal:** the website explains clearly that Hoidio is free for the person taking the medicines, that a caregiver can follow one person for free, and that **Hoidio Family** (€4.99/month or €49.99/year, 14 days free) adds alerts, summaries and more people. Today the home pages don't mention any price, and the terms and privacy pages say a caregiver needs a subscription to follow anyone at all, which no longer matches the app ("free view").

Work on the branch `codex/hoidio-family` (it already holds `AGENTS.md` and this brief), and open **one pull request** from it to `main` with all the changes below. Keep `AGENTS.md` in the PR. Use the texts below **word for word**. If a text doesn't fit the layout, keep the words and adjust the layout.

---

## 1. Navigation link (all three home pages)

Add one `class="opt"` link in `<nav class="site-nav">`, placed just before the language links:

| Page | Link |
| --- | --- |
| `index.html` | `<a class="opt" href="/#pricing">Prices</a>` |
| `fi/index.html` | `<a class="opt" href="/fi/#hinnat">Hinnat</a>` |
| `ar/index.html` | `<a class="opt" href="/ar/#pricing">الأسعار</a>` |

Check that the header still fits on one line at 375 px wide (the `.opt` links may already be hidden on small screens; keep that behaviour).

## 2. New "Prices" section (all three home pages)

Place it **directly after** the "Two sides, one app" section (`aria-labelledby="who-title"` / `kenelle-otsikko`) and **before** the "Who's behind it" section.

Structure:

```html
<section id="pricing" class="block pricing" aria-labelledby="pricing-title">
  <p class="kicker">…</p>
  <h2 class="section-title" id="pricing-title">…</h2>
  <p class="section-intro">…</p>
  <div class="plans">
    <article class="plan"> … For you … </article>
    <article class="plan"> … Free view … </article>
    <article class="plan plan-family"> … Hoidio Family … </article>
  </div>
  <p class="plan-note">…</p>
</section>
```

- Finnish page: `id="hinnat"`, `aria-labelledby="hinnat-otsikko"`, heading `id="hinnat-otsikko"`.
- Each card: a small label (`<p class="plan-for">`), the plan name as `<h3>`, the price (`<p class="plan-price">`), then a `<ul>` of 3–4 points using the same inline-SVG check icon style as the `.panel li` items.
- The Hoidio Family card is visually highlighted (for example a `--accent` border and a "14 days free" badge in `--amber`) and is the last card. On wide screens: three cards side by side. Under ~760 px: stacked, Hoidio Family last.
- The "Not included" line in the free-view card must be written as text, not only shown with an icon.
- No buy or download button: the apps aren't in the stores yet. The plan is bought in the app.

### English (`index.html`)

- kicker: `Prices`
- h2: `Free for you. Peace of mind for your family.`
- intro: `The person taking the medicines never pays. Caregivers can follow one person for free, or choose Hoidio Family for alerts and summaries.`

Card 1
- plan-for: `For the person taking the medicines`
- h3: `Hoidio`
- price: `Free, always`
- points:
  - `All your medicines, doses and reminders`
  - `Refills, doctor visits, side effects and measurements`
  - `Emergency information, even offline`
  - `Invite caregivers and choose what they see`

Card 2
- plan-for: `For a caregiver`
- h3: `Free view`
- price: `Free`
- points:
  - `Follow one person`
  - `See their medicine schedule and the doses they have taken`
  - `Not included: alerts and summaries`

Card 3
- badge: `14 days free`
- plan-for: `For caregivers`
- h3: `Hoidio Family`
- price: `€4.99 a month` and on the next line, smaller: `or €49.99 a year`
- points:
  - `Get an alert if a reminder isn't confirmed or the daily check-in isn't answered`
  - `Daily, weekly or monthly summaries`
  - `Follow up to two people, with up to three caregivers on one plan`
  - `Their full health record when they allow it: visits, side effects and measurements`

plan-note (small print under the cards):
`Prices include VAT. Hoidio Family is bought in the app through the App Store or Google Play. One caregiver pays, and the others on the same plan don't need their own. It renews automatically until you cancel it in your Apple or Google account settings, at least 24 hours before the period ends. See the <a href="/terms.html">terms of use</a>.`

### Finnish (`fi/index.html`)

- kicker: `Hinnat`
- h2: `Sinulle maksuton. Läheisillesi mielenrauhaa.`
- intro: `Lääkkeitä käyttävä ei maksa koskaan. Omaishoitaja voi seurata yhtä ihmistä maksutta, tai valita Hoidio Familyn, johon kuuluvat ilmoitukset ja yhteenvedot.`

Kortti 1
- plan-for: `Lääkkeitä käyttävälle`
- h3: `Hoidio`
- price: `Aina maksuton`
- points:
  - `Kaikki lääkkeesi, annoksesi ja muistutuksesi`
  - `Reseptien uusinnat, lääkärikäynnit, haittavaikutukset ja mittaukset`
  - `Hätätiedot, myös ilman verkkoa`
  - `Kutsu omaishoitajia ja päätä, mitä he näkevät`

Kortti 2
- plan-for: `Omaishoitajalle`
- h3: `Maksuton näkymä`
- price: `Maksuton`
- points:
  - `Seuraa yhtä ihmistä`
  - `Näe hänen lääkeaikataulunsa ja otetut annokset`
  - `Ei sisällä: ilmoituksia ja yhteenvetoja`

Kortti 3
- badge: `14 päivää maksutta`
- plan-for: `Omaishoitajille`
- h3: `Hoidio Family`
- price: `4,99 € kuukaudessa` and smaller: `tai 49,99 € vuodessa`
- points:
  - `Saat ilmoituksen, jos muistutusta ei vahvisteta tai päivän kuittaukseen ei vastata`
  - `Päivä-, viikko- tai kuukausiyhteenvedot`
  - `Seuraa enintään kahta ihmistä, ja samassa tilauksessa voi olla enintään kolme omaishoitajaa`
  - `Koko terveystiedot, kun hoidettava sallii: käynnit, haittavaikutukset ja mittaukset`

plan-note:
`Hinnat sisältävät arvonlisäveron. Hoidio Family ostetaan sovelluksessa App Storen tai Google Playn kautta. Yksi omaishoitaja maksaa, eikä muiden samassa tilauksessa olevien tarvitse ostaa omaa. Tilaus uusiutuu automaattisesti, kunnes perut sen Apple- tai Google-tilisi asetuksista vähintään 24 tuntia ennen jakson päättymistä. Katso <a href="/fi/kayttoehdot.html">käyttöehdot</a>.`

### Arabic (`ar/index.html`)

- kicker: `الأسعار`
- h2: `مجاني لك. راحة بال لعائلتك.`
- intro: `من يتناول الأدوية لا يدفع أبدًا. يمكن لمقدّم الرعاية متابعة شخص واحد مجانًا، أو اختيار Hoidio Family للحصول على التنبيهات والملخصات.`

البطاقة 1
- plan-for: `لمن يتناول الأدوية`
- h3: `هويديو`
- price: `مجاني دائمًا`
- points:
  - `كل أدويتك وجرعاتك وتذكيراتك`
  - `تجديد الوصفات وزيارات الطبيب والآثار الجانبية والقياسات`
  - `معلومات الطوارئ، حتى دون إنترنت`
  - `ادعُ مقدّمي الرعاية واختر ما يرونه`

البطاقة 2
- plan-for: `لمقدّم الرعاية`
- h3: `عرض مجاني`
- price: `مجاني`
- points:
  - `تابع شخصًا واحدًا`
  - `شاهد جدول أدويته والجرعات التي تناولها`
  - `غير مشمول: التنبيهات والملخصات`

البطاقة 3
- badge: `14 يومًا مجانًا`
- plan-for: `لمقدّمي الرعاية`
- h3: `Hoidio Family`
- price: `4.99 € شهريًا` and smaller: `أو 49.99 € سنويًا`
- points:
  - `احصل على تنبيه إذا لم يُؤكَّد تذكير أو لم يُجَب على التأكيد اليومي`
  - `ملخصات يومية أو أسبوعية أو شهرية`
  - `تابع حتى شخصين، مع ما يصل إلى ثلاثة مقدّمي رعاية في الاشتراك نفسه`
  - `السجل الصحي الكامل عندما يسمحون بذلك: الزيارات والآثار الجانبية والقياسات`

plan-note:
`الأسعار تشمل ضريبة القيمة المضافة. يُشترى Hoidio Family داخل التطبيق عبر App Store أو Google Play. يدفع مقدّم رعاية واحد، ولا يحتاج الآخرون في الاشتراك نفسه إلى شراء اشتراك خاص بهم. يتجدد الاشتراك تلقائيًا حتى تلغيه من إعدادات حسابك في Apple أو Google قبل 24 ساعة على الأقل من نهاية الفترة.`

(No terms link on the Arabic page: there is no Arabic terms page.)

Put the prices inside `<bdi>` or `dir="ltr"` spans on the Arabic page so "4.99 €" doesn't get reordered.

## 3. "For your family" tab (all three home pages)

In the family panel (`#panel-family`), mark the two paid items with a small inline tag after the text: `<span class="tag-family">Hoidio Family</span>` (same text in all languages). The items are:

- EN: `An alert if a reminder isn't confirmed` and `A daily, weekly or monthly summary`
- FI: `Ilmoitus, jos muistutusta ei vahvisteta` and `Päivä-, viikko- tai kuukausiyhteenveto`
- AR: `تنبيه إذا لم يتم تأكيد التذكير` and `ملخص يومي أو أسبوعي أو شهري`

Under the list, add one line with a link to the new section:

- EN: `<p class="panel-note">Seeing their schedule is free. Alerts and summaries are part of Hoidio Family. <a href="#pricing">See prices</a></p>`
- FI: `<p class="panel-note">Aikataulun näkeminen on maksutonta. Ilmoitukset ja yhteenvedot kuuluvat Hoidio Familyyn. <a href="#hinnat">Katso hinnat</a></p>`
- AR: `<p class="panel-note">رؤية الجدول مجانية. التنبيهات والملخصات جزء من Hoidio Family. <a href="#pricing">اطّلع على الأسعار</a></p>`

## 4. FAQ (all three home pages)

### Change one existing answer

- EN, "What if I forget to take a dose?" → `The reminder can repeat until you mark the dose taken. If you've invited family and they have Hoidio Family, they can get an alert when a reminder isn't confirmed.`
- AR, "ماذا لو نسيت تناول جرعة؟" → `يمكن أن يتكرر التذكير حتى تؤكد أنك تناولت الجرعة. وإذا دعوت عائلتك وكان لديهم Hoidio Family، يمكن أن يصلهم تنبيه عند عدم تأكيد التذكير.`
- FI has no such question; nothing to change.

### Add two questions

EN, after "Can my family see everything?":
- `Is Hoidio free?` → `Yes, for the person taking the medicines, always, with as many medicines as you need. Inviting caregivers is free too. A caregiver can follow one person for free and see their medicine schedule; alerts, summaries and following more people are part of Hoidio Family.`
- `What does Hoidio Family cost, and how do I cancel?` → `€4.99 a month or €49.99 a year, VAT included, and the first 14 days are free. One plan covers up to two people and three caregivers. You buy it in the app, and cancel it in your Apple or Google account settings at least 24 hours before the period ends.`

FI, after "Miten poistan omaishoitajan?":
- `Onko Hoidio maksuton?` → `On, lääkkeitä käyttävälle aina, ja voit lisätä niin monta lääkettä kuin tarvitset. Myös omaishoitajien kutsuminen on maksutonta. Omaishoitaja voi seurata yhtä ihmistä maksutta ja nähdä hänen lääkeaikataulunsa. Ilmoitukset, yhteenvedot ja useamman ihmisen seuraaminen kuuluvat Hoidio Familyyn.`
- `Mitä Hoidio Family maksaa ja miten sen voi perua?` → `4,99 € kuukaudessa tai 49,99 € vuodessa arvonlisäveroineen, ja ensimmäiset 14 päivää ovat maksuttomia. Yksi tilaus kattaa enintään kaksi ihmistä ja kolme omaishoitajaa. Tilaus ostetaan sovelluksessa, ja sen voi perua Apple- tai Google-tilin asetuksista vähintään 24 tuntia ennen jakson päättymistä.`

AR, after "هل يمكن لعائلتي رؤية كل شيء؟":
- `هل هويديو مجاني؟` → `نعم، لمن يتناول الأدوية دائمًا، مع أي عدد تحتاجه من الأدوية. ودعوة مقدّمي الرعاية مجانية أيضًا. يمكن لمقدّم الرعاية متابعة شخص واحد مجانًا ورؤية جدول أدويته، أما التنبيهات والملخصات ومتابعة أشخاص آخرين فهي جزء من Hoidio Family.`
- `كم يكلّف Hoidio Family وكيف ألغيه؟` → `4.99 € شهريًا أو 49.99 € سنويًا شاملة ضريبة القيمة المضافة، وأول 14 يومًا مجانية. يغطي الاشتراك الواحد حتى شخصين وثلاثة مقدّمي رعاية. تشتريه داخل التطبيق، وتلغيه من إعدادات حسابك في Apple أو Google قبل 24 ساعة على الأقل من نهاية الفترة.`

## 5. Terms of use (`terms.html` and `fi/kayttoehdot.html`)

Only these three passages change. **Heba must approve these legal changes in the pull request review**, so list them separately in the PR description.

### Section 2, last sentence
- EN: replace `Following someone else as a caregiver needs a Hoidio Family subscription (section 6).` with `As a caregiver you can follow one person for free and see their medicine schedule and the doses they have taken. Alerts, summaries and following more people need a Hoidio Family subscription (section 6).`
- FI: replace `Toisen ihmisen seuraaminen omaishoitajana vaatii Hoidio Family -tilauksen (kohta 6).` with `Omaishoitajana voit seurata yhtä ihmistä maksutta ja nähdä hänen lääkeaikataulunsa ja otetut annokset. Ilmoitukset, yhteenvedot ja useamman ihmisen seuraaminen vaativat Hoidio Family -tilauksen (kohta 6).`

### Section 6, first paragraph
- EN: replace the paragraph starting `To follow a person in Hoidio` with `Hoidio Family is the subscription for caregivers. It adds alerts when a reminder isn't confirmed or the daily “I'm OK” check-in isn't answered, daily, weekly or monthly summaries, the person's full health record when they allow it, and following more than one person. Without it, a caregiver can follow one person for free and see their medicine schedule and the doses they have taken. The person who invites the caregiver never pays.`
- FI: replace the paragraph starting `Omaishoitajan on oltava mukana` with `Hoidio Family on omaishoitajien tilaus. Siihen kuuluvat ilmoitukset, jos muistutusta ei vahvisteta tai päivän ”Olen kunnossa” -kuittaukseen ei vastata, päivä-, viikko- tai kuukausiyhteenvedot, hoidettavan koko terveystiedot hänen salliessaan sekä useamman kuin yhden ihmisen seuraaminen. Ilman tilausta omaishoitaja voi seurata yhtä ihmistä maksutta ja nähdä hänen lääkeaikataulunsa ja otetut annokset. Omaishoitajan kutsuva henkilö ei maksa koskaan.`

### Section 6, bullet about the subscription ending
- EN: replace the bullet starting `When a subscription ends, every caregiver it covers loses access` with `When a subscription ends, alerts and summaries stop for every caregiver it covers. Each caregiver can keep following one person for free (schedule and doses taken); other links are paused. We tell the caregivers and the person being followed in the app, but nobody is alerted after that. A paused link is kept for up to 12 months so that following can restart easily, then removed.`
- FI: replace the bullet starting `Kun tilaus päättyy, kaikki sen kattamat omaishoitajat` with `Kun tilaus päättyy, ilmoitukset ja yhteenvedot loppuvat kaikilta sen kattamilta omaishoitajilta. Jokainen omaishoitaja voi edelleen seurata yhtä ihmistä maksutta (aikataulu ja otetut annokset); muut yhteydet keskeytetään. Kerromme tästä sovelluksessa omaishoitajille ja seurattavalle ihmiselle, mutta sen jälkeen kukaan ei saa ilmoituksia. Keskeytetty yhteys säilytetään enintään 12 kuukautta, jotta seuraaminen voidaan aloittaa helposti uudelleen, ja poistetaan sen jälkeen.`

Also add one bullet to section 6, right after the 14-day trial bullet:
- EN: `The price is €4.99 a month or €49.99 a year, including VAT, unless a different price is shown in the store before you buy.`
- FI: `Hinta on 4,99 € kuukaudessa tai 49,99 € vuodessa arvonlisäveroineen, ellei kaupassa näytetä ennen ostoa toista hintaa.`

Don't change the "Last updated" date unless the page has one; if it has, set it to the day of the change.

## 6. Privacy policy (`privacy.html` and `fi/tietosuoja.html`)

Replace the retention bullet about a subscription ending (Heba approves this one too):

- EN: replace the bullet starting `After a caregiver subscription ends:` with `After a caregiver subscription ends: the caregiver no longer gets alerts or summaries about you. If you are the one person they follow for free, they can still see your medicine schedule and the doses you have taken, as you agreed when you invited them; other links are paused. We keep a paused link for up to 12 months so that following can restart easily, then remove it. Your own information stays in your account as described above. You can remove a caregiver at any time.`
- FI: replace the bullet starting `Kun omaishoitajan tilaus on päättynyt:` with `Kun omaishoitajan tilaus on päättynyt: omaishoitaja ei enää saa sinua koskevia ilmoituksia eikä yhteenvetoja. Jos olet se yksi ihminen, jota hän seuraa maksutta, hän näkee edelleen lääkeaikataulusi ja ottamasi annokset, kuten hyväksyit hänet kutsuessasi; muut yhteydet keskeytetään. Säilytämme keskeytetyn yhteyden enintään 12 kuukautta, jotta seuraaminen voidaan aloittaa helposti uudelleen, ja poistamme sen sen jälkeen. Omat tietosi säilyvät tililläsi edellä kerrotulla tavalla. Voit poistaa omaishoitajan milloin tahansa.`

## 7. Small extras

- Meta description of each home page: add the free message at the end.
  - EN: `… designed by a pharmacist in Finland. Free for patients.`
  - FI and AR: add the same idea in the page's language, in the same short style as the existing description.
- Keep "Coming soon for iPhone and Android" everywhere. Don't add store links.

## Don't

- Don't touch `CNAME`, `.nojekyll`, `media/`, `logo.svg`, the footer company line, the video section, or `support.html`.
- Don't add JavaScript for the pricing section; it is static.
- Don't add new fonts, images, libraries or external requests.

## Done when

- [ ] All checks in `AGENTS.md` pass (no missing links; the three home pages have the same sections in the same order).
- [ ] `/`, `/fi/` and `/ar/` look right at 375 px and 1280 px, in light and dark mode, and the Arabic page is right-to-left with prices not reordered.
- [ ] The new nav link scrolls to the Prices section on each page.
- [ ] Every number on the site matches: €4.99 / €49.99, 14 days, 2 people, 3 caregivers.
- [ ] The PR description lists (a) the website changes and (b) the terms and privacy changes separately, with the before and after text, for Heba to approve.
- [ ] This brief (`docs/codex/hoidio-family.md`) is deleted in the last commit of the PR, so it isn't published on hoidio.com.
