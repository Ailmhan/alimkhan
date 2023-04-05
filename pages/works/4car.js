import {
  Container,
  Badge,

  List,
  ListItem,
 
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="4car">
    <Container>
      <Title>
        4Car <Badge>2022</Badge>
      </Title>
      <P>
      Our app is designed to make it easy and convenient for car owners to book a professional car wash service directly from their mobile device. With just a few taps, users can select the date and time that works best for them, choose from a variety of car wash packages, and even specify any additional services or special requests they may have.
      </P>
      <P>
      
      The app also provides users with detailed information about each car wash package, including whats included, pricing, and estimated completion time. Users can compare different options and select the one that suits their needs and budget.

Once a booking is confirmed, users receive real-time updates on the status of their request, including when the car wash team is on their way, when they arrive at the location, and when the job is complete. Users can also track the progress of their car wash in real-time through the app.

Additional features of the app include the ability to rate and provide feedback on the service provided, and the option to schedule recurring car washes if desired. Overall, our app aims to provide a seamless and hassle-free experience for busy car owners who want to keep their vehicles clean and well-maintained.
      </P>

      <List ml={4} my={4}>
     
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.js / Flutter / Go
          </span>
        </ListItem>
    
      </List>
{/*
      <WorkImage src="/images/works/margelo_eyecatch.png" alt="Website" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/margelo_01.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_02.png" alt="Margelo" />
      <WorkImage src="/images/works/margelo_03.png" alt="Margelo" />
*/}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
