import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="full bg-accent/5 min-h-screen pops">
      <div className="md:w-10/12 mx-auto">
        <div className=" py-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold ">
            About <span className="text-secondary">Us</span>
          </h1>
          <p className="mt-4 text-base-200 font-medium text-lg">
            We connect job seekers with top companies and help you land your
            dream career.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:w-[80%] mx-auto">
          <div className="p-10  bg-white shadow rounded-xl">
            <h2 className="text-3xl font-semibold mb-3 text-accent">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              To make job hunting simple, fast, and transparent for everyone,
              everywhere.
            </p>
          </div>
          <div className="p-10 bg-white shadow rounded-xl">
            <h2 className="text-3xl font-semibold mb-3 text-accent">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              To become the most trusted platform where employers and candidates
              meet with confidence.
            </p>
          </div>
        </div>
        {/* why choice us */}
        <div className="text-center my-12 md:w-[80%] mx-auto">
  <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">Why Choose <span className="text-base-200">Us?</span></h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-6 py-14 bg-white shadow font-semibold text-lg rounded-xl">✅ Trusted Companies</div>
    <div className="p-6 py-14 bg-white shadow font-semibold text-lg rounded-xl">🔒 Verified Jobs</div>
    <div className="p-6 py-14 bg-white shadow font-semibold text-lg rounded-xl">⚡ Easy Process</div>
    <div className="p-6 py-14 bg-white shadow font-semibold text-lg rounded-xl">🎯 Career Guidance</div>
  </div>
</div>

      {/* CTA Section */}
      <div className="bg-accent/80 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
        <p className="mb-6 text-lg">Whether you're a job seeker or an employer, we’ve got you covered.</p>
        <div className="flex flex-col md:flex-row mx-5 justify-center gap-4">
          <Link
            to="/jobs"
            className="bg-base-100 text-primary px-6 py-4 rounded-lg font-semibold  transition"
          >
            Looking for a Job? Explore Now
          </Link>
          <Link
            to="/companies"
            className="bg-secondary px-6 py-4 rounded-lg font-semibold hover:bg-secondary/95 transition"
          >
            Hire the Right Talent
          </Link>
        </div>
      </div>


      </div>
    </div>
  );
};

export default About;
