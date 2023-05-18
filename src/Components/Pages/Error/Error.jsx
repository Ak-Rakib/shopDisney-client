import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="relative flex justify-center">
      <div className="absolute top-52 text-center">
        <h1 className="text-8xl font-bold">404!!!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/"><button className="btn btn-outline mt-5">Back To HomePage</button></Link>
      </div>
    </div>
  );
};

export default Error;
