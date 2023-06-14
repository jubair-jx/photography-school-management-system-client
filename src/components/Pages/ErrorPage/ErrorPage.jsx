import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../../assets/404.jpg";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center  text-gray-900">
      <Helmet>
        <title>WRS || Error</title>
      </Helmet>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto ">
        <img className="h-[400px]" src={errorImg} />

        <div className="max-w-md text-center">
          <h2 className=" font-extrabold text-5xl text-red-600">
            <span className="sr-only">Error</span> {status || 400}
          </h2>
          <p className="text-xl font-semibold md:text-2xl mb-6">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-4 text-white font-semibold rounded bg-violet-600 "
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
