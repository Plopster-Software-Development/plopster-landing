import {
  discordBlack,
  facebook,
  instagram,
  logo_plp,
  telegram,
  twitter,
} from "../assets";

const Footer = () => {
  return (
    <div className="relative true pt-11 pb-6 px-5 lg:pt-[6.5rem] lg:px-7.5 lg:pb-12 xl:px-10">
      <div className="flex items-center justify-center h-[6.5rem] mb-6 border-b border-n-6 lg:justify-start">
        <a className="block w-[11.875rem] " href="/">
          <img
            alt="Plopster"
            // fetchpriority="high"
            width="190"
            height="40"
            decoding="async"
            data-nimg="1"
            src={logo_plp}
            // style="color: transparent;"
          />
        </a>
        <nav className="hidden lg:flex items-center justify-center ml-auto">
          <a
            className="px-12 py-8 font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1"
            href="#home"
          >
            Inicio
          </a>
          <a
            className="px-12 py-8 font-code text-xs font-semibold leading-5 uppercase text-n-1/50 transition-colors hover:text-n-1"
            href="#contact-us"
          >
            Contactanos
          </a>
        </nav>
      </div>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="hidden caption text-n-4 lg:block">
          © 2024 Plopster Software Development
        </div>
        <div className="flex justify-center -mx-4">
          <a
            className="flex items-center justify-center w-10 h-10 mx-4 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="#"
            target="_blank"
          >
            <img
              alt="Discord"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="inline-block align-top transition-opacity opacity-100 undefined"
              src={discordBlack}
              //   style="color: transparent;"
            />
          </a>
          <a
            className="flex items-center justify-center w-10 h-10 mx-4 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="#"
            target="_blank"
          >
            <img
              alt="Twitter"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="inline-block align-top  transition-opacity opacity-100 undefined"
              src={twitter}
              //   style="color: transparent;"
            />
          </a>
          <a
            className="flex items-center justify-center w-10 h-10 mx-4 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="#"
            target="_blank"
          >
            <img
              alt="Instagram"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="inline-block align-top transition-opacity opacity-100 undefined"
              src={instagram}
              //   style="color: transparent;"
            />
          </a>
          <a
            className="flex items-center justify-center w-10 h-10 mx-4 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="#"
            target="_blank"
          >
            <img
              alt="Telegram"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="inline-block align-top transition-opacity opacity-100 undefined"
              src={telegram}
              //   style="color: transparent;"
            />
          </a>
          <a
            className="flex items-center justify-center w-10 h-10 mx-4 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            href="#"
            target="_blank"
          >
            <img
              alt="Facebook"
              loading="lazy"
              width="16"
              height="16"
              decoding="async"
              data-nimg="1"
              className="inline-block align-top transition-opacity opacity-100 undefined"
              src={facebook}
              //   style="color: transparent;"
            />
          </a>
        </div>
      </div>
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"></div>
      <div className="hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 undefined pointer-events-none lg:block xl:left-10 right-10"></div>
      <svg
        className="hidden absolute -top-[0.3125rem] left-[1.5625rem] undefined pointer-events-none lg:block xl:left-[2.1875rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        ></path>
      </svg>
      <svg
        className="hidden absolute  -top-[0.3125rem] right-[1.5625rem] undefined pointer-events-none lg:block xl:right-[2.1875rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
