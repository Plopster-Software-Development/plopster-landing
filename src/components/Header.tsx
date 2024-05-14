import { logo_plp } from "../assets";

const Header = () => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 
      border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 p-[1em]">
        <a className="block w-[12-rem] xl:mr-8" href="#hero">
          <img src={logo_plp} width={190} height={40} alt="Brainwave" />
        </a>

        <nav
          className={`flex fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 
          lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div
            className="relative z-2 flex flex-col items-center 
          justify-center m-auto lg:flex-row"
          ></div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
