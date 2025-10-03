
const CTASection = () => {
    return (
        <div className='py-10 '>
            <div className=" text-white py-16 bg-gradient-to-r from-primary/55 to-secondary/65 px-6 rounded-2xl md:w-[80%] mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ready to Find Your Dream Job?
      </h2>
      <p className="text-lg md:text-xl mb-6 opacity-90">
        Join thousands of professionals who already landed their dream career with us.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition">
          Browse Jobs
        </button>
        <button className="bg-secondary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-secondary/90 transition">
          See Company
        </button>
      </div>
    </div>
        </div>
    );
};

export default CTASection;