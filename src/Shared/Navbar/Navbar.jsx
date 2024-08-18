import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const logOutHandler = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    //TODO: Much More Improvement here
    <nav
      style={{ borderBottom: "1.5px solid #fff" }}
      className=" flex flex-wrap items-center justify-between animate-text md:fixed top-0 right-0 z-30 bg-gradient-to-r bg-opacity-60 bg-slate-900 w-full lg:pl-24 "
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/"
            className="text-md  items-center  font-semibold leading-relaxed gap-2 flex mr-10 py-3 whitespace-nowrap uppercase text-black"
          >
            <img
              className=" border-[2px] border-gray-400 rounded-full w-12 h-12"
              src={logo}
              alt=""
            />

            <h1
              style={{ fontFamily: "'Pacifico', cursive" }}
              className=" bg-gradient-to-r  animate-text from-gray-100 via-gray-100 to-gray-200 bg-clip-text text-transparent"
            >
              {" "}
              WonderRoots
            </h1>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow justify-center md:ml-6 ml-4 items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex md:items-centerw-full gap-2 justify-center flex-col lg:flex-row list-none lg:mx-auto ">
            <li className="nav-item bg-white pr-3 pl-2 rounded-md">
              <Link
                to="/"
                className="px-2 py-2 rounded-lg hover:bg-gray-50 text-center flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[black] hover:text-orange-400"
              >
                <span className="ml-2 text-md">Home</span>
              </Link>
            </li>

            <li className="nav-item bg-white pr-3 pl-2 rounded-md">
              <Link
                to="/instructors"
                className="px-2 rounded-lg hover:bg-gray-50 py-2 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
              >
                <span className="ml-2 text-md flex items-center justify-center">
                  Instructors
                </span>
              </Link>
            </li>

            <li className="nav-item bg-white px-4 pl-4 rounded-md">
              <Link
                to="/classes"
                className="px-1 py-2 rounded-lg hover:bg-gray-50 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
              >
                <span className="ml-2 text-md flex items-center justify-center">
                  Classes
                </span>
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item bg-white rounded-md pr-3 pl-2">
                  <Link
                    to="/dashboard"
                    className="px-1 py-2 rounded-lg hover:bg-gray-50 flex items-center text-xs uppercase font-semibold leading-snug duration-300 text-[#0a0a0a] hover:text-orange-400"
                  >
                    <span className="ml-2 text-md flex items-center justify-center">
                      Dashboard
                    </span>
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {/* Swap Button / Toggle Button */}
            <label className="swap swap-rotate pl-14">
              {/* this hidden checkbox controls the state */}
              <input
                checked={theme === "light" ? false : true}
                onChange={handleToggle}
                type="checkbox"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8 bg-yellow-400 rounded-full text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 bg-slate-50 rounded-full  h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            <div className="lg:ml-28 flex gap-4  items-center md:mb-0 md:mt-0 md:ml-0 mb-8 mt-2 ml-4  ">
              <div className="mr-0">
                {
                  <div>
                    {user?.photoURL ? (
                      <span title={user?.displayName}>
                        <img
                          className="rounded-full w-8 h-8 border-2 border-white"
                          src={user?.photoURL}
                          alt=""
                        />
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                }
              </div>

              <div>
                {user ? (
                  <Link
                    onClick={logOutHandler}
                    className=" text-white   bg-violet-600  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-7 py-3 text-center"
                  >
                    Sign Out
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className=" text-white bg-violet-600  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-7 py-3 text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
