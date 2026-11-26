/*
 * 1) "Tell me when it's on iPhone" sign-up on the home pages.
 *    Sends the email address, page language, the consent text the visitor ticked,
 *    and the campaign tags of the link that brought them here (utm_source etc.),
 *    to Hoidio's own database (Supabase, EU – Frankfurt). Nothing is sent until the
 *    visitor submits the form. The public key below can only ADD a sign-up; it
 *    cannot read the list.
 * 2) Google Play links carry the same campaign tags to Google Play, so Play Console
 *    can show which channel an install came from.
 * No cookies or other browser storage are used. See the privacy policy, "iPhone launch list".
 */
(function () {
  var SUPABASE_URL = 'https://lhoctjcqinmymlzoqpcj.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_jzKCnvKs-plhv2LXnBdZPQ_aIVwvoYs';
  var PLAY = 'https://play.google.com/store/apps/details?id=com.hoidio.app';

  function clean(v) {
    v = (v || '').trim().toLowerCase().replace(/[^a-z0-9._\-]/g, '').slice(0, 100);
    return v || null;
  }

  var params = new URLSearchParams(window.location.search);
  var utm = {
    source: clean(params.get('utm_source')),
    medium: clean(params.get('utm_medium')),
    campaign: clean(params.get('utm_campaign'))
  };
  var refHost = null;
  try {
    var h = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : '';
    if (h && h !== 'hoidio.com' && h !== 'hoidio.fi') refHost = clean(h);
  } catch (e) { /* ignore */ }

  // Google Play links: pass the visit's campaign tags on to Play (install referrer).
  var playRef = 'utm_source=' + encodeURIComponent(utm.source || refHost || 'hoidio.com') +
    '&utm_medium=' + encodeURIComponent(utm.medium || (utm.source || refHost ? 'referral' : 'website')) +
    '&utm_campaign=' + encodeURIComponent(utm.campaign || 'website');
  Array.prototype.forEach.call(document.querySelectorAll('a[href^="' + PLAY + '"]'), function (a) {
    a.href = PLAY + '&referrer=' + encodeURIComponent(playRef);
  });

  // Sign-up form
  var form = document.querySelector('form.notify');
  if (!form || !window.fetch) return;
  var email = form.querySelector('input[type="email"]');
  var consent = form.querySelector('input[type="checkbox"]');
  var consentLabel = form.querySelector('label[for="' + consent.id + '"]');
  var status = form.querySelector('.notify-status');
  var button = form.querySelector('button[type="submit"]');
  var busy = false;

  function say(text, isError) {
    status.textContent = text;
    status.classList.toggle('is-error', !!isError);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (busy) return;
    if (!email.checkValidity() || !email.value.trim()) { email.focus(); email.reportValidity(); return; }
    if (!consent.checked) { consent.focus(); consent.reportValidity(); return; }
    busy = true; button.disabled = true; say('');

    fetch(SUPABASE_URL + '/rest/v1/launch_signups', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        email: email.value.trim(),
        lang: form.getAttribute('data-lang'),
        platform: 'iphone',
        consent: true,
        consent_text: consentLabel.textContent.trim().slice(0, 500),
        utm_source: utm.source,
        utm_medium: utm.medium,
        utm_campaign: utm.campaign,
        referrer_host: refHost
      })
    }).then(function (res) {
      if (res.status === 201) {
        say(form.getAttribute('data-ok'));
        form.reset();
      } else if (res.status === 409) {
        say(form.getAttribute('data-dup'));
        form.reset();
      } else {
        throw new Error('HTTP ' + res.status);
      }
    }).catch(function () {
      say(form.getAttribute('data-err'), true);
    }).then(function () {
      busy = false; button.disabled = false;
    });
  });
})();
