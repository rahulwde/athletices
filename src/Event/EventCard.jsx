import { Link } from "react-router";

 


const EventCard = ({athletic}) => {
    const {title,type, image,location,date , _id}= athletic
  return (
    <div>
       
     <div className="card  shadow-lg rounded-xl overflow-hidden bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 animate-pulseSlow text-white transition-all duration-300 hover:scale-[1.02]">
  <figure>
    <img
      className="h-80 w-full object-cover"
      src={image}
      alt={title}
    />
  </figure>
  <div className="card-body space-y-3 bg-black/60 backdrop-blur-md">
    <h2 className="card-title text-3xl font-extrabold text-yellow-300 drop-shadow-md">{title}</h2>
    
    <div className="flex justify-between items-center text-base font-semibold">
      <p>Type: <span className="text-amber-200 font-normal">{type}</span></p>
      <p className="text-cyan-300">Date: {date}</p>
    </div>

    <p className="text-lg font-medium">Location: <span className="text-amber-100 font-normal">{location}</span></p>

    <div className="card-actions justify-end">
      <Link to={`/athletics/${_id}`}><button className="btn btn-sm md:btn-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold border-none">
        See Details
      </button></Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default EventCard;