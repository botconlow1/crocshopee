import { getCssText } from '@/styles/stitches.config'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <script>
          window.pixelId = "66551074268e41363b1b0e23"; var a =
          document.createElement("script"); a.setAttribute("async", "");
          a.setAttribute("defer", ""); a.setAttribute("src",
          "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
          document.head.appendChild(a);
        </script>
      </Head>
      <body>
        <noscript>
          <img
            alt="oi"
            height="1"
            width="1"
            style={{
              display: 'none',
            }}
            src="https://www.facebook.com/tr?id=1875054716242626&ev=PageView&noscript=1"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}