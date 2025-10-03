import Banner from "./HomeStyle/Banner";
import FeaturedJobs from "./HomeStyle/FeaturedJobs";
import HowItWork from "./HomeStyle/HowItWork";

const Home = () => {
  return (
    <div className="space-y-16 py-10 bg-neutral-100">
      <Banner></Banner>
      <FeaturedJobs></FeaturedJobs>
      <HowItWork></HowItWork>
    </div>
  );
};

export default Home;
