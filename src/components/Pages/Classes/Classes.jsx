import { useQuery } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ShowClasses from "./ShowClasses";
const Classes = () => {
  const [axiosSecure] = useAxiosSecure();
  const [approvedClass, setApporvedClass] = useState([]);
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
    const filter = classes.filter((classes) => classes.status === "approved");
    setApporvedClass(filter);
  }, [classes]);
  return (
    <div>
      <CommonBanner heading={"Classes..."}></CommonBanner>{" "}
      <div
        data-aos="fade-up"
        className="grid md:grid-cols-3 gap-4 md:px-10 px-5 py-5 container mx-auto"
      >
        {approvedClass.map((classes) => (
          <ShowClasses key={classes._id} classes={classes}></ShowClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;
