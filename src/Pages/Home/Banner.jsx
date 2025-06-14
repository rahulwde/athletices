import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="mt-2 -z-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {/* Slide 1 */}
        <div className="relative h-[300px] md:h-[800px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://i.ibb.co/TDs2wpDp/banner3.jpg')`,
            }}
          ></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
            
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[300px] md:h-[800px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('https://i.ibb.co/JRdnTMrz/swim2.jpg')`,
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
              Be a Legend of the Pool
            </h2>
            <p className="text-lg mb-6 max-w-xl">
              Make your mark in local and national athletic events. Sign up today!
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[300px] md:h-[800px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('https://i.ibb.co/PGznb922/swim23.jpg')`,
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
              Rise with Every Stroke
            </h2>
            <p className="text-lg mb-6 max-w-xl">
              Take your performance to the next level with our national events.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
              Read More
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
