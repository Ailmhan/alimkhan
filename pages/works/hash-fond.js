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
  <Layout title="hash-fond">
    <Container>
      <Title>
        Crypto Hash Fond <Badge>202</Badge>
      </Title>
      <P>
      A minimal variable product of a crypto hash function is a design approach that aims to minimize the number of input and output variables without compromising the security and efficiency of the hash function. This approach results in a smaller and less complex hash function, which requires less computational resources and is more efficient.

      In a minimal variable product of a crypto hash function, the input message is typically divided into fixed-size blocks, and each block is processed independently using a compression function. The compression function takes a fixed-size input block and outputs a fixed-size hash value.

The output hash value is then used as an input to the next compression function until all message blocks are processed. The final hash value is obtained by combining the output hash values of all compression functions.

A minimal variable product of a crypto hash function should have desirable cryptographic properties such as collision resistance, pre-image resistance, and second pre-image resistance. These properties ensure that it is computationally infeasible to find two different input messages that result in the same output hash value or to find an input message that hashes to a given output hash value.

Overall, a minimal variable product of a crypto hash function provides a balance between security and efficiency, making it suitable for various applications such as digital signatures, key derivation, and password hashing.

      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flutter, Node-JS, Solidity</span>
        </ListItem>
        <ListItem>
         
        </ListItem>
      </List>

      
{/*
      <WorkImage src="/images/works/styly_eyecatch.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_01.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_02.png" alt="STYLY" />
      <WorkImage src="/images/works/styly_03.png" alt="STYLY" />
*/}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
