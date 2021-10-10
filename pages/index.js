import Layout from "components/Layout"
import RessourceHighlight from "components/ResourceHighlight"
import Newsletter from "components/Newsletter"
import ResourceList from "components/ResourceList"
import Footer from "components/Footer"
// import { useEffect } from "react"

export default function Home({resources}) {
  // Pour obtenir des données externes à partir d'ici (client-side)
  // if faudrait passer par une api Next (server-side) pour eviter le CORS
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/resources")
  // }, [])

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
  // getServerSideProps peux sans probleme CORS faire une requete sur un serveur externe
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()
  console.log(data)

  return {
    props: {
      resources: data
    }
  }
}
