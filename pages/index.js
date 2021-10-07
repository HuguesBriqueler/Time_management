import Navbar from "components/Navbar"
import RessourceHighlight from "components/ResourceHighlight"
import Newsletter from "components/Newsletter"
import ResourceList from "components/ResourceList"
import Footer from "components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <RessourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  )
}
