import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div className="grid grid-cols-7 text-center mt-96 bg-black p-10 rounded-md shadow-2xl">
      <div className="col-start-3">
        <Link
          href="https://www.linkedin.com/in/abhinav-tariyal"
          className="mx-10"
        >
          <LinkedInIcon fontSize="large" className="hover:text-white"/>
        </Link>
      </div>
      <Link href="https://github.com/abhinavtariyal" className="mx-10">
        <GitHubIcon fontSize="large" className="hover:text-white"/>
      </Link>
      <div className="cols-end-4">
        <Link href="mailto:abhinavtariyal2@gmail.com" className="mx-10">
          <EmailIcon fontSize="large" className="hover:text-white"/>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
