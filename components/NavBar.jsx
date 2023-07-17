import { Fragment } from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 p-10">
        <div className="grid grid-cols-2">
          <div className="text-white bg-black p-10 rounded-lg text-3xl font-logo-font">
            Abhinav T.
          </div>
        </div>
        <div className="grid grid-cols-5 p-10">
          <li className="list-none text-lg font-bold hover:text-white col-start-3 transition ease-in-out hover:translate-x-1 duration-100">
            <Link href="/" >Home</Link>
          </li>
          <li className="list-none text-lg font-bold hover:text-white transition ease-in-out hover:translate-x-1 -ml-4">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="list-none text-lg font-bold hover:text-white transition ease-in-out hover:translate-x-1">
            <Link href="/AbhinavTariyal.pdf" download="AbhinavTariyal.pdf">
              Download CV
            </Link>
          </li>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
