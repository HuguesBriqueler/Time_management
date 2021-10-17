import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

function ActiveResource() {
  const [resource, setResource] = useState({});
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const fetchResource = async () => {
      const axiosRes = await axios.get("/api/activeResource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(
        moment(resource.activationTime),
        "seconds"
      );
      const updatedTimeToFinish = resource.timeToFinish * 60 - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }
      
      setResource(resource);
    };
    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds <= 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const completeResource = () => {
    axios.patch("/api/resources", {...resource, status: "complete"})
      .then(_ => {
        alert("Resource has been completed !");
        location.reload();
      })
      .catch(_ => alert("Cannot complete the resource !"))
  }

  const hasResource = resource && resource.id;
  return (
    <div className="active-resource">
      <h1 className="resource-name">
        {hasResource ? resource.title : "No resource active"}
      </h1>
      <div className="time-wrapper">
        {hasResource &&
          (seconds > 0 ? (
            <h2 className="elapsed-time">{seconds}</h2>
          ) : (
            <h2 className="elapsed-time">
              <button
                onClick={completeResource}
                className="button is-success">
                Terminate Action
              </button>
            </h2>
          ))}
      </div>
      {hasResource ? (
        <Link href={`/resources/${resource.id}`}>
          <a className="button">Go to resource</a>
        </Link>
      ) : (
        <Link href="/">
          <a className="button">Go to resources</a>
        </Link>
      )}
    </div>
  );
}

export default ActiveResource;
