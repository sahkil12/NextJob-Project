import { Helmet } from "react-helmet";
import Banner from "./HomeStyle/Banner";
import CTASection from "./HomeStyle/CTASection";
import FeaturedJobs from "./HomeStyle/FeaturedJobs";
import HowItWork from "./HomeStyle/HowItWork";
import Review from "./HomeStyle/Review";
import StatsSection from "./HomeStyle/StatsSection";

const Home = () => {
  return (
    <div className=" pt-10 bg-neutral-100">
      <Helmet>
        <title>NexJob | Home</title>
      </Helmet>
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
