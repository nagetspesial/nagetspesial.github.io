import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">bip bip</Heading>
      <Text>masi dalam proses perbaikan mohon tunggu ya sayaaang :3</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">kembali ke homepapge :D</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
