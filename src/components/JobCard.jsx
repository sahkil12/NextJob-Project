import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const JobCard = ({ job }) => {
  const { setOpen } = useContext(AuthContext)
  const { id,bannerImage, description, jobType, location, salary, title } = job;

  return (
    <div className="border p-6 bg-accent/5 border-neutral-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      {/* Banner Image */}
      <div className="h-48 w-full mb-4">
        <img
          src={bannerImage}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Job Info */}
      <h3 className="text-2xl font-semibold text-base-200">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{location}</p>
      <p className="text-accent font-semibold mt-1">{jobType}</p>

      {/* Salary */}
      <p className="text-lg font-semibold text-primary/80 mt-3">{salary}</p>

      {/* Short Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {description.slice(0,200)}...
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-3">
        <Link to={`/job/details/${id}`} onClick={()=>setOpen(true)} className="px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary/85 font-medium transition">
          View More Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
