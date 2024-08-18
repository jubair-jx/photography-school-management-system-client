import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div data-aos="fade-in" className=" mb-8">
      <div>
        <h2 className="text-3xl font-bold text-center mt-12 sm:text-5xl ">
          Pricing
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
          Get started on our free plan and upgrade when you are ready.
        </p>
      </div>
      <div className="mt-12 mb-4 container space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 px-4">
        <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Free</h3>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">$0</span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p className="mt-6 ">You just want to discover</p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">50 Credits</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Enroll Course (4 credits)</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Quizz (1 credits) </span>
              </li>
            </ul>
          </div>
          <Link
            to={"/register"}
            className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            href="/auth/login"
          >
            Signup for free
          </Link>
        </div>
        <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold ">Pro</h3>
            <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
              Most popular
            </p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight">
                $25
              </span>
              <span className="ml-1 text-xl font-semibold">/month</span>
            </p>
            <p className="mt-6 ">
              You want to learn and have a personal assistant
            </p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">100 credits</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Powered by AI (more accurate)</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Enroll Course (4 credits)</span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Quizz (1 credits) </span>
              </li>
              <li className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 w-6 h-6 text-emerald-500"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="ml-3 ">Instant Support</span>
              </li>
            </ul>
          </div>
          <Link
            to={"/register"}
            className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            href="/auth/login"
          >
            Signup for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
