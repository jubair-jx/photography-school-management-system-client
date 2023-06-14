import React from "react";
import useClass from "../../../../../hooks/useClass";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const MySelectedClass = () => {
  const [classess, refetch] = useClass();
  const total = classess.reduce((add, item) => item.price + add, 0);
  const handleDelete = (classes) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://wonder-server-eight.vercel.app/selectedClass/${classes._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>WRS | My Selected Class</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        animate={{ pathLength: 1 }}
      >
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
          <h3 className="text-3xl">Total Classes: {classess.length} </h3>
          <h3 className="text-3xl">Total Price: ${total}</h3>
          <Link to="/dashboard/payment">
            {" "}
            <button className="btn btn-warning btn-sm">PAY</button>
          </Link>
        </div>
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
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {classess.map((classes, index) => (
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

                  <td>{classes.availabeSeats}</td>
                  <td>${classes.price}</td>

                  <td className="md:pl-8 pl-2">
                    <button
                      onClick={() => handleDelete(classes)}
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
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

export default MySelectedClass;
