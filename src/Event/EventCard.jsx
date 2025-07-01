import { Link } from "react-router";

const EventCard = ({ athletic }) => {
  const { title, type, image, location, date, _id } = athletic;

  return (
    <div className="w-full md:w-[320px] lg:w-[360px]">
      <div className="card shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-base-100 dark:bg-[#0f1115]">
        <figure>
          <img
            className="h-56 w-full object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body space-y-3 bg-base-300">
          <h2 className="card-title text-xl font-bold">{title}</h2>

          <div className="flex justify-between items-center text-sm font-medium">
            <p>
              Type: <span className="text-[#f95f35]">{type}</span>
            </p>
            <p className="text-base ">Date: {date}</p>
          </div>

          <p className="text-base font-medium">
            Location: <span className="text-base">{location}</span>
          </p>

          <div className="card-actions">
            <Link to={`/athletics/${_id}`}>
              <button className="btn btn-sm md:btn-md w-full bg-[#f95f35] hover:bg-[#e7552f] text-white font-semibold border-none">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
