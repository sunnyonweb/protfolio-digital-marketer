export interface Language {
  name: string;
  
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
   semrush: { name: "SEMrush", iconName: "SEMrush" },
  "facebook-ads": { name: "Facebook Ads", iconName: "facebook-ads" },
  "google-ads": { name: "Google Ads", iconName: "google-ads" },
  "google-analytics": { name: "Google Analytics", iconName: "google-analytics" },
  "google-data-studio": { name: "Google Data Studio", iconName: "google-data-studio" },
  "google-search-console": { name: "Google Search Console", iconName: "google-search-console" },
  "google-tag-manager": { name: "Google Tag Manager", iconName: "google-tag-manager" },
  googleadsense: { name: "Google AdSense", iconName: "googleadsense" },
  "idea-svgrepo-com": { name: "Idea", iconName: "idea-svgrepo-com" },
  "line-graph-graph": { name: "Line Graph", iconName: "line-graph-graph" },
  "marketing-strategy": { name: "Marketing Strategy", iconName: "marketing-strategy" },
  ahrefs: { name: "Ahrefs", iconName: "Ahrefs" },
  "email-marketing": { name: "Email Marketing", iconName: "email-marketing" },
  "seo-youtube": { name: "YouTube SEO", iconName: "seo-youtube" },



  github: { name: "GitHub", iconName: "github" },
  linkedin: { name: "LinkedIn", iconName: "linkedin" },
  whatsapp: { name: "WhatsApp", iconName: "whatsapp" },
  twitter: { name: "Twitter", iconName: "twitter" },
  facebook: { name: "Facebook", iconName: "facebook" },
  info: { name: "Info", iconName: "info" },
  logo: { name: "Logo", iconName: "logo" },
  moon: { name: "Moon", iconName: "moon" },
  person: { name: "Person", iconName: "person" },
  sun: { name: "Sun", iconName: "sun" },
  "arrow-left": { name: "Arrow Left", iconName: "arrow-left" },
  bars: { name: "Bars", iconName: "bars" },
  xmark: { name: "X Mark", iconName: "xmark" },
  code: { name: "Code", iconName: "code" },
  envelope: { name: "Envelope", iconName: "envelope" },
  briefcase: { name: "Briefcase", iconName: "briefcase" },       // ✅ Added
  instagram: { name: "Instagram", iconName: "instagram" },       // ✅ Added
  paperplane: { name: "Paper Plane", iconName: "paperplane" },   // ✅ Added
  rocket: { name: "Rocket", iconName: "rocket" },                // ✅ Added
  youtube: { name: "YouTube", iconName: "youtube" },             // ✅ Added
  bitwarden: { name: "Bitwarden", iconName: "bitwarden" },
  dashboard: { name: "Dashboard", iconName: "dashboard" },
"cursor-ia": { name: "Cursor IA", iconName: "cursor-ia" },     // ✅ Added
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.googleadsense;
};
