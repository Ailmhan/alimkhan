import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mindfull">
    <Container>
      <Title>
        Mindfull Kids <Badge>2022</Badge>
      </Title>
      <P>
      At Mindful Kids, we aim to provide practical tools to help kids identify emotions and process them rather than defaulting to a reactive state. Think of as the voice to the cool aunt, who has been around, knows what’s up, and speaks from a place of experience. who spread kindness and compassion in all of their relationships.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iPhone Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter/Firebase</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>
      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://mindfulkids.me/l">
            <Badge mr={2}>Web-site of mobile app</Badge>
            Here it is all information and links {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>


        <ListItem>
          <Link href="https://play.google.com/store/apps/details?id=com.wlff.mindfulkids">
            <Badge mr={2}>Google Play</Badge>
            Download for Android{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="      https://apps.apple.com/us/app/mindful-kids/id6444201387">
            <Badge mr={2}>App-Store</Badge>
            Download for IOS{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
    
      </UnorderedList>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/Px6mXseFqJw"
          title="Mindfull Kids"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
