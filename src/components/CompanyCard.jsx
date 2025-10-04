

const CompanyCard = ({company}) => {
    return (
         <div
            className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <figure className="p-6 flex justify-center items-center bg-base-200/95">
              <img
                src={company.logo}
                alt={company.name}
                className="h-24 w-20 object-contain"
              />
            </figure>
            <div className="card-body text-center space-y-1">
              <h3 className="text-2xl font-semibold">{company.name}</h3>
              <p className="text-lg text-gray-500 font-medium">{company.location}</p>
              <p className="text-lg text-gray-500 font-medium">{company.industry}</p>
              <div className="my-2">
                <a
                  rel="noopener noreferrer"
                  className="btn btn-md py-5 btn-secondary "
                >
                  View More Details
                </a>
              </div>
            </div>
          </div>
    );
};

export default CompanyCard;