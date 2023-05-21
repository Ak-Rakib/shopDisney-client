import React, { useContext, useEffect, useState } from "react";
import ShowingMyToys from "./ShowingMyToys/ShowingMyToys";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const MyToys = () => {
  
    const  {user} = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    fetch(`http://localhost:5000/addCollection?email=${user?.email}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
  <div className="mb-20">
    <h1 className="text-center mb-10 mt-10">
        <span className="font-bold text-3xl text-green-300">shopDisney</span>
        <br />
        <span className="font-bold text-slate-500">You Added This Toys</span>
      </h1>
    <div>
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Toy Name</th>
              <th>Quantity</th>
              <th>Sub-Category</th>
              <th>Details</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                users?.map(data => <ShowingMyToys
                    key={data._id}
                    data = {data}
                    users = {users}
                    setUsers = {setUsers}
                ></ShowingMyToys>)
            }
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default MyToys;
