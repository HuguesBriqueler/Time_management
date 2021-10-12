import Layout from "components/Layout";

const resourceDetail = ({ resource }) => {
  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
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

export async function getStaticPaths() {
  // Here are gathered each page id, then, at build time, a page will be generated for each id (path)
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()
  const paths = data.map(resource => {
    return {
      params: {id: resource.id}
    }
  })
  return {
    paths,  // equal to --> paths: paths
    fallback: false  // other paths will lead to 404 page
  }
}

export async function getStaticProps({ params }) {
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

// export async function getServerSideProps({ params }) {
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
//   };
// }

export default resourceDetail;
