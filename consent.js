/* Hoidio website: Google Analytics only after the visitor says yes.
   Nothing is loaded and no cookie is set until "Accept" is pressed.
   The choice is kept in this browser's localStorage (not a cookie).
   The Hoidio app itself has no analytics; this is only for hoidio.com. */
(function () {
  var TAG = 'GTM-55JTD7NH';
  var KEY = 'hoidio-analytics';
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var text = {
    en: { msg: 'May we count visits to this website with Google Analytics? It uses cookies. The Hoidio app itself has no tracking.', yes: 'Accept', no: 'Decline', more: 'Privacy policy', href: '/privacy.html#website', settings: 'Cookie settings' },
    fi: { msg: 'Saammeko laskea tämän verkkosivun käyntejä Google Analyticsilla? Se käyttää evästeitä. Hoidio-sovelluksessa ei ole seurantaa.', yes: 'Hyväksy', no: 'Kieltäydy', more: 'Tietosuojaseloste', href: '/fi/tietosuoja.html#verkkosivu', settings: 'Evästeasetukset' },
    sv: { msg: 'Får vi räkna besök på den här webbplatsen med Google Analytics? Den använder kakor. Hoidio-appen har ingen spårning.', yes: 'Godkänn', no: 'Avböj', more: 'Integritetspolicy', href: '/privacy.html#website', settings: 'Cookie-inställningar' },
    ar: { msg: 'هل تسمح لنا بإحصاء زيارات هذا الموقع باستخدام Google Analytics؟ يستخدم ملفات تعريف الارتباط. تطبيق هويديو نفسه لا يتتبعك.', yes: 'موافق', no: 'رفض', more: 'سياسة الخصوصية', href: '/privacy.html#website', settings: 'إعدادات ملفات تعريف الارتباط' }
  }[lang] || null;
  if (!text) return;

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    if (window.__hoidioTag) return;
    window.__hoidioTag = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + TAG;
    document.head.appendChild(s);
  }

  function removeCookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (/^_ga/.test(name)) {
        ['', '; domain=.hoidio.com', '; domain=hoidio.com'].forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
  }

  var bar;
  function showBar() {
    if (bar) { bar.hidden = false; return; }
    bar = document.createElement('div');
    bar.className = 'consent';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', text.settings);
    var p = document.createElement('p');
    p.textContent = text.msg + ' ';
    var a = document.createElement('a');
    a.href = text.href;
    a.textContent = text.more;
    p.appendChild(a);
    var actions = document.createElement('div');
    actions.className = 'consent-actions';
    [['no', text.no], ['yes', text.yes]].forEach(function (b) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'consent-btn' + (b[0] === 'yes' ? ' consent-yes' : '');
      btn.textContent = b[1];
      btn.addEventListener('click', function () {
        save(b[0]);
        bar.hidden = true;
        if (b[0] === 'yes') { loadAnalytics(); } else { removeCookies(); }
      });
      actions.appendChild(btn);
    });
    bar.appendChild(p);
    bar.appendChild(actions);
    document.body.appendChild(bar);
  }

  // "Cookie settings" link in the footer, to change the choice later
  var footer = document.querySelector('.site-footer .wrap');
  if (footer) {
    var line = document.createElement('p');
    var link = document.createElement('button');
    link.type = 'button';
    link.className = 'consent-link';
    link.textContent = text.settings;
    link.addEventListener('click', showBar);
    line.appendChild(link);
    footer.appendChild(line);
  }

  var choice = read();
  if (choice === 'yes') loadAnalytics();
  else if (choice !== 'no') showBar();
})();
