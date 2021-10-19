import Layout from "components/Layout";
import ResourceLabel from "components/ResourceLabel";
import Link from "next/link";
import axios from "axios";
import moment from "moment";
// import { useRouter } from "next/router";

const ResourceDetail = ({ resource }) => {
  // ----- Way to do with getstaticPaths & getStaticProps - Static way -----
  // const router = useRouter();
  // ----- In static way router function allow to verify isFallback (true)
  // then a page (message) is diplayed until getStaticProps give a result
  // if (router.isFallback) {
  //   return <div>Loading Data...!</div>
  // }

  const activeResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((_) => {
        alert("Resource has been activated !");
        location.reload();
      })
      .catch((_) => alert("Cannot activate the resource !"));
  };
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource.createdAt).format("LLLL")}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish : {resource.timeToFinish} min.</p>
                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className="button is-warning">Update</a>
                    </Link>
                    <button
                      onClick={activeResource}
                      className="button is-success ml-1"
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

//  ---------- Way to do with getServerSideProps - Dynamic way ----------

export async function getServerSideProps({ params }) {
  // params refers to id parameter ('/resources/id') set in file name ('[id].js')
  // query refers to 'id' and other 'query parameters' such as '/resources/456?someQuery=hello'

  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await dataRes.json();

  return {
    props: {
      resource: data,
    },
  };
}

//  ---------- Way to do with getstaticPaths & getStaticProps - Static way ----------
//
// export async function getStaticPaths() {
//   // Here are gathered each page id, then, at build time, a page will be generated for each id (path)
//   const resData = await fetch("http://localhost:3001/api/resources")
//   const data = await resData.json()
//   const paths = data.map(resource => {
//     return {
//       params: {id: resource.id}
//     }
//   })
//   return {
//     paths,  // equal to --> paths: paths
//     fallback: true  // false --> other paths will immediatly lead to 404 page
//     // true --> Next will wait for getStaticProps and generate new static page
//   }
// }

// export async function getStaticProps({ params }) {
//   // params refers to id parameter ('/resources/id') set in file name ('[id].js')
//   // query refers to 'id' and other 'query parameters' such as '/resources/456?someQuery=hello'

//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${params.id}`
//   );
//   const data = await dataRes.json();

//   return {
//     props: {
//       resource: data,
//     },
//     revalidate : 10  // permet de revalider la page static toutes les n secondes
//   };
// }

export default ResourceDetail;
