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
          <Heading as="h2" variant="page-title" > 
            Wake up Neo
          </Heading>
          <p>Artificial Intelegence development company</p>
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
          Welcome to our Artificial Intelligence development company, where we specialize in creating innovative and cutting-edge products using GPT (Generative Pre-trained Transformer) technology. Our team of experts has a deep understanding of the latest advancements in AI, which allows us to deliver tailor-made solutions to meet your business needs.{' '}
      
          &quot; This is time of inventors.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Our portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Services
        </Heading>
        <BioSection>
          <BioYear>Cross-Platform Develpoment</BioYear>
          Flutter, Bloc, Clean-Architecture
        </BioSection>
        <BioSection>
          <BioYear>Machine Learning</BioYear>
          Tansor Flow , Open CV 
        </BioSection>
        <BioSection>
          <BioYear>Open AI</BioYear>
          ChatGPT API , Open AI Api
        </BioSection>
        <BioSection>
          <BioYear>Backend Development</BioYear>
           Go, Python, Node-JS
        </BioSection>
        <BioSection>
          <BioYear>Frontend Develpment</BioYear>
          Nuxt, React, Vue 
        </BioSection>
        <BioSection>
          <BioYear>Product managment</BioYear>
          High level product management
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          partnership
        </Heading>
        <Paragraph>
        We are looking for start-ups that are implementing artificial intelligence or already large companies that are already working with it for partnership and cooperation
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
{/*
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
        */}
       
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
