import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='shorts icon' href='tt.png' type='image/jpg'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <div id='modal'></div>
        <NextScript />
      </body>
    </Html>
  )
}