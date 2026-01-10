import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SMART INNOVATION SYSTEMS" />
        <meta name="facebook-domain-verification" content="tw4bi6kqwovyrllg3vtqzhe8qs52ai" />
        <meta property="og:title" content="SMART INNOVATION SYSTEMS | Software Empresarial" />
        <meta
          property="og:description"
          content="Software empresarial para PYMEs: CRM, inventario, finanzas y WhatsApp centralizado."
        />
        <meta property="og:image" content="https://www.smartinnovationsystems.com/logo-fav.png" />
        <meta property="og:url" content="https://www.smartinnovationsystems.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SMART INNOVATION SYSTEMS",
              "url": "https://www.smartinnovationsystems.com",
              "logo": "https://www.smartinnovationsystems.com/logo-fav.png",
              "description":
                "Empresa de software especializada en CRM, automatización, inventario, finanzas y WhatsApp empresarial para PYMEs"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
