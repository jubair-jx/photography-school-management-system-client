// eslint-disable-next-line react/prop-types
const ShowPopularClasses = ({ classes }) => {
  // eslint-disable-next-line react/prop-types
  const { availabeSeats, classImage, className, instructorName, price } =
    classes;

  return (
    <div>
      <div className="py-2">
        <div className="flex cursor-pointer bg-gradient-to-l border border-gray-400 border-dashed  shadow-lg rounded-lg overflow-hidden">
          <div className="">
            <img
              className="rounded-xl w-full sm:w-[80%] sm:h-44 h-60 px-2 py-2  "
              src={classImage}
              alt="Class Image"
            />
          </div>
          <div className="w-2/3 p-2">
            <h1 className={` font-bold text-[14px] md:text-xl`}>{className}</h1>
            <p className="mt-2 font-medium capitalize text-sm sm:text-base">
              Instructor : {instructorName}
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Availabe Seats : {availabeSeats}
            </p>
            <div className="flex item-center mt-2">
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <svg
                className="w-5 h-5 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-400 dark:text-green-600 font-bold text-xl">
                ${price}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPopularClasses;
