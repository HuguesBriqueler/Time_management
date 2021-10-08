import Layout from "components/Layout"
import RessourceHighlight from "components/ResourceHighlight"
import Newsletter from "components/Newsletter"
import ResourceList from "components/ResourceList"
import Footer from "components/Footer"
import { resources } from "api/data"

export default function Home() {
  return (
    <Layout>
      <RessourceHighlight 
        resources = {resources.slice(0, 2)} // Only 2 first elements will be sent
      />
      <Newsletter />
      <ResourceList 
        resources = {resources}
      />
      <Footer />
    </Layout>
  )
}
