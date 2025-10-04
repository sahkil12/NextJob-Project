import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData([]);
  const job = jobs.find((job) => job.id === id);

  return (
    <div className="bg-base-300 min-h-screen py-20">
      <div className="max-w-7xl mx-auto bg-base-100 rounded-xl p-6 border border-neutral-300  shadow-xl overflow-hidden">
        {/* Header */}
        <div className=" h-70 w-full">
          <img
            src={job?.bannerImage}
            alt={job?.title}
            className="w-full h-full  rounded-md object-cover"
          />
          
        </div>

        {/* Job Info */}
        <div className="p-6 space-y-4">
            <div className="w-full space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-base-200 ">
              {job?.title}
            </h1>
            <p className="text-gray-500 mt-1">{job?.location}</p>
            <p className="text-accent border  px-6 py-1 border-accent/70 bg-accent/10 rounded-full w-fit font-semibold">{job?.jobType}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-primary">
              {job?.salary}
            </span>
            <span className="text-md font-medium text-neutral-700">
              Posted on : {job?.postedDate}
            </span>
          </div>

          <p className="text-gray-700">{job?.description} | {job?.description}</p>

          {/* Requirements */}
          <div>
            <h2 className="font-semibold text-xl mt-4 mb-2">Requirements:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {job?.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Company & Apply */}
          <div className="my-8 flex gap-3 ">
            <Link
             to={'/jobs'}
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-lg font-bold bg-primary text-white rounded-lg hover:bg-primary/90 transition"
            >
             See More Job
            </Link>
            <a
             href={job?.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-secondary text-base-200 text-lg font-bold rounded-lg hover:bg-secondary/80 transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
