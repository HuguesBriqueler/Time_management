import Layout from "components/Layout"
import RessourceHighlight from "components/ResourceHighlight"
import Newsletter from "components/Newsletter"
import ResourceList from "components/ResourceList"
import Footer from "components/Footer"

export default function Home() {
  return (
    <Layout>
      <RessourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </Layout>
  )
}
