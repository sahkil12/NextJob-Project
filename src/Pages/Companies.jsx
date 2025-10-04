import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";

const Companies = () => {
  const companies = useLoaderData([]);
  return (
    <div className="md:w-10/12 mx-auto pops min-h-screen to-base-300">
      <Helmet>
        <title>Companies | NexJob</title>
      </Helmet>

      {/* Hero Section */}
      <section className="py-10 space-y-9">
        {" "}
        {/* heading section */}{" "}
        <h2 className="text-4xl md:text-6xl font-semibold text-center">
          {" "}
          Top Hiring{" "}
          <span className="text-secondary font-bold border-b-4">
            {" "}
            Companies{" "}
          </span>{" "}
        </h2>{" "}
        <p className="text-lg font-medium opacity-90 text-base-200 text-center">
          {" "}
          Explore the companies currently hiring talent.{" "}
        </p>{" "}
      </section>

      {/* Companies Grid */}
      <section className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
       {
        companies.map(company => <CompanyCard key={company.id} company={company}></CompanyCard>)
       }
      </section>
      {/* Featured Companies */}
      <section className="py-10">
        <h3 className="text-4xl font-semibold my-8 text-center">
          Featured Companies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companies.slice(0, 3).map((company) => (
            <div
              key={`featured-${company.id}`}
              className="card bg-primary text-primary-content shadow-xl hover:scale-105 transform transition-transform duration-300"
            >
              <figure className="p-8 flex justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-24 w-24 object-contain"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="text-xl font-bold">{company.name}</h3>
                <p>{company.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Companies;
