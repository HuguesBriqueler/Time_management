import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function ActiveResource() {
  const [resource, setResource] = useState({});

  useEffect(() => {
    const fetchResource = async () => {
      const axiosRes = await axios.get("/api/activeResource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");
      const updatedTimeToFinish = (resource.timeToFinish * 60) - elapsedTime;

      if (updatedTimeToFinish >=0 ) {
        resource.timeToFinish = updatedTimeToFinish
      }

      setResource(resource);
    };
    fetchResource();
  }, []);

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">{resource.timeToFinish}</h2>
      </div>
      <Link href="/">
        <a className="button">Go to resource</a>
      </Link>
    </div>
  );
}

export default ActiveResource;
