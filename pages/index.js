import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an software developer and software architect based in Kazakhstan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alimkhan Nurekenov
          </Heading>
          <p>Digital Craftsman ( software architect / Developer / Product Manager )</p>
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
              src="/images/takuya.jpg"
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
          Work
        </Heading>
        <Paragraph>
          Alimkhan is a freelance and a full-stack developer based in Astana, i have big experience in development different types of applications and 
          web systems, it startups.{' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . brainstorming with TrustMe Team &quot;
          <NextLink href="https://www.youtube.com/watch?v=8k7iXPK0hg8" passHref>
            <Link target="_blank">Product Brain Storming</Link>
          </NextLink>
          &quot; successful startup case, mor 600.000$ investment.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Semey, Kazakhstan.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Begin work as Frontend Developer
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Junior Android Developer
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Flutter Developer
        </BioSection>
        <BioSection>
          <BioYear>2019-2021 Product Manager</BioYear>
          Trustme.kz
        </BioSection>
        <BioSection>
          <BioYear>from 2021 to 2023 work as Freelancer and IT enterpreneur</BioYear>
          Lead mobile Development teams
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://www.youtube.com/watch?v=M5olvwg_5VU" target="_blank">
          Playing Guitar and Piano,
          </Link>
          , Reading,{' '}
         
          ,  Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
           {/*
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
           
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
         */}
          <ListItem>
            <Link href="https://www.linkedin.com/in/alimhan-nurekenov-568a111ba/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
            @alimhan_nurekenov
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.instagram.com/alimhan_nurekenov/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @alimhannurekenov
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/watch?v=8k7iXPK0hg8e"
            title="Product Brainstorm"
            thumbnail={thumbYouTube}
          >
            This team make (&gt;600k$ investments)
          </GridItem>
          <GridItem
            href="https://mobilaser.kz/digital-bridge-2022-mezhdunarodnyj-it-poligon-dlya-kreativnoj-molodezhi-kazahstana/technologies/innovation/"
            title="Digital Bridge 2022"
            thumbnail={thumbInkdrop}
          >
            Publication with me
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
