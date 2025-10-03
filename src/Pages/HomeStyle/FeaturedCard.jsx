import { useNavigation } from "react-router-dom";

const FeaturedCard = ( {feature} ) => {
    const navigate = useNavigation()
     const {title, bannerImage, company, highlight, jobType, location, salary } = feature;
     if(navigate.state === 'loading'){
        return <Loader></Loader>;
    }
    return (
        <div className="border flex bg-base-100 flex-col md:flex-row gap-4 border-neutral-300 rounded-lg p-4 md:items-center hover:shadow-lg">
            <img src={bannerImage} className="md:w-70 object-cover rounded-md md:h-56" alt={title} />
            <div className="text-start space-y-4">
                <h2 className="flex gap-4">
                    <span className="border px-6 py-1 rounded-full bg-orange-100 font-medium border-orange-300 text-orange-600">{highlight}</span>
                    <span className="border px-6 py-1 rounded-full bg-green-50 font-medium border-green-400 text-green-600">{jobType}</span>
                </h2>
                <h2 className="text-xl text-base-200 font-semibold">{title}</h2>
                <h4 className="text-lg text-base-200 font-medium">Company : {company}</h4>
                <h4 className="text-base-200 font-medium">Location : {location}</h4>
                <h3 className="text-lg font-semibold">Salary : <span className="text-primary">{salary}</span></h3>
            </div>
        </div>
    );
};

export default FeaturedCard;