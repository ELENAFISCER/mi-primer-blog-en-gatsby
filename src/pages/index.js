import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='mi página de inicio'>
    
    <p>Aranjuez mola y mañana no lloverá</p>
    <StaticImage src="https://c8.alamy.com/compes/m0kacb/palacio-real-provincia-de-aranjuez-madrid-espana-m0kacb.jpg" alt=""/>
<StaticImage src=""/>
  </Layout>
  
  
)
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>
// Step 3: Export your component
export default IndexPage


