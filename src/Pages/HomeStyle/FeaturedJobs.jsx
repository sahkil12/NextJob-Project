import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedJobs = () => {
    const [featuredJob, setFeaturedJob] = useState([])
    useEffect(()=>{
        fetch('/featuredJobs.json')
        .then(res=> res.json())
        .then(data => setFeaturedJob(data))
    },[])
    return (
        <div className="md:w-[80%] mx-auto my-10 py-7 pops text-center">
           <div className="space-y-7">
             <h2 className="text-4xl md:text-5xl  font-bold text-accent">Featured Jobs</h2>
            <p className="text-lg text-base-200 font-medium">Explore the latest opportunities from top companies. Find your next career move today.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-8">
                {
                    featuredJob.map(feature => <FeaturedCard key={feature.id} feature={feature}></FeaturedCard>)
                }
           </div>
        </div>
    );
};

export default FeaturedJobs;