import React, { useState } from "react";
import ShowingGallery from "../showingGallery/showingGallery";

const Gallery = () => {
  const [users, setUsers] = useState([]);

  
    fetch("http://localhost:5000/dolls")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });

  return (
    <div>
        <div className="grid md:grid-cols-3 gap-5 md:mt-20 md:mb-20">
            {
                users.map(doll => <ShowingGallery
                    key={doll._id}
                    doll = {doll}
                ></ShowingGallery>)
            }
        </div>
    </div>
  )
};

export default Gallery;
