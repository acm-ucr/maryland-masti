import { FaSquareFacebook, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { links } from "@/data/links";

const Contact = () => {
  return (
    <div className="bg-masti-red-200 flex items-center justify-center py-4">
      <a href={links.facebook} target="_blank" rel="noreferrer">
        <FaSquareFacebook className="text-white text-8xl mx-4 hover:!text-masti-beige hover:cursor-pointer" />
      </a>
      <a href={`mailto:${links.email}`} target="_blank" rel="noreferrer">
        <FaEnvelope className="text-white text-8xl mx-4 hover:!text-masti-beige hover:cursor-pointer" />
      </a>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        <FaInstagram className="text-white text-8xl mx-4 hover:!text-masti-beige hover:cursor-pointer" />
      </a>
    </div>
  );
};

export default Contact;
