import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

// Here the component recieve the onFormSubmit function from props
function ResourceForm({onFormSubmit}) {
  const [form, setForm] = useState(DEFAULT_DATA);

  const resetForm = () => {
    setForm(DEFAULT_DATA);
  };

  const handleChange = (e) => {
    // console.log(`${e.target.name} send ${e.target.value}`);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      // [e.target.name]: e.target.value
    });
  };

  // When submitForm is triggered, it calls the onFormSubmit function recieved as Props
  // with the form state as argument
  const submitForm = () => {
    onFormSubmit(form)
  }

  return (
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
)
}

export default ResourceForm
