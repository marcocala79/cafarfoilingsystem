import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/LanguageProvider";
import {
  OPEN_PREFERENCES_EVENT,
  getStoredConsent,
  setConsent,
  type ConsentChoice,
} from "@/lib/consent";

export const CookieBanner = () => {
  const { lang } = useI18n();
  const privacyPath = lang === "it" ? "/it/privacy" : "/privacy";

  // Starts hidden: the stored choice only exists on the client, so deciding
  // during render would bake a banner into the prerendered HTML.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  const choose = (choice: ConsentChoice) => {
    setConsent(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    // Anchored to the dynamic viewport (100dvh), not the layout viewport, so the
    // card never ends up under the mobile browser's collapsing address bar.
    <div className="fixed inset-0 h-[100dvh] z-50 flex items-end justify-center sm:justify-end p-4 sm:p-6 pointer-events-none">
      <div
        role="region"
        aria-label="Cookie consent"
        className="pointer-events-auto w-full sm:max-w-sm rounded-lg border border-border bg-card/95 backdrop-blur-sm shadow-elegant p-4 animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          We use anonymous analytics cookies to see how this site is used. No
          advertising, no profiling.{" "}
          <Link
            to={privacyPath}
            className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex gap-2">
          <Button size="sm" className="flex-1 sm:flex-none" onClick={() => choose("accepted")}>
            Accept
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="flex-1 sm:flex-none text-muted-foreground"
            onClick={() => choose("declined")}
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};
