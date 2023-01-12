import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/ygroup3.png'
import thumbWalknote from '../public/images/works/ils.jpg'
import thumbFourPainters from '../public/images/works/4car.png'
import thumbMenkiki from '../public/images/works/joba.png'
import thumbMargelo from '../public/images/works/bridge.png'
import thumbModeTokyo from '../public/images/works/trustme_esg.jpeg'
import thumbStyly from '../public/images/works/hash-fond.png'
import thumbPichu2 from '../public/images/works/analys.jpg'
import thumbFreeDBTagger from '../public/images/works/writing.png'
import thumbAmembo from '../public/images/works/product.png'
import mindfullkids from '../public/images/works/mindfull.png'
import logizi from '../public/images/works/logizi.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Ygroup" thumbnail={thumbInkdrop}>
          Real estate for agents and property developers(Android,IOS)
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="walknote"
            title="Intelogis"
            thumbnail={thumbWalknote}
          >
            Big and productive Logistic service(Company mobile app, customer web)
          </WorkGridItem>
        </Section>
        

        <Section>
          <WorkGridItem
            id="walknote"
            title="Mindfull Kids"
            thumbnail={mindfullkids}
          >
            Meditation and affirmation forkids(Android, IOS)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Logizi Moving"
            thumbnail={logizi}
          >
            Moving in USA
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="HFTA">
            MVP of crypto hash-fond with KUIC, work payment api,2fa.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="4car"
            thumbnail={thumbFourPainters}
          >
          Sign up for a car wash near you
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Joba">
          Application for finding a project for builders
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Digital Bridge 2022">
          Developed a large mobile application in partnership. For the international forum
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="Trustme, Product Managment"
          >
            I was the first product manager of Trustme.kz a successful ESG technology startup
          </WorkGridItem>
        </Section>
      
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Full Skill Pack
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="System Analys">
          i did a system analysis and i can do it again
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Technical writing"
          >
           I write terms of reference according to SRS(Software requirements specification)
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Product Managment">
           Combat experience product management
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
