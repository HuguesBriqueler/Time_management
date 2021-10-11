import Layout from "components/Layout";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);
  
  const router = useRouter()

  const submitForm = () => {
    // fetch request is sent to our server-side api
    axios.post("/api/resources", form)
      // .then( res => alert(res.data))
      .then( _ => router.push("/")) // La "variable" _ (underscore) indique qu'il existe un parametre mais qu'il sera ignoré
      .catch( err => alert(err?.response?.data));
  };

  const resetForm = () => {
    setForm(DEFAULT_DATA);
  };

  const handleChange = (e) => {
    console.log(`${e.target.name} send ${e.target.value}`);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      // [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add new resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter a title"
                      value={form.title}
                      name="title"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Enter description"
                      value={form.description}
                      name="description"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Enter a link to the resource"
                      value={form.link}
                      name="link"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={form.priority}
                        name="priority"
                        onChange={handleChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="60"
                      value={form.timeToFinish}
                      name="timeToFinish"
                      onChange={handleChange}
                    />
                  </div>
                  <p className="help">Finish time in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      type="button"
                      onClick={submitForm}
                      className="button is-link"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="button is-link is-light"
                    >
                      Reset form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
