
// From here (server-side) no CORS limitation
// External API server can be fetched

export default async function(req, res) {
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()

  res.send(data)
}