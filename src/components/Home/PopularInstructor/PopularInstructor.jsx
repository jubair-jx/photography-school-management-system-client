import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ShowPopularInstructor from "./ShowPopularInstructor";

const PopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructor = [] } = useQuery(["instructor"], async () => {
    const res = await axiosSecure.get("/users/instructor");
    return res.data;
  });

  return (
    <div className="mt-5">
      <SectionTitle
        heading={"Meet Our Instructor"}
        subHeading={"Sharping your skills with our instructor"}
      ></SectionTitle>
      <div
        data-aos="fade-down"
        className="grid md:grid-cols-3 px-2 md:px-28 py-4 gap-4"
      >
        {instructor.slice(2, 8).map((instructor) => (
          <ShowPopularInstructor
            key={instructor._id}
            instructor={instructor}
          ></ShowPopularInstructor>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
