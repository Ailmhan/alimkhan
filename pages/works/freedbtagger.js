import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="freeDBTagger">
    <Container>
      <Title>
        Digital Bridge <Badge>2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="https://tengrinews.kz/userdata/news/2022/news_479000/thumb_m/photo_408207.jpeg" alt="icon" />
      </Center>
      <P>Built Around a Unique Vision</P>
      <P>Shaped by an early perspective around the importance of digital infrastructure to an emerging digital economy, DigitalBridge has developed a set of foundational capabilities over the past three decades.</P>
      <P>
      DigitalBridge is one of the world’s largest digital infrastructure firms investing across five key digital infrastructure verticals: data centers, macro cell towers, fiber networks, small cells, and edge infrastructure.
      </P>

      <List ml={4} my={4}>
     
        <ListItem>
          <Meta>Web-Site</Meta>
          <Link href="https://www.digitalbridge.com/#:~:text=DigitalBridge%20is%20one%20of%20the,small%20cells%2C%20and%20edge%20infrastructure.">
            Main information
          </Link>
        </ListItem>
      
      </List>

   
      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://apps.apple.com/in/app/digital-bridge-2022/id1643718438?platform=iphone">
            <Badge mr={2}>App-Store</Badge>
            Download application{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

 

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
