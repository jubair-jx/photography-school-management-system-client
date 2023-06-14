import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../../Context/AuthProvider";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const img_token = import.meta.env.VITE_Image_token;

const AddClass = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const img_url = `https://api.imgbb.com/1/upload?key=${img_token}`;
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imgUrl = imgRes.data.url;
          console.log(imgUrl);
          console.log(imgRes);
          const {
            availabeSeats,

            className,
            email,
            instructorName,
            price,
          } = data;
          const newClass = {
            availabeSeats: parseInt(availabeSeats),
            classImage: imgUrl,
            className,
            email,
            date: new Date(),
            instructorName,
            price: parseFloat(price),
          };
          axiosSecure.post("/class", newClass).then((data) => {
            console.log("data from newitem", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Class is successfully Added.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="rounded-md bg-slate-300 md:mx-40 md:w-[700px]   mx-4 my-3 md:my-5 h-[780px]  md:h-[580px] ">
          <div className="text-center">
            <h1 className="text-center font-bold text-5xl bg-gradient-to-r animate-text from-gray-800 via-violet-500 to-gray-800 bg-clip-text text-transparent  pt-5">
              Add a Class
            </h1>
            <p className="mt-5 md:w-[650px] text-sm mx-auto ">
              Hey Welcome to WonderRoots Scholars, At our Summer Camp School,
              your child will have the opportunity to explore various interests
              and develop their talents. From sports and outdoor adventures to
              arts and crafts,
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" grid md:grid-cols-2 ">
              <div className="mt-8 md:ml-4">
                <div className=" mb-2 w-full md:w-[100%] px-2">
                  <label className="block font-medium mb-2">Name</label>
                  <input
                    {...register("className", { required: true })}
                    type="text"
                    placeholder="Enter a ClassName..."
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className=" mb-2 w-full md:w-[100%] px-2">
                  <label className="block font-medium mb-2">
                    Instructor Name
                  </label>
                  <input
                    {...register("instructorName", { required: true })}
                    type="text"
                    placeholder="Enter a Instructor Name"
                    defaultValue={user?.displayName}
                    className="w-full cursor-not-allowed py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className=" mb-2 w-full md:w-[100%] px-2">
                  <label className="block font-medium mb-2">
                    Availabe Seats
                  </label>
                  <input
                    {...register("availabeSeats", { required: true })}
                    type="number"
                    placeholder="Enter a Availabe Seats..."
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="md:mt-8 ">
                <div className="mb-2 w-full md:w-[100%] px-2">
                  <label className="block font-medium mb-2">
                    Instructor E-mail
                  </label>
                  <input
                    {...register("email", { required: true })}
                    placeholder="Enter a Instructor E-mail"
                    type="email"
                    defaultValue={user?.email}
                    className="w-full cursor-not-allowed py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-2 w-full md:w-[100%] px-2">
                  <label className="block font-medium mb-2">Price</label>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    placeholder="Enter a Class Price"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className=" w-full md:w-[70%] mx-auto px-8 ">
              <label className="block font-medium mb-2">Class Image</label>
              <input
                type="file"
                {...register("image", { required: true })}
                placeholder="Enter a Class Image"
                className="file-input file-input-bordered file-input-info w-full max-w-xs"
              />
            </div>
            <motion.div
              className="card w-[70%] mx-auto px-8 py-2"
              variants={cardVariants}
              initial="initial"
              animate="animate"
            >
              <button className="w-full bg-violet-600 border border-[#724f48] text-white font-bold py-2 px-4 rounded">
                Add a Class
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddClass;
