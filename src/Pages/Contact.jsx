import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
    const handleForm = e =>{
        e.preventDefault()
        toast.success('Massage Sent SuccessFully')
    }
    return (
      <div className="bg-primary/5">
        <Helmet>
        <title>Contact Us | NexJob</title>
      </Helmet>
         <div className="lg:w-[80%] mx-auto py-10 p-6 pops ">
      {/* Title */}
      <div className="text-center space-y-5 mb-10 md:my-16">
        <h2 className="text-4xl md:text-6xl font-bold text-accent">Contact With<span className="text-secondary"> Us</span></h2>
        <p className="text-gray-500 text-lg">We’d love to hear from you! Reach out to us anytime.</p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
        <div className="bg-white shadow-md rounded-xl p-6 py-10 space-y-3">
          <MdLocationOn size={40} className="text-4xl text-secondary mx-auto" />
          <h3 className="text-xl font-semibold mt-3">Address</h3>
          <p className="text-gray-500">123 Main Street, Dhaka, Bangladesh</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 py-10 space-y-3">
          <MdPhone size={40} className="text-4xl text-secondary mx-auto" />
          <h3 className="text-xl font-semibold mt-3">Phone</h3>
          <p className="text-gray-500">+880 1234 567 890</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 py-10 space-y-3">
          <MdEmail size={40} className="text-4xl text-secondary mx-auto" />
          <h3 className="text-xl font-semibold mt-3">Email</h3>
          <p className="text-gray-500">support@yourdomain.com</p>
        </div>
      </div>
      {/* middle part */}
     <section className="">
         <div className="text-center my-5 mb-8">
        <h2 className="text-4xl md:text-5xl text-accent underline font-semibold">Send Us Massage</h2>
      </div>
     <div className="flex flex-col lg:flex-row gap-5 justify-between">
               {/* Contact Form */}
      <div className="bg-white w-full flex-1 shadow-md rounded-xl p-8 md:p-12">
        <h3 className="text-3xl font-semibold mb-6 text-center">Send Your Message</h3>
        <form onSubmit={handleForm} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
          </div>
          <input type="text" placeholder="Subject" className="input input-bordered w-full" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-32"></textarea>
          <button className="btn btn-secondary w-full">Send Message</button>
        </form>
      </div>
      <div className="flex-1 hidden xl:flex">
        {/* img */}
        <img src="/mobileIcon.png" className="w-full h-full rounded-lg" alt="" />
      </div>
     </div>
     </section>
     {/* map */}
        <div className="mt-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.939619674356!2d90.41251861498259!3d23.810331584564616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79f3f0c0bb1%3A0x429c9c9c9c9c9c9c!2sDhaka!5e0!3m2!1sen!2sbd!4v1634038140998!5m2!1sen!2sbd" 
          width="100%" 
          height="400" 
          allowFullScreen="" 
          loading="lazy" 
          className="rounded-xl shadow-md"
        ></iframe>
      </div>
        
      </div>
      </div>
    );
};

export default Contact;