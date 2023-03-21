import { earthIcon, upArrow, ChoicesIcon } from "../../../assets/icons";

const Footer = () => {
  return (
    <footer className="hidden sm:flex justify-between items-center flex-wrap px-12 py-3 w-full border-t border-gray-200 bg-white sticky bottom-0 font-light text-[15px]">
      <div className="flex gap-1 flex-wrap">
        <p>&copy; 2023 Airbnb, Inc.</p>
        <span className="px-1">.</span>
        <a href="./">Terms</a>
        <span className="px-1">.</span>
        <a href="./">Sitemap</a>
        <span className="px-1 py-auto h-min">.</span>
        <a href="./">Privacy</a>
        <span className="px-1">.</span>
        <a href="./">
          <p>Your Privacy Choices</p>
        </a>
        <a href="./" className="flex items-center ml-1 border-none">
          <ChoicesIcon />
        </a>
        <span className="px-1">.</span>
        <a href="./">Destinations</a>
      </div>
      <div className="flex justify-end flex-wrap gap-3 font-medium">
        <a
          href="./"
          className="flex items-center justify-center gap-2 border-none"
        >
          <img className="w-4" src={earthIcon} alt="earth icon" />
        </a>
        <a href="./" className="flex items-center justify-center gap-2">
          <p>English (US)</p>
        </a>
        <a href="./">MAD</a>
        <a href="./" className="flex items-center justify-center gap-2">
          <p>Support & resources</p>
        </a>
        <a
          href="./"
          className="flex items-center justify-center gap-2 border-none"
        >
          <img className="w-4 pt-1" src={upArrow} alt="up arrow" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
