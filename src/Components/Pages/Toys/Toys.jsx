import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import useTitle from "../../../Hooks/useTitle";


const Toys = () => {
  useTitle("Added Toys");
    const {user} = useContext(AuthContext);
    

    const userPurchaseDollHandler = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const toyName = form.toyName.value;
      const category = form.category.value;
      const price = form.price.value;
      const quantity = form.quantity.value;
      const userOrder = {
        name,
        toyName,
        category,
        price,
        quantity
      };
      console.log(userOrder);
  
      fetch('https://shopdisney-server-production.up.railway.app/userCollection', {
          method: "POST",
          headers: {
              "content-type" : "application/json"
          },
          body: JSON.stringify(userOrder)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          Swal.fire({
            title: 'Added Successfully!',
            text: 'Added Successfully, Please Continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      });
    };

  return (
    <div>
      <h1 className="text-center mb-10">
        <span className="font-bold text-3xl text-green-300">shopDisney</span>
        <br />
        <span className="font-bold text-slate-500">Added Area</span>
      </h1>
      <form onSubmit={userPurchaseDollHandler}>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-12 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered  w-full mb-10 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy</span>
            </label>
            <input
              type="toyName"
              name="toyName"
              className="input input-bordered  w-full mb-10 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="category"
              className="input input-bordered  w-full mb-4 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              className="input input-bordered  w-full  "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="$"
              className="input input-bordered  w-full  "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="message"
            ></textarea>
          </div>
        </div>
        <input className="btn btn-block bg-green-300 border-0 mb-20" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Toys;
