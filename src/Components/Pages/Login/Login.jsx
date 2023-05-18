import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigation } from "react-router-dom";

const Login = () => {
  const { loginWithGoogle, signIn } = useContext(AuthContext);
  const [error, setError] = useState("");



  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigation();
  const location = useLocation();
  const from = location.state?.form.pathname || "/";



  const googleHandler = () => {
    loginWithGoogle(googleProvider)
    .then((result) =>{
        const user = result.user;
        console.log(user);
        setError("");
    })
  };

  const signInHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        setError("");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-img">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={signInHandler} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
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
              {error.providerId ? null : (
                <p href="#" className="label-text-alt text-red-600 link link-hover">
                  {error}
                </p>
              )}
            </label>
          </div>
          <p className="">
            Have'nt any account? please do <Link to="/register">Register</Link>{" "}
          </p>
          <br />
          <br />
          <div className="form-control mt-6">
            <button className="btn btn-outline mb-8">Login</button>
            <button
              type="submit"
              onClick={googleHandler}
              className="btn btn-outline mb-4"
            >
              Continue With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
