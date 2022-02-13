import Head from 'next/head'

export default function Metatags({
    title = 'NextJS and Firebase Social Media Project',
    description = 'A social media web app developed using Next.js and Firebase SDK',

}) {
return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@SikangSun" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
    </Head>
  );
}