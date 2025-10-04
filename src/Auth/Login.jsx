import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const { loginUser, googleLogin, githubLogin, forgatPassword } =useContext(AuthContext)
  const navigate = useNavigate()  
  const emailRef = useRef('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log( email, password);
    //login user 
    loginUser(email, password)
    .then(result => {
    console.log("User created:", result.user);
    navigate('/')
  })
  .catch(err => {
    setError(err.message);
  });
  };
  //   google sign up

  const googleUserLogin = () =>{
    googleLogin()
    .then(result => {
      console.log("Google user:", result.user);
      navigate("/");
    })
    .catch(err => setError(err.message));
}
// github sign Up

const githubUserLogin = () =>{
    githubLogin()
     .then(result => {
      console.log("GitHub user:", result.user);
      navigate("/");
    })
    .catch(err => setError(err.message));
}
const forgatPass = () =>{
    const email = emailRef.current.value
    forgatPassword(email)
   .then(() => alert("Password reset email sent! Please check your inbox."))
    .catch(err => setError(err.message));
}
  return (
    <div className="min-h-screen pops flex justify-center items-center">
      <div className="w-full max-w-2xl border-neutral-500 md:border p-6 rounded-md shadow-lg sm:p-8 ">
        <h1 className="text-center text-4xl md:text-5xl my-4 font-semibold">
          Login<span className="text-secondary font-bold"> Here</span>
        </h1>
        <p className="text-base-200 text-center">
          Don't have an account? Please{" "}
          <Link
            to={"/auth/signup"}
            className="text-primary font-semibold text-lg"
          >
            SignUp
          </Link>
        </p>
        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
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
            <Link 
            onClick={forgatPass}
              rel="noopener noreferrer"
              className="hover:underline text-base-200"
            >
              Forgot password?
            </Link>
          </div>
          {error && (
              <p className="text-red-400 font-medium text-sm">{error}</p>
            )}
          {/* Submit Button */}
          <button className="w-full text-lg px-8 py-3 font-bold rounded-md  text-base-200 bg-secondary">
            Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center text-center w-full my-5">
          <hr className="w-full" />
          <p className="px-3 w-full text-neutral-700">OR Login With</p>
          <hr className="w-full" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-4">
          <button
          onClick={googleUserLogin}
            aria-label="Sign up with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border hover:bg-primary/60 hover:text-white font-semibold text-lg rounded-full focus:ring-1 focus:ring-offset-1"
          >
            <FcGoogle size={26}></FcGoogle>
            <p>Login with Google</p>
          </button>

          <button
          onClick={githubUserLogin}
            aria-label="Sign up with GitHub"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border hover:bg-base-200/80 hover:text-base-100  text-lg font-semibold rounded-full focus:ring-1 focus:ring-offset-1"
          >
            <FaGithub size={26}></FaGithub>
            <p>Login with GitHub</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
