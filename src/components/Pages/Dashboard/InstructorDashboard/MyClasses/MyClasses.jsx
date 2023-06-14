import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../../Context/AuthProvider";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";

const MyClasses = () => {
  const [classs, setClasss] = useState("");
  const { id } = useParams();

  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: classes = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get(`/class/instructor/${user?.email}`);
    return res.data;
  });

  // useEffect(() => {
  //   // console.log(classs);
  //   fetch(`https://wonder-server-eight.vercel.app/feedback`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div className="w-full">
      <Helmet>
        <title>WRS || My Classes</title>
      </Helmet>
      <h1 className="text-2xl">Total Classes: {classes.length}</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="overflow-x-auto  overflow-hidden rounded-lg border border-gray-200 shadow-md md:m-1">
          <table className="table w-full collapse  border-collapse bg-gray-100 text-left text-sm text-gray-500">
            {/* head */}
            <thead className="text-center font-extrabold bg-indigo-950 text-white">
              <tr>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Class Image:
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Class Name :
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Total Enrolled
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Feedback
                </th>

                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Update
                </th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classes, index) => (
                <tr className="text-center text-md" key={classes._id}>
                  <td>
                    <img
                      className="h-11 rounded-full w-12"
                      src={classes.classImage}
                      alt=""
                    />
                  </td>
                  <td>{classes.className}</td>
                  <td>{classes?.status || "pending"}</td>
                  <td>{classes?.totalEnrolled}</td>
                  <td>{classes?.feedback}</td>

                  <td className="">
                    <button className="px-4 rounded-lg py-2 bg-green-600 text-white">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default MyClasses;
