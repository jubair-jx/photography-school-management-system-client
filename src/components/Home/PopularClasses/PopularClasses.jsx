import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowPopularClasses from "./ShowPopularClasses";

const PopularClasses = () => {
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
  console.log(approvedClass);
  return (
    <div className="mt-6">
      <SectionTitle
        heading={"Popular Classes"}
        subHeading={"Show Our Awesome Classes "}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 md:px-10 px-5 py-5">
        {approvedClass.slice(0, 6).map((classes) => (
          <ShowPopularClasses
            key={classes._id}
            classes={classes}
          ></ShowPopularClasses>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
