import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 bg-black">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-500 via-orange-500 to-pink-500 text-transparent bg-clip-text text-center">
        Error 404
      </h1>
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-500 dark:text-gray-500 mt-4 text-center">
        Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-2 text-center">
        We couldn't find the page you were looking for.
      </p>
      <p className="text-lg md:text-xl text-gray-600 mt-2 text-center">
        Please check the URL or go back to the{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
