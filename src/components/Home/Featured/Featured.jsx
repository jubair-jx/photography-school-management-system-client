import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <section className=" mt-10 mb-10">
      <SectionTitle
        heading="Spotlight Our Excellence"
        subHeading="Hey!!! Enhanced for Uniqueness"
      />
      <div
        data-aos="fade-up"
        className="container flex flex-col items-center gap-6 mx-auto my-14"
      >
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
          <div className="flex flex-col h-52 w-full px-8 py-4 gap-2 border border-gray-300 bg-gradient-to-r from-white to-indigo-100 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span className=" mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-violet-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
            </span>
            <p className="sm:text-2xl mt-1 text-xl font-semibold text-gray-700 font-Kanit">
              Crafting Visual Narratives
            </p>
            <p className="text-sm font-poppins text-gray-600">
              Discover our rich history in shaping the art of photography,
              driven by a passion for visual storytelling and innovation
            </p>
          </div>
          <div className="flex flex-col h-52 w-full px-8 py-4 gap-2 border border-gray-300 bg-gradient-to-r from-white to-indigo-100 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span className=" mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-violet-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </span>
            <p className="sm:text-2xl mt-1 text-xl font-semibold text-gray-700 font-Kanit">
              Elevate Your Craft
            </p>
            <p className="text-sm font-poppins text-gray-600">
              Explore our bespoke services designed to empower photographers of
              all levels, from tailored workshops to custom equipment solutions
            </p>
            <p>
              {/* <Link href={"/all-flats"}>
              <button className=" px-2 py-1 mt-1 text-sm bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
                Explore More
              </button>
            </Link> */}
            </p>
          </div>
          <div className="flex flex-col h-52 w-full px-8 py-4 gap-2 border border-gray-300 bg-gradient-to-r from-white to-indigo-100 rounded-lg shadow-sm hover:translate-y-1 duration-300 cursor-pointer">
            <span className=" mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-violet-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </span>
            <p className="sm:text-2xl mt-1 text-xl font-semibold text-gray-700 font-Kanit">
              Why We Stand Out
            </p>
            <p className="text-sm font-poppins text-gray-600">
              Learn what makes us the go-to choice for aspiring photographers,
              from our industry-leading instructors to cutting-edge facilities.
            </p>
            <p>
              {/* <Link href={"/all-flats"}>
              <button className=" px-2 py-1 mt-1 text-sm bg-orange-600 font-Kanit text-white hover:bg-orange-700 rounded duration-300 shadow-md">
                Explore More
              </button>
            </Link> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
