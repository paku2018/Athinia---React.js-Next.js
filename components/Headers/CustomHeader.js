import Head from "next/head";

const CustomHeader = ({
  titleText = 'Athinia • Smart data collection & collaborative analytics',
  descriptionText = 'Building a data ecosystem to unlock a new paradigm for the quality of semiconductor materials. Athinia offers a unified approach to smart data collection and collaborative analytics.',
  url = 'https://athinia.com/'
}) => { 

  return (
    <Head>          
          <title>
            {titleText}
          </title>
          <meta
            name="description"
            content={descriptionText}
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={titleText} />
          <meta property="og:description" content={descriptionText} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content="Athinia" />
          <meta property="article:modified_time" content="2022-11-03T15:49:06+00:00" />
          <meta property="og:image" content="https://athinia.com/wp-content/uploads/2021/10/Athinia-social-thumb.jpg" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="533" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="6 minutes" />
          <link rel="icon" href="/cropped-Athinia-favicon-150x150.png" />
          <link rel="preload" as="image" href="/images/Athinia-background-pattern-06.png" />
        </Head>
  )
}

export default CustomHeader;