import { Fragment } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
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
        <div className="grid grid-cols-5 justify-items-center">
          <li className="list-none hover:text-white col-start-3 transition ease-in-out hover:translate-x-1 duration-100 ">
            <Link href="/">
              <AiFillHome size={"28"} />
            </Link>
          </li>
          <li className="list-none text-lg font-bold hover:text-white transition ease-in-out hover:translate-x-1 -ml-4">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="list-none text-lg font-bold hover:text-white transition ease-in-out hover:translate-x-1">
            <Link href="/AbhinavTariyal.pdf" download="AbhinavTariyal.pdf">
              <BsDownload size={"28"} />
            </Link>
          </li>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
