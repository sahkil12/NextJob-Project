import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-full bg-secondary/10">
        <div className="md:w-[80%] mx-auto py-16 pops">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary">
        What Our <span className="text-teal-600">Users Say</span>
      </h2>
      <p className="text-center md:text-lg text-base-200 font-medium my-7">
        Real stories from people who found their dream jobs with us.
      </p>
      {/* marquee on card*/}
       <Marquee pauseOnClick={true} speed={50} gradient={false} className="my-10">
            <div className="flex gap-8 md:my-8">
                {
                reviews.map((review, index) =><ReviewCard reviews={review} key={index}></ReviewCard> )
            }
            </div>
       </Marquee>
    </div>
    </div>
  );
};

export default Review;
