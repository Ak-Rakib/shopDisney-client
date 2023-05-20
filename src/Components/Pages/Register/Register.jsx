import React, { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { manuallyCreateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const signUpHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);

    manuallyCreateUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="bg-img py-20">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={signUpHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
              />
              <label className="label">
                <p href="#" className="label-text-alt">
                  We'll never share your Name.
                </p>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="Photo"
                name="photoURL"
                placeholder="photoURL"
                className="input input-bordered"
              />
              <label className="label">
                <p href="#" className="label-text-alt">
                  We'll never share your photo.
                </p>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              <label className="label">
                <p href="#" className="label-text-alt">
                  We'll never share your email with anyone else.
                </p>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                {error ? (
                  <p
                    href="#"
                    className="label-text-alt link link-hover text-red-600"
                  >
                    {error}
                  </p>
                ) : null}
              </label>
            </div>
            <p className="">
              Have an account? please do <Link to="/login">LogIn</Link>{" "}
            </p>
            <br />
            <br />
            <div className="form-control mt-6">
              <button className="btn bg-green-300 border-0">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
