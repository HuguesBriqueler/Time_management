import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";

const ResourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    axios.patch("/api/resources", formData)
    .then( _ => alert("Data has been updated")) // La "variable" _ (underscore) indique qu'il existe un parametre mais qu'il sera ignoré
    .catch( err => alert(err?.response?.data));
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Update resource</h1>
              <ResourceForm
                initialData={resource}
                onFormSubmit={updateResource}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

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

export default ResourceEdit;
