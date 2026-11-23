/*
 * Website statistics (Google Analytics 4), set up without cookies.
 * - No cookies or other browser storage: client_storage "none", and ad storage denied.
 * - No Google signals, no ad personalisation, no user IDs, no advertising features.
 * - Counts visits, pages viewed, where visitors came from (e.g. Google, LinkedIn) and country/device.
 * The app itself sends nothing to Google Analytics. See the privacy policy, "Website statistics".
 */
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'denied'
});
gtag('js', new Date());
gtag('config', 'G-91C7M618EW', {
  client_storage: 'none',
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});
