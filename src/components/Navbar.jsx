import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Profile from "./Profile";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-lg text-accent border px-5 duration-300"
              : "font-medium text-lg text-base-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/jobs"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-lg text-accent border duration-300 px-5"
              : "font-medium text-lg text-base-200"
          }
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/companies"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-lg text-accent border duration-300 px-5"
              : "font-medium text-lg text-base-200"
          }
        >
          Companies
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-lg text-accent border px-5 duration-300"
              : "font-medium text-lg text-base-200"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-lg text-accent border duration-300 px-5"
              : "font-medium text-lg text-base-200"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "font-medium text-lg text-accent border px-5 duration-300"
              : "font-medium text-lg text-base-200"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  const { user, signOutUser, setIsOpen, isOpen } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="navbar shadow-sm bg-gray-100 py-6 md:px-5 pops">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box space-y-3 z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="/job logo.png"
            className="w-10 h-10 md:w-14 md:h-14"
            alt=""
          />
          <Link
            to={"/"}
            className="text-[26px] md:text-3xl text-primary font-bold "
          >
            NextJob
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu gap-5 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          // <div className="flex items-center gap-3 ">
          //   <p className="hidden sm:flex font-bold text-primary">{user.displayName}</p>
          //   <Link onClick={()=>setIsOpen(true)}>
          //   <img className="rounded-full w-10 h-10 md:w-13 md:h-13" 
          //   src={user.photoURL ? `${user.photoURL}` : '/profile-user.png'} alt="" />
          //   </Link>
          //   <Link
          //   onClick={handleSignOut}
          //   to={"/auth/login"}
          //   className="btn btn-primary px-5 py-3 md:px-6 md:py-4 text-base"
          // >
          //   Sign Out
          // </Link>
          // </div>
           <div className="dropdown  dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-14 rounded-full ring ring-primary/40 ring-offset-2">
                    <img
                    className="rounded-full w-10 h-10"
                      alt="User"
                      src={user?.photoURL || '/profile-user.png' }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={-1}
                  className="menu menu-md dropdown-content bg-white border border-slate-200 rounded-box z-10 mt-3 flex flex-col gap-3 justify-center items-center w-72 md:w-96 shadow-lg py-6 sm:py-10 p-5"
                >
                  <li className="w-full items-center">
                    <span className="pop text-lg font-semibold text-secondary">{user.displayName}</span>
                    <span className="text-sm sm:text-base font-semibold">{user?.email}</span>
                  </li>
                  <div className="border border-primary/60 w-full"></div>
                  <li className="w-full items-center">
                    <button onClick={handleSignOut} className="btn py-6 w-full text-base bg-primary/90 text-white border-none"> Sign Out</button>
                  </li>
                </ul>
              </div>
        ) : (
          <div className="flex gap-2">
            <Link to={"/auth/login"} className="btn btn-primary px-7 text-base">
              Login
            </Link>
          </div>
        )}
        {
          isOpen && <Profile></Profile> 
        }
      </div>
    </div>
  );
};

export default Navbar;
