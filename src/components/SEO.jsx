import { Helmet } from "react-helmet-async";

const SITE_NAME = "The Finance Wizard Group";
const SITE_URL = "https://thefinancewizardgroup.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;
const TWITTER_HANDLE = "@FinanceWizardGrp";

/**
 * SEO component — drop into any page to set title, meta, OG, Twitter
 * and optional JSON-LD structured data.
 *
 * Props:
 *   title        — page title (appended with " | The Finance Wizard Group")
 *   description  — meta description (150-160 chars ideal)
 *   canonical    — canonical URL (defaults to SITE_URL)
 *   ogImage      — absolute URL to OG image (1200×630 ideal)
 *   noindex      — set true to block indexing (e.g. thank-you pages)
 *   jsonLd       — array of JSON-LD objects to inject as <script> tags
 */
export default function SEO({
  title,
  description,
  canonical = SITE_URL,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd = [],
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      {/* ── Core ─────────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* ── Open Graph ───────────────────────────────────────── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${title ?? "Partner With Top Insurance Agency"}`} />
      <meta property="og:locale" content="en_US" />

      {/* ── Twitter Card ─────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* ── JSON-LD ──────────────────────────────────────────── */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
