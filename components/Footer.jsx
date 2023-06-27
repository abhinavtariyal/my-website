import Link from "next/link";
const Footer = () => {
  return (
    <div className="container mx-auto text-center py-4">
      <Link href='https://www.linkedin.com/in/abhinav-tariyal' className="mx-10">LinkedIn</Link>
      <Link href='https://github.com/abhinavtariyal' className="mx-10">GitHub</Link>
      <Link href='#' className="mx-10">Email</Link>
    </div>
  );
};

export default Footer;
