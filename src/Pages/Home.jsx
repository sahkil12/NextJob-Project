import Banner from "./HomeStyle/Banner";
import CTASection from "./HomeStyle/CTASection";
import FeaturedJobs from "./HomeStyle/FeaturedJobs";
import HowItWork from "./HomeStyle/HowItWork";
import Review from "./HomeStyle/Review";
import StatsSection from "./HomeStyle/StatsSection";

const Home = () => {
  return (
    <div className=" pt-10 bg-neutral-100">
      <Banner></Banner>
      <FeaturedJobs></FeaturedJobs>
      <HowItWork></HowItWork>
      <Review></Review>
      <StatsSection></StatsSection>
      <CTASection></CTASection>
    </div>
  );
};

export default Home;
