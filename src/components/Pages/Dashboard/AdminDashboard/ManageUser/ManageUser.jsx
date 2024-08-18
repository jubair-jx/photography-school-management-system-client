import { useQuery } from "@tanstack/react-query";

import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";

const ManageUser = () => {
  const [isInstructor, setInstructor] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");

    return res.data;
  });
  const handleMakeInstructor = (user) => {
    fetch(
      `https://wonder-server-eight.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setInstructor(false);
        if (data.modifiedCount > 0) {
          refetch();

          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is a Instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeAdmin = (user) => {
    fetch(`https://wonder-server-eight.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          // setAdmin(true);

          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>WRS || Manage Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-x-auto md:m-6">
          <table className="table w-full collapse  border-collapse bg-gray-100 text-left text-sm text-gray-500">
            {/* head */}
            <thead className="bg-indigo-950 text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Current Role</th>
                <th className="md:pl-24 pl-10">Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>

                  <td>{user.email}</td>
                  <td>{user.role || "student"}</td>
                  <td>
                    <>
                      {user.role === "admin" ? (
                        <button
                          disabled={true}
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-sm text-[10px] bg-green-600  text-white"
                        >
                          Make Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-sm text-[10px] bg-green-600  text-white"
                        >
                          Make Admin
                        </button>
                      )}
                    </>
                    <>
                      {user.role === "instructor" ? (
                        <button
                          disabled={true}
                          onClick={() => handleMakeInstructor(user)}
                          className="btn btn-sm text-[10px] bg-green-600  text-white"
                        >
                          Make Instructor
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeInstructor(user)}
                          className="btn btn-sm text-[10px] bg-blue-600  text-white"
                        >
                          Make Instructor
                        </button>
                      )}
                    </>
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Sorry!!",
                          text: "You don't have access to delete this user",
                          icon: "warning",
                        })
                      }
                      className="btn btn-ghost bg-red-600  text-white"
                    >
                      <FaRegTrashAlt></FaRegTrashAlt>
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

export default ManageUser;
