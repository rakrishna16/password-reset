import React from 'react';
import { SiVorondesign } from "react-icons/si";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="flex items-center text-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mx-auto text-center">
          {/* <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg> */}
          <SiVorondesign className="mx-auto h-10 w-auto" />
          <Link to={"/"}> <span className="font-semibold text-xl tracking-tight">HKX Pass App</span></Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;