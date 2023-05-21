import React, { useEffect, useState } from "react";
import ShowingGallery from "../showingGallery/showingGallery";

const Gallery = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dolls")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  
  return (
    <div className=" mt-20 mb-20">
      <h1 className="text-center mb-10">
        <span className="font-bold text-3xl text-green-300">shopDisney</span>
        <br />
        <span className="font-bold text-slate-500">Gallery</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {users.map((doll) => (
          <ShowingGallery key={doll._id} doll={doll}></ShowingGallery>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
