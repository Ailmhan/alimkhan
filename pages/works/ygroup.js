import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ygroup">
    <Container>
      <Title>
         Ygroup <Badge>2022-2023</Badge>
      </Title>
      <P>
        Real-estate mobile app for agency and real-estate developers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ygroup.ru/">
          https://www.ygroup.ru <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android/Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter,Bloc,Clean Architecture, FLutter Web, Fire-base</span>
        </ListItem>
       
      </List>
{/*
      <WorkImage src="/images/works/ygroup.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ygroup3.png" alt="Inkdrop" />
*/}
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/LJ3wLcQFv3k"
          title="YouTube video player"
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
