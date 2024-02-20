
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p>&copy; 2024 Music Online</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-400">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
