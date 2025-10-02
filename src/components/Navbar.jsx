import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li>
        <NavLink to={'/'} className={({isActive})=> isActive ? 'font-medium text-lg text-accent border px-5 duration-300' : 'font-medium text-lg text-base-200'}>Home</NavLink>
    </li>
        <li>
            <NavLink to={'/jobs'} className={({isActive})=> isActive ? 'font-medium text-lg text-accent border duration-300 px-5' : 'font-medium text-lg text-base-200'}>Jobs</NavLink>
        </li>
        <li>
            <NavLink to={'/companies'} className={({isActive})=> isActive ? 'font-medium text-lg text-accent border duration-300 px-5' : 'font-medium text-lg text-base-200'}>Companies</NavLink>
        </li>
      <li>
          <NavLink to={'/about'} className={({isActive})=> isActive ? 'font-medium text-lg text-accent border px-5 duration-300' : 'font-medium text-lg text-base-200'}>About</NavLink>
      </li>
        <li>
            <NavLink to={'/blogs'} className={({isActive})=> isActive ? 'font-medium text-lg text-accent border duration-300 px-5' : 'font-medium text-lg text-base-200'}>Blogs</NavLink>
        </li>
        <li>
             <NavLink to={'/contact'} className={({isActive})=> isActive ? 'font-medium text-lg text-accent border px-5 duration-300' : 'font-medium text-lg text-base-200'}>Contact</NavLink>
        </li>
    </>
    return (
        <div className="navbar shadow-sm bg-gray-100 py-6 md:px-5 pops">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box space-y-3 z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className="flex gap-2 items-center">
        <img src="/public/job logo.png" className="w-10 h-10 md:w-14 md:h-14" alt="" />
        <Link to={'/'} className="text-[26px] md:text-3xl text-primary font-bold">NextJob</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-5 menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   <Link className="btn btn-primary px-6 text-base">Login</Link>
  </div>
</div>
    );
};

export default Navbar;