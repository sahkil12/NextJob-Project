import Banner from "./HomeStyle/Banner";
import FeaturedJobs from "./HomeStyle/FeaturedJobs";

const Home = () => {
  return (
    <div className="space-y-10 ">
      <Banner></Banner>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
