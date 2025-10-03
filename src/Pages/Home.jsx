import Banner from "./HomeStyle/Banner";
import FeaturedJobs from "./HomeStyle/FeaturedJobs";
import HowItWork from "./HomeStyle/HowItWork";
import Review from "./HomeStyle/Review";

const Home = () => {
  return (
    <div className=" py-10 bg-neutral-100">
      <Banner></Banner>
      <FeaturedJobs></FeaturedJobs>
      <HowItWork></HowItWork>
      <Review></Review>
    </div>
  );
};

export default Home;
