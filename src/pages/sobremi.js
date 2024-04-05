// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
const SobreMi = () => {
 return (
  <Layout pageTitle='sobre mi'>
  <p>Soy un tipo aburrido y me voy a casar</p>

</Layout>
)
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="sobre mi"/>
// Step 3: Export your component
export default SobreMi


