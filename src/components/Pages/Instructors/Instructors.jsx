import React, { useState } from "react";
import CommonBanner from "../../../Shared/CommonBanner/CommonBanner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowInstructor from "./ShowInstructor";

const Instructors = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructor = [], refetch } = useQuery(
    ["instructor"],
    async () => {
      const res = await axiosSecure.get("/users/instructor");
      return res.data;
    }
  );
  return (
    <div>
      <CommonBanner heading={"Instructors...."}></CommonBanner>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:px-10 px-5 py-5">
        {instructor.map((instructor) => (
          <ShowInstructor
            key={instructor._id}
            instructor={instructor}
          ></ShowInstructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
