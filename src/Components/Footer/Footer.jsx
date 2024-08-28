// /* eslint-disable no-unused-vars */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 
    sm:grid-cols-2 p-20 bg-slate-900 max-w-full 
    max-sm:text-center "
    id="footer"

    >
      <div className="flex flex-col text-white">
        <h2 className=" font-bold mb-2">Quick Access</h2>
        <div className="flex flex-col gap-2 p-3">
          <a href="" className="text-md">
            Home
          </a>
          <a href="" className="text-md">
            About
          </a>
          <a href="" className="text-md">
            Our Team
          </a>
        </div>
      </div>

      <div className="flex flex-col mt-0 max-sm:mt-4 text-white">
        <h2 className=" font-bold mb-2">Office Location</h2>
        <div className="flex flex-col gap-2 p-3">
          <p className="text-md">
            Small Industrial Estate, Township Bannu,
            <br />
             KPK Pakistan.
          </p>
        </div>
      </div>
      <div className="icons mt-5 sm:mt-0 max-sm:mt-4 md:mx-16">
      {/* <div className="mt-5 sm:mt-0 max-sm:mt-4"> */}

        <h1 className="font-bold text-white">Follow Us</h1>
        <div className="text-white flex gap-5 p-4 max-sm:justify-center">
          <a href="">
            <FacebookIcon className="text-md" />
          </a>

          <a href="">
            <InstagramIcon className="text-md" />
          </a>

          <a href="">
            <WhatsAppIcon className="text-md" />
          </a>

          <a href="">
            <XIcon className="text-md" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
