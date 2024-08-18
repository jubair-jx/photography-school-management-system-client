import CommonDashboardHeaderTitle from "../../../../../Shared/DashboardTitle/DashboardTitle";
import CourseOverview from "../../Charts/Overview";

function StudentHome() {
  const data = [
    {
      id: 0,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      title: "Enroll Course",
      count: "46",
    },
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ),
      color: "#0E9F6E",
      bgColor: "#DEF7EC",
      title: "Course Pending",
      count: 14,
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      ),
      color: "#3F83F8",
      bgColor: "#E1EFFE",
      title: "Course Complete",
      count: "05",
    },
  ];

  return (
    <div>
      <CommonDashboardHeaderTitle
        mainTitle="Hey!!! Welcome to the Dashboard"
        secondaryTitle={"You can see and enroll your own preference courses"}
      />
      <div className="grid gap-4 px-2 mb-8 md:grid-cols-2 xl:grid-cols-3 mt-6">
        {data?.map((item) => (
          <div
            key={item?.id}
            className="relative flex flex-grow !flex-row hover:translate-y-1 duration-300 cursor-pointer items-center rounded-[8px] border-[1px] border-dashed border-gray-100  bg-white bg-clip-border shadow text-black"
          >
            <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div className="rounded-full bg-lightPrimary p-3 bg-indigo-100">
                <span className="flex items-center text-brand-500 text-indigo-600">
                  {item?.icon}
                </span>
              </div>
            </div>
            <div className="h-50 ml-4 flex w-auto flex-col justify-center">
              <p className="font-Freeman sm:text-lg text-base font-medium text-gray-900">
                {item?.title}
              </p>
              <h4 className="text-sm sm:text-base font-semibold font-poppins">
                {item?.count}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className=" font-poppins w-full sm:w-[98%] bg-white shadow-md border rounded border-dashed mx-auto">
        <CourseOverview titleText="Your Course Analytics" />
      </div>
    </div>
  );
}

export default StudentHome;
