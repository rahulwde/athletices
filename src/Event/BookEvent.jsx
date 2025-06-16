import React from "react";
import bookevent from "../assets/bookevent- 1750068405409 (1).json";
import { Link } from "react-router";
import Lottie from "lottie-react";
const BookEvent = () => {
  return (
    <div>
      <div className="h-screen flex items-center flex-col justify-center ">
        <Lottie
          animationData={bookevent}
          loop={true}
          style={{ height: 300, width: 300 }}
        />
      <Link to="/event" >
    <button className="btn btn-primary p-2 text-white font-bold">
          Back to Home
        </button>
       
      </Link>
      </div>
    </div>
  );
};

export default BookEvent;
