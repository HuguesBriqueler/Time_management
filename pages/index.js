import Layout from "components/Layout"
import RessourceHighlight from "components/ResourceHighlight"
import Newsletter from "components/Newsletter"
import ResourceList from "components/ResourceList"
import Footer from "components/Footer"

export default function Home({resources}) {
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

export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()
  console.log(data)

  return {
    props: {
      resources: data
    }
  }
}
