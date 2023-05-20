import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const ShowingCategory = ({ doll }) => {
    // const {user} = useContext(AuthContext);
  const { _id, picture, name, price, rating } = doll;
  const notify = () => toast("You have to login first");
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{'$'+price}</p>
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline">{"Rating: "+rating}</div>
            <Link to={`/singleToys/${_id}`}>
              <div onClick={notify} className="btn bg-green-300 border-0">View Details</div>
              <ToastContainer />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingCategory;
