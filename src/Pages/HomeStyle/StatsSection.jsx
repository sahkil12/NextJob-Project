import CountUp from "react-countup";
import { FiBriefcase, FiUsers, FiCheckCircle } from "react-icons/fi";
import { FcCollaboration } from "react-icons/fc";
const stats = [
  {
    id: 1,
    icon: <FiBriefcase size={45} className="text-secondary/85 mb-2" />,
    number: 1250,
    text: "Jobs Posted",
    subText: "Quality job listings for our users every month."
  },
  {
    id: 2,
    icon: <FcCollaboration size={45} className="mb-2" />,
    number: 350,
    text: "Companies Partnered",
    subText: "Trusted companies collaborating with us."
  },
  {
    id: 3,
    icon: <FiCheckCircle size={45} className="text-accent mb-2" />,
    number: 900,
    text: "Successful Placements",
    subText: "Users who found their dream jobs through our platform."
  },
  {
    id: 4,
    icon: <FiUsers size={45} className="text-orange-300 mb-2" />,
    number: 5000,
    text: "Active Members",
    subText: "Professionals actively engaging and growing their careers."
  }
];

const StatsSection = () => {
    return (
        <div className="bg-primary/10 py-8 md:py-10">
            <div className="my-20 md:w-[80%] mx-auto text-center">
     <div className="mb-6 md:mb-16">
         <h2 className="text-4xl md:text-5xl font-bold text-accent">
        Our Success in <span className="text-secondary">Numbers</span>
      </h2>
      <p className="text-lg text-base-200 font-medium my-7">
        Real results, real people. Here's what we've achieved so far.
      </p>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-base-300 shadow-md rounded-xl p-6 flex flex-col items-center"
          >
            {stat.icon}
            <h3 className="text-5xl font-bold text-primary my-3">
              <CountUp end={stat.number} duration={15} separator="," />+
            </h3>
            <p className="text-lg font-semibold mt-1">{stat.text}</p>
            <p className="text-base-200 text-sm mt-1">{stat.subText}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default StatsSection;