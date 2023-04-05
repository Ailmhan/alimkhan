import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        TrustMe(Top 4 Central Asia Information Technology Startups) <Badge>2018-2022</Badge>
      </Title>
      <Center my={6}>
        <Image src="http://blog.trustme.kz/wp-content/uploads/2022/05/9a2b1da8-a5b0-4838-8064-43c83572718e.png" alt="icon" />
      </Center>
     
      <P>
      TrustMe is a trust ecosystem , including 6 services for responsible companies and conscious people: Company - Information service about companies; People - platform for recomendations and achievements; Places - search and selection of places; Contract - online contracts via SMS; Business - business owners personal account; Coin- a bonus system for people and companies.
      </P>
      <P>
        Trust-Contracts based on Block-Chain
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>VUE/C#/Solana</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="https://apps.apple.com/in/app/trustme-%D1%8D%D0%BA%D0%BE%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%B4%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%8F/id1590987059">
           App-Store
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Top 4 best Central Asian Startups</Meta>
          <Link href="https://beststartup.asia/52-top-central-asia-information-technology-companies-and-startups/">
           Best Central Asian Startup
          </Link>
        </ListItem>
     
      
      </List>

     

    

    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
