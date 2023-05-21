import React, { useContext, useEffect, useState } from "react";
import ShowingMyToys from "./ShowingMyToys/ShowingMyToys";

const MyToys = () => {
    const  {user} = useContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addCollection?email=${user.email}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
  <div>
    <div>
    <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                users.map(addDollData, index => <ShowingMyToys
                    key={add}
                    addDollData = {addDollData}
                    serialNumber={index + 1}
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
