import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider.jsx";
import router from "./Routes/Routes.jsx";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </AuthProvider>
);
{
  /* <div className="md:flex lg:flex xl:flex justify-between px-20 sm:hidden hidden">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M1.63752 4.22185C1.20074 3.15295 2.08488 2.01206 3.22897 2.16825L22.9645 4.86262C24.1086 5.01882 24.6545 6.35495 23.9472 7.26766L11.7461 23.0119C11.0388 23.9246 9.60866 23.7294 9.17188 22.6605L1.63752 4.22185Z"
                stroke="#00C2FF"
                stroke-width="3"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className=" mt-40"
            >
              <path
                d="M8.25267 2.8346C9.20262 0.74989 11.706 -0.112606 13.7384 0.944577L29.1495 8.96078C31.0604 9.95472 31.8411 12.2833 30.9156 14.2282L23.5509 29.7048C22.6017 31.6996 20.2151 32.5471 18.2203 31.5979L2.81024 24.2649C0.838797 23.3268 -0.0162193 20.9811 0.889083 18.9944L8.25267 2.8346Z"
                fill="#A737CE"
                fill-opacity="0.8"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
            >
              <circle cx="15.5" cy="15.5" r="15.5" fill="#FFA800" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <circle cx="22.5" cy="22.5" r="22" stroke="#ED0E0E" />
            </svg>
          </div>

        </div> */
}
