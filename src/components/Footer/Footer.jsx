import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 shadow dark:bg-gray-900 w-full mt-5">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              className="h-8"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              漫畫平台
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-200">
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-full" />
        <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">
          © 2024 Comic
        </span>
      </div>
    </footer>
  );
};

export default Footer;
