
import Lottie from "lottie-react";
import ErrorElements from "../assets/Animation - 1750044249760.json"
import { useNavigate } from "react-router";
const ErrorElement = () => {
  
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/")
  }
  return (
    
    <div className="h-screen flex items-center flex-col justify-center ">
      <Lottie
        animationData={ErrorElements}
        loop={true}
        style={{ height: 300, width: 300 }}
      />
    <button onClick={ handleClick} className="btn btn-primary p-2 text-white font-bold">Back to Home</button>
    </div>
  );
};

export default ErrorElement;
