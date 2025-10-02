import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center  text-center">
       <div className=" flex flex-col space-y-6">
         <h2 className="text-5xl font-bold text-red-500">404</h2>
        <h2 className="text-4xl font-bold text-red-500">Page Not Found!</h2>
        <button >
            <Link to={'/'} className="btn btn-error px-10 py-6 font-bold text-lg">Go Back</Link>
        </button>
        <img src="/error.png" className="object-cover md:h-150" alt="" />
       </div>
    </div>
  );
};



export default ErrorPage;
