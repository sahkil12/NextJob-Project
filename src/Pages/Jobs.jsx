import { useLoaderData, useNavigation } from "react-router-dom";
import JobCard from "../components/JobCard";
import { Helmet } from "react-helmet";
import Loader from "../Errorpages/Loader";
import { useState } from "react";

const Jobs = () => {
  const jobs = useLoaderData([]);
  const navigation = useNavigation()
  const [searchTerm, setSearchTerm] = useState("");
  if(navigation.state == 'loading'){
    return <Loader></Loader>
  }
  // search/filter logic
  const filteredJobs = jobs.filter((job) =>
    job.jobType.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="bg-base-300 pops">
        <Helmet>
        <title>Jobs | NexJob</title>
      </Helmet>
      <div className=" w-11/12 mx-auto pops min-h-screen">
        <section className="py-10 space-y-8">
          {/* heading section */}
          <h2 className="text-4xl/relaxed md:text-6xl font-semibold text-center">
            {" "}
            Find Your{" "}
            <span className="text-accent font-bold border-b-4">
              Dream
            </span> Job{" "}
          </h2>
          <p className="text-lg font-medium opacity-90 text-base-200 text-center">
            Browse through the latest job opportunities.
          </p>
        </section>
        {/* search bar  */}
      <section className="xl:w-2/4 mx-auto py-5 px-5">
  <fieldset className="w-full ">
    <label htmlFor="Search" className="sr-only">Search</label>
    <div className="relative">
      <input
        type="search"
        name="Search"
        id="Search"
        placeholder="Search your job Type | Full-Time | Part-Time | Remote"
        className="w-full px-10 py-4 md:py-6  pl-12 pr-4  rounded-lg border border-gray-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent text-gray-800 placeholder-gray-400 transition-all duration-200"
        autoComplete="on"
         value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
        </svg>
      </span>
    </div>
  </fieldset>
</section>
              <section className="py-10 mt-5 md:mt-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard job={job} key={job.id}></JobCard>
              ))
            ) : (
              <p className="text-center text-base-200 text-2xl col-span-2">
                No jobs found for "{searchTerm}"
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Jobs;
