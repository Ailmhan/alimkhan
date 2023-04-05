import {
  Container,
  Badge,

  List,
  ListItem,
 // SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="intelogis">
    <Container>
      <Title>
        Intelogis <Badge>2020</Badge>
      </Title>
      <P>
The logistic system for Whole Russia is a comprehensive information system designed to assist users in the transportation of goods and products from one place to another. The system consists of both a web application and a mobile app that are designed to provide users with a seamless experience..</P>
      <P>
        It is one of the projects launched at{' '}
        
        , aiming to visualize the impact of media contents on the visit of
        foreign high-intellect class to Japan, who are highly interested in
        Japanese culture. I joined the project to build its mobile app for iOS
        where you can read free articles of the magazine.
      </P>
      <P>
      The website and mobile app are designed to handle digital documentation, which eliminates the need for paperwork and other physical documents. This feature enables users to manage their shipments more efficiently and quickly, while minimizing errors and reducing costs.

Real-time geo position tracking is also incorporated into the system, which is achieved through node-js technology and leaflet maps. This feature allows users to track the location of their shipments in real-time, providing them with up-to-date information on their delivery status.
The monitoring system is another essential component of the logistic system, which provides users with real-time updates on their shipments progress. It also helps to identify potential delays or issues that may arise during the shipping process, enabling users to take appropriate action to avoid delays or losses.

Finally, the CRM feature of the system helps users to manage their customer relationships effectively. It allows users to maintain a database of their customers and track their purchases, ensuring that they can provide personalized services to them. In summary, the logistic system for Whole Russia is a comprehensive and innovative solution that simplifies the transportation process while increasing efficiency and reducing costs.

      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Web, IOS, Android</Meta>
          <span>React, React-Native , Node-JS</span>
        </ListItem>
        </List>
        {/*
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf">
            ISID Starts a Research Project to Visualize Impact of Media Contents
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          <Link href="https://innolab.jp/news/achievement/335">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/modetokyo_eyecatch.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/modetokyo_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/modetokyo_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/modetokyo_03.jpg" alt="mode.tokyo" />
*/}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
