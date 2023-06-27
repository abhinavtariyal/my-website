import { Fragment } from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <Fragment>
      <div className="flex flex-row p-4 rounded-lg space-x-20 justify-center shadow-2xl">
        <li className="list-none font-bold hover:text-black"><Link href="/">HOME</Link></li>
        <li className="list-none font-bold hover:text-black"><Link href="/about">ABOUT</Link></li>
        <li className="list-none font-bold hover:text-black"><Link href="/contact">CONTACT</Link></li>
      </div>
    </Fragment>
  );
};

export default NavBar;
