import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="for kiraa" />
        <meta name="author" content="naget" />
        <meta name="author" content="bububbnya kiraa" />
        <link rel="apple-touch-icon" href="dino.png" />
        <link rel="shortcut icon" href="/dino.ico" type="image/x-icon" />
        <meta property="og:site_name" content="nagetspesial" />
        <meta name="og:title" content="nagetspesial" />
        <title>for kiraaa</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
