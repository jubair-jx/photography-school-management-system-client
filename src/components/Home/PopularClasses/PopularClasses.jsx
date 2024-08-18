import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ShowPopularClasses from "./ShowPopularClasses";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [approvedClass, setApporvedClass] = useState([]);
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });
  useEffect(() => {
    const filter = classes.filter((classes) => classes.status === "approved");
    setApporvedClass(filter);
  }, [classes]);

  return (
    <div className="mt-6">
      <SectionTitle
        heading={"Explore Your Photography Excellence"}
        subHeading={"Explore your own path to photography excellence"}
      ></SectionTitle>
      <div
        className="grid md:grid-cols-2 gap-4 md:px-10 px-5 py-5 "
        data-aos="fade-down"
      >
        {approvedClass.slice(2, 8).map((classes) => (
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
