import {
  Container,
  Badge,
  Link,
  List,
  ListItem,

} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="logizi">
    <Container>
      <Title>
        Logizi Moving <Badge>2011-2016</Badge>
      </Title>
      <P>
      The MVP (Minimum Viable Product) of a moving application designed for USA logistic companies would be a platform that offers two distinct interfaces for drivers and dispatchers. The apps primary objective is to streamline the coordination between drivers and dispatchers for optimized logistics operations.
      </P>
      <P>
      For Drivers:

The driver interface of the MVP moving application would include a user-friendly dashboard with features such as route optimization, GPS navigation, real-time route tracking, and automated load updates. It would also allow drivers to view their schedules, receive notifications about job assignments, and communicate with dispatchers through an in-app messaging system.

      </P>
      <p>
      For Dispatchers:

The dispatcher interface of the MVP moving application would include a centralized dashboard where dispatchers can manage multiple driver schedules and job assignments. This dashboard would offer features like job scheduling, load tracking, automatic notification 

      </p>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Web-Site</Meta>
          <Link href="https://logizi.kz/">
            Web-site of platform{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Go-lang</span>
        </ListItem>
      </List>
{/*
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="http://renewal49.hateblo.jp/entry/20120710/1341925681">
            <Badge mr={2}>リニューアル式</Badge>
            強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.appbank.net/2011/10/15/iphone-application/309349.php">
            <Badge mr={2}>appbank</Badge>
            walknote:
            CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html">
            <Badge mr={2}>男子ハック</Badge>
            [おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>タブロイド</Badge>
          <Link href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html">
            「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>
{/*
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_05.png" alt="walknote" />
            */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
