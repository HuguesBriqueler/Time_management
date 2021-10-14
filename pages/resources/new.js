import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const router = useRouter()

  // function is called from ResourceForm component with form state as argument
  const createResource = (formData) => {
    // fetch request is sent to our server-side api
    axios.post("/api/resources", formData)
      // .then( res => alert(res.data))
      .then( _ => router.push("/")) // La "variable" _ (underscore) indique qu'il existe un parametre mais qu'il sera ignoré
      .catch( err => alert(err?.response?.data));
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add new resource</h1>
              <ResourceForm
                // Here the createResource function is given to ResourceForm as props
                onFormSubmit={createResource} 
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
