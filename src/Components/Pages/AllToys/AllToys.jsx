import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowingAllData from "../ShowingAllData/ShowingAllData";
import useTitle from "../../../Hooks/useTitle";

const AllToys = () => {
  useTitle("Added All Toys");
  const userData = useLoaderData();

  return (
    <div>
      <h1 className="text-center mb-10 mt-10">
        <span className="font-bold text-3xl text-green-300">shopDisney</span>
        <br />
        <span className="font-bold text-slate-500">Customer Added Data</span>
      </h1>
      <div className="overflow-x-auto mb-20">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Serial Number</th> {/* Added new table header */}
              <th>Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data, index) => (
              <ShowingAllData
                key={data._id}
                data={data}
                serialNumber={index + 1}
              /> // Pass the serialNumber prop
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
