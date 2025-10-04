import { useContext, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [show, setShow] = useState(false);
  const { signUpUser, googleLogin, githubLogin } = useContext(AuthContext)
  const navigate = useNavigate()  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    // validation
    if (name.length < 5) {
      setNameError("Name should be 5 Character or more. ");
      return;
    } else {
      setNameError("");
    }
    // password validate--
    if (!/^.{8,}$/.test(password)) {
      setError("Password must be at least 8 characters or longer.");
      return false;
    }
    if (!/.*\d.*/.test(password)) {
      setError("Password must contain at least one number.");
      return false;
    }
    if (!/.*[@#$%&*!].*/.test(password)) {
      setError(
        "Password must contain at least one special character like (@ # $ % & * !)."
      );
      return false;
    }
    setError("");
    // signup
    signUpUser(email, password)
    .then(result => {
    console.log("User created:", result.user);
    navigate('/')
  })
  .catch(err => {
    setError(err.message);
  });
};
//   google sign up

  const googleSignUp = () =>{
    googleLogin()
    .then(result => {
      console.log("Google user:", result.user);
      navigate("/");
    })
    .catch(err => setError(err.message));
}
// github sign Up
const githubSignUp = () =>{
    githubLogin()
     .then(result => {
      console.log("GitHub user:", result.user);
      navigate("/");
    })
    .catch(err => setError(err.message));
}
  return (
    <div className="min-h-screen pops flex justify-center items-center">
      <div className="w-full max-w-2xl md:border border-neutral-400 p-6 rounded-md shadow sm:p-8">
        <h1 className="text-center text-4xl md:text-5xl my-3 font-semibold">
          Create Your <span className="text-secondary font-bold">Account</span>
        </h1>
        <p className="text-base-200 text-center">
          Already have an account?{" "}
          <Link
            to={"/auth/login"}
            className="text-primary font-semibold text-lg"
          >
            Login
          </Link>
        </p>
        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="block text-sm">Full Name</label>
              <input
                type="text"
                required
                name="name"
                placeholder="Your Name"
                className="w-full px-5 py-4 border rounded-md "
                autoComplete="off"
              />
              {nameError && (
                <p className="text-red-400 font-medium text-sm py-1">
                  {nameError}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email Address"
                className="w-full px-5 py-4 border rounded-md "
                autoComplete="off"
              />
            </div>
            {/* Password */}
            <div className="space-y-2 relative">
              <label htmlFor="password" className="block text-sm ">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                placeholder="Your Password"
                className="w-full px-5 py-4 border rounded-md "
              />
                 <button
                onClick={() => {
                  setShow(!show);
                }}
                type="button"
                className="absolute right-4 top-10"
              >
                {show ? (
                  <IoEyeOff className="text-neutral-700" size={26}></IoEyeOff>
                ) : (
                  <IoEye className="text-neutral-700" size={26}></IoEye>
                )}
              </button>
            </div>
          </div>
          {error && (
              <p className="text-red-400 font-medium text-sm">{error}</p>
            )}
          {/* Submit Button */}
          <button className="w-full text-lg px-8 py-3 font-bold rounded-md  text-base-200 bg-secondary">
            Sign Up
          </button>
        </form>

         {/* OR Divider */}
                <div className="flex items-center text-center w-full my-5">
                    <hr className="w-full" />
                    <p className="px-3 w-full text-neutral-700">OR Sign Up With</p>
                    <hr className="w-full" />
                </div>
       {/* Social Buttons */}
                <div className="space-y-4">
                    <button 
                        onClick={googleSignUp}
                        aria-label="Sign up with Google" 
                        type="button" 
                        className="flex items-center justify-center w-full p-4 space-x-4 border hover:bg-primary/60 hover:text-white font-semibold text-lg rounded-full focus:ring-1 focus:ring-offset-1"
                    >
                        <FcGoogle size={26}></FcGoogle>
                        <p>Sign Up with Google</p>
                    </button>

                    <button 
                    onClick={githubSignUp}
                        aria-label="Sign up with GitHub" 
                        type="button" 
                        className="flex items-center justify-center w-full p-4 space-x-4 border hover:bg-base-200/80 hover:text-base-100  text-lg font-semibold rounded-full focus:ring-1 focus:ring-offset-1"
                    >
                       <FaGithub size={26}></FaGithub>
                        <p>Sign Up with GitHub</p>
                    </button>
                </div>
      </div>
    </div>
  );
};

export default SignUp;
