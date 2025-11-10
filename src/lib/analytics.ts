// Google Analytics 4 helper functions
// These functions safely interact with gtag when available

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

/**
 * Track contact form submission
 */
export const trackContactFormSubmission = () => {
  trackEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "Contact Form",
  });
};

/**
 * Track CTA button clicks
 */
export const trackCTAClick = (location: string) => {
  trackEvent("cta_click", {
    event_category: "engagement",
    event_label: location,
  });
};

/**
 * Track page views (for SPA navigation)
 */
export const trackPageView = (path: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "page_view", {
      page_path: path,
      page_title: title,
    });
  }
};
