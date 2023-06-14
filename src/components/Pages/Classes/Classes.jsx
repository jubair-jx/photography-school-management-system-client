import React, { useEffect, useState } from "react";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowClasses from "./ShowClasses";

const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const [approvedClass, setApporvedClass] = useState([]);
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });
  useEffect(() => {
    const filter = classes.filter((classes) => classes.status === "approved");
    setApporvedClass(filter);
  }, [classes]);
  return (
    <div>
      <CommonBanner heading={"Classes..."}></CommonBanner>{" "}
      <div className="grid md:grid-cols-3 gap-4 md:px-10 px-5 py-5">
        {approvedClass.map((classes) => (
          <ShowClasses key={classes._id} classes={classes}></ShowClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;
