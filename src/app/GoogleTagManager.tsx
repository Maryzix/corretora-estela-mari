// app/components/GoogleTagManager.tsx
'use client'; // 👈 necessário para scripts que rodam no cliente

import Script from 'next/script';

export default function GoogleTagManager() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17041188774"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17041188774');
        `}
      </Script>
    </>
  );
}
