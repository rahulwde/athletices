import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="-z-10 rounded-2xl">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {/* Slide 1 */}
        <div className="relative h-[300px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://i.ibb.co/6cpGNpq8/hero-thletic-2.jpg')`,
            }}
          ></div>
         
        </div>

        {/* Slide 2 */}
        <div className="relative h-[300px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('https://i.ibb.co/KjVW39SX/hweo-THLWTIC2.jpg')`,
            }}
          ></div>
          
        </div>

        {/* Slide 3 */}
        <div className="relative h-[300px] md:h-[500px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://i.ibb.co/GQdBkFqV/heroathletic.jpg')`,
            }}
          ></div>
          
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
