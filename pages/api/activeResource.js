import axios from "axios";

const activeResource = async (req, res) => {
  const axiosRes = await axios.get("http://localhost:3001/api/activeresource");
  const resource = axiosRes.data;
  return res.send(resource);
};

export default activeResource;
