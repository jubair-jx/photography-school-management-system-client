import React, { useState } from "react";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");

    return res.data;
  });
  const handleApproveButton = (id) => {
    console.log(id);
    axiosSecure
      .patch(`/class/approved/${id}`, { status: "approved" })
      .then((data) => {
        // setApporved(!isApporved);

        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class is Successfully Approved.",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };
  const handleDenyButton = (id) => {
    axiosSecure
      .patch(`/class/deny/${id}`, { status: "denied" })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Class is Successfully Denied.",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>WRS || Manage Classes</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Classes: {classes.length}
      </h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}
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
                  Class Img:
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
                  Instructor Name:
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Instructor Mail:
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Available Seats
                </th>
                <th
                  scope="col"
                  className=" px-2  py-4 font-bold text-md text-white"
                >
                  Price
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
                  Action
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
                  <td>{classes.instructorName}</td>
                  <td>{classes.email}</td>
                  <td>{classes.availabeSeats}</td>
                  <td>${classes.price}</td>

                  <td>{classes.status || "pending"}</td>
                  <td className="">
                    {classes.status === "approved" ||
                    classes.status === "denied" ? (
                      <>
                        <button
                          disabled={true}
                          onClick={() => handleApproveButton(classes._id)}
                          className="btn btn-xs bg-green-600 text-white"
                        >
                          Approve
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          disabled={false}
                          onClick={() => handleApproveButton(classes._id)}
                          className="btn btn-xs bg-green-600 text-white"
                        >
                          Approve
                        </button>
                      </>
                    )}
                    {classes.status === "denied" ||
                    classes.status === "approved" ? (
                      <>
                        <button
                          disabled={true}
                          onClick={() => {
                            handleDenyButton(classes._id);
                          }}
                          className="btn btn-xs bg-red-500 text-white "
                        >
                          Deny
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          disabled={false}
                          onClick={() => {
                            handleDenyButton(classes._id);
                          }}
                          className="btn btn-xs bg-red-500 text-white "
                        >
                          Deny
                        </button>
                      </>
                    )}
                    <Link to={`/dashboard/feedback/${classes._id}`}>
                      <button className="btn btn-xs bg-blue-600 text-white">
                        Feedback
                      </button>
                    </Link>
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

export default ManageClasses;
