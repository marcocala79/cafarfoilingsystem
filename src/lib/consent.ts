/**
 * GDPR consent handling for Google Analytics 4 (Google Consent Mode v2).
 *
 * Every consent type defaults to "denied" in index.html, before gtag.js loads,
 * so nothing is written to storage until the visitor opts in. Accepting only
 * ever grants `analytics_storage`: the site runs no advertising tags, so the
 * ad_* types stay denied in every state.
 */

export const CONSENT_STORAGE_KEY = "cafar-cookie-consent";
/** Fired after a choice is stored, so any listener can react to it. */
export const CONSENT_CHANGE_EVENT = "cafar:cookie-consent-change";
/** Fired by the footer link to bring the banner back up. */
export const OPEN_PREFERENCES_EVENT = "cafar:cookie-preferences-open";

export type ConsentChoice = "accepted" | "declined";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** The visitor's stored choice, or null if they haven't made one yet. */
export function getStoredConsent(): ConsentChoice | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  } catch {
    // Storage blocked (private mode, cookies disabled) — treat as undecided.
    return null;
  }
}

/** Store the choice and push the matching Consent Mode update to gtag. */
export function setConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Nothing to persist — the update below still applies to this page view.
  }

  window.gtag?.("consent", "update", {
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice }));
}

/** Reopen the banner so the visitor can change their mind. */
export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
