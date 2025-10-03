import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSubmit = e =>{
        e.preventDefault()
    }
    return (
        <div className="min-h-screen  pops flex justify-center items-center">
            <div className="w-full max-w-2xl md:border p-6 rounded-md shadow sm:p-8">
                <h1 className="text-center text-4xl md:text-5xl my-3 font-semibold">Create Your <span className="text-secondary font-bold">Account</span></h1>
                <p className="text-base-200 text-center">
                    Already have an account?{" "}
                    <Link to={'/auth/login'} className="text-primary font-semibold text-lg">Login</Link>
                </p>
                {/* Sign Up Form */}
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div className="space-y-4">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="block text-sm">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                className="w-full px-5 py-4 border rounded-md " 
                                autoComplete="off" 
                            />
                        </div>
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="block text-sm">Email address</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email Address" 
                                className="w-full px-5 py-4 border rounded-md " 
                                autoComplete="off" 
                            />
                        </div>
                        {/* Password */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm ">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Your Password" 
                                className="w-full px-5 py-4 border rounded-md " 
                            />
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button 
                        className="w-full text-lg px-8 py-3 font-bold rounded-md  text-base-200 bg-secondary"
                    >
                        Sign Up
                    </button>
                </form>

                {/* OR Divider */}
                <div className="flex items-center w-full my-3">
                    <hr className="w-full" />
                    <p className="px-3">OR</p>
                    <hr className="w-full" />
                </div>

                {/* Social Buttons */}
                <div className="space-y-4">
                    <button 
                        aria-label="Sign up with Google" 
                        type="button" 
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1"
                    >
                        <FcGoogle size={26}></FcGoogle>
                        <p>Sign up with Google</p>
                    </button>

                    <button 
                        aria-label="Sign up with GitHub" 
                        type="button" 
                        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1"
                    >
                       <FaGithub size={26}></FaGithub>
                        <p>Sign up with GitHub</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
