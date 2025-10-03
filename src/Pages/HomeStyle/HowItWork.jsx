import { VscWorkspaceTrusted } from "react-icons/vsc";
import {
  FaUserPlus,
  FaFileUpload,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";
const HowItWork = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus size={45} className="text-4xl text-primary mx-auto" />,
      title: "Create Account",
      desc: "Sign up for free and start your journey.",
    },
    {
      id: 2,
      icon: (
        <FaFileUpload size={45} className="text-4xl text-secondary mx-auto" />
      ),
      title: "Upload Resume",
      desc: "Add your resume to let companies find you.",
    },
    {
      id: 3,
      icon: <FaBriefcase size={45} className="text-4xl text-accent mx-auto" />,
      title: "Apply Jobs",
      desc: "Search and apply to jobs that fit you.",
    },
    {
      id: 4,
      icon: <FaHandshake size={45} className="text-4xl text-primary mx-auto" />,
      title: "Get Hired",
      desc: "Connect with companies and land your dream job.",
    },
  ];
  return (
    <div className="w-full bg-accent/15">
      <div className="md:w-[80%] mx-auto py-16 rounded-xl border-neutral-200 pops text-center ">
        <div className="space-y-7">
          <h2 className="text-4xl flex justify-center gap-1 md:text-5xl font-bold text-accent">
            How It <span className="text-secondary">Works</span>{" "}
            <VscWorkspaceTrusted />
          </h2>
          <p className="text-lg text-base-200 font-medium">
            Follow these 4 simple steps to land your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 my-10 md:mx-6 ">
          {steps.map((step) => (
            <div
              key={step.id}
              className="p-6 py-10 bg-white shadow-md rounded-xl hover:shadow-lg transition"
            >
              <div className="w-22 h-22 flex items-center justify-center rounded-full bg-primary/15 mx-auto">
                {step.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-4 text-black">
                {step.title}
              </h3>
              <p className="text-gray-500 text-base mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
