import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img
        src="https://images.pexels.com/photos/15518197/pexels-photo-15518197.jpeg"
        alt="git picture"
        width={300}
      />
    </div>
  );
}

export default Github;
