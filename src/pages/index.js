import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='Inicio'>
    
    <p>Aranjuez mola y mañana no lloverá</p>
    <StaticImage src="https://c8.alamy.com/compes/m0kacb/palacio-real-provincia-de-aranjuez-madrid-espana-m0kacb.jpg" alt=""/>
<StaticImage src="https://c8.alamy.com/compes/2gr53wp/un-disparo-vertical-de-una-estatua-y-su-hermoso-reflejo-en-el-agua-en-aranjuez-espana-2gr53wp.jpg"/>
  </Layout>
  
  
)
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Inicio"/>
// Step 3: Export your component
export default IndexPage


