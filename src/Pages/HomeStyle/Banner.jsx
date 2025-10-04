import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className={` pops md:w-[80%] mx-auto rounded-xl h-120 md:h-170 bg-center bg-no-repeat bg-cover`}
      style={{
        backgroundImage: `linear-gradient(65deg, #000000b1, #000000b1),url(/hero.png)`,
      }}
    >
      <div className="text-center space-y-10 flex flex-col justify-center h-full">
        <h2 className="text-3xl md:text-6xl text-secondary font-bold">
          Find Your <span className="text-base-300">Dream</span> Job Today
        </h2>
        <p className="w-10/12 lg:w-[30%] mx-auto text-base/normal text-gray-100 font-normal opacity-85 md:text-xl">
          Search thousands of opportunities and connect with employers who are
          hiring now.
        </p>

        <div>
          <Link
            className="relative inline-block text-xl px-10 py-4 font-bold group"
            >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-base-300 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-secondary border-2 border-base-200 group-hover:bg-secondary"></span>
            <span className="relative font-bold text-base-200 group-hover:text-base-30">
              Browse Jobs
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
