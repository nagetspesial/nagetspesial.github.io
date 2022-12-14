import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        masi dalam proses pembangunan, ini free pass biar bububb nda malas lagi
        :p
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            kiraa
          </Heading>
          <p>bontot punyaa</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/kiraa.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          tentang
        </Heading>
        <Paragraph>blablalbalbalbalblablablalbalbalblabl</Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              :3
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          sejarah
        </Heading>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          pacalan :3
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          we ♥
        </Heading>
        <Paragraph>-koll</Paragraph>
        <Paragraph>-bubuubbb</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          sosmed !
        </Heading>
        <List>
          <ListItem>
            <Link href="https://instagram.com/nagetspesial" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
               
              >
                @nagetspesial
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/jenogurlfie" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
               
              >
                @jenogurlfie
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/kiradanbontot" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
               
              >
                @kiradanbontot
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
