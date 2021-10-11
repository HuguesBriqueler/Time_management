
// From here (server-side) no CORS limitation
// External API server can be fetched

import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(req, res) {
  if (req.method === "GET") {
    const resData = await fetch("http://localhost:3001/api/resources")
    const data = await resData.json()
  
    return res.send(data)
  }

  if (req.method === "POST") {
    const { title, description, link, priority, timeToFinish } = req.body
    if ( !title || !description || !link || !priority || !timeToFinish) {
      return res.status(422).send("Data are missing")
    }
    
    try {
      const axiosRes = await axios.post("http://localhost:3001/api/resources", req.body)
      return res.send(axiosRes.data)
    } catch {
      return res.status(422).send("Something went wrong while storing data")
    }
  }
}
