import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loader from './../Errorpages/Loader';

const CompanyDetails = () => {
  const { id } = useParams(); 
  const companies = useLoaderData([]); 
  const company = companies.find((c) => c.id == id);
  const navigation = useNavigation()
  if(navigation.state == 'loading'){
    return <Loader></Loader>
  }
  if (!company) {
    return (
      <div className="w-10/12 mx-auto pops min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Company not found.</p>
      </div>
    );
  }

  return (
   <div className="w-full bg-base-300">
     <div className="w-3/4 mx-auto pops min-h-screen py-10 ">
      <Helmet>
        <title>{company.name} | NexJob</title>
      </Helmet>
     <div className="my-5 text-lg flex lg:hidden">
         <Link to={'/companies'} className="text-primary font-semibold ">Back</Link>
     </div>
      {/* Company Header */}
      <div className="text-center mb-10 space-y-2">
        <img
          src={company.logo}
          alt={company.name}
          className="mx-auto h-26 w-26 object-contain mb-4"
        />
        <h1 className="text-4xl font-bold">{company.name}</h1>
        <p className="text-gray-600 mt-1 font-medium">{company.location}</p>
        <p className="text-gray-600 font-medium">{company.industry}</p>
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg btn-secondary mt-4 text-base-300"
        >
          Visit Website
        </a>
      </div>

      {/* Company Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About the Company</h2>
          <p className="text-gray-700">{company.description}</p>

          <h3 className="text-xl font-semibold mt-4">Average Salary</h3>
          <p className="font-semibold text-primary">{company.averageSalary}</p>

          <h3 className="text-xl font-semibold mt-4">Growth Rate</h3>
          <p>{company.growthRate}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills Required</h2>
          <ul className="list-disc list-inside text-gray-700">
            {company.skillsRequired.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CompanyDetails;
