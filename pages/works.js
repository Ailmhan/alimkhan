import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbInkdrop from '../public/images/works/ygroup3.png'
import thumbWalknote from '../public/images/works/ils.jpg'
import thumbFourPainters from '../public/images/works/4car.png'
import thumbMargelo from '../public/images/works/bridge.png'
import thumbModeTokyo from '../public/images/works/trustme_esg.jpeg'
import thumbStyly from '../public/images/works/hash-fond.png'
import thumbPichu2 from '../public/images/works/analys.jpg'
import thumbAmembo from '../public/images/works/product.png'
import mindfullkids from '../public/images/works/mindfull.png'
import logizi from '../public/images/works/logizi.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="ygroup" title="Ygroup" thumbnail={thumbInkdrop}>
          Real estate for agents and property developers(Android,IOS)
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="intelogis"
            title="Intelogis"
            thumbnail={thumbWalknote}
          >
            Big and productive Logistic service(Company mobile app, customer web)
          </WorkGridItem>
        </Section>
        

        <Section>
          <WorkGridItem
            id="mindfull"
            title="Mindfull Kids"
            thumbnail={mindfullkids}
          >
            Meditation and affirmation forkids(Android, IOS)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="logizi"
            title="Logizi Moving"
            thumbnail={logizi}
          >
            Moving in USA
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="hash-fond" thumbnail={thumbStyly} title="HFTA">
            MVP of crypto hash-fond with KUIC, work payment api,2fa.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="4car"
            title="4car"
            thumbnail={thumbFourPainters}
          >
          Sign up for a car wash near you
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
          <WorkGridItem id="freedbtagger" thumbnail={thumbMargelo} title="Digital Bridge 2022">
          Developed a large mobile application in partnership. For the international forum
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
       

   
          <WorkGridItem
            thumbnail={thumbModeTokyo}
            id = "amembo"
            title="Trustme, Product Managment">
            Product managment of ESG Company
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
          <WorkGridItem id="#" thumbnail={thumbPichu2} title="System Analys">
           System Analys
          </WorkGridItem>
        </Section>
    
        <Section delay={0.6}>
          <WorkGridItem id="#" thumbnail={thumbAmembo} title="Product Managment">
           Combat experience product management
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
