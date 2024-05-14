import { mail } from "../assets";
import Section from "./section";

const ContactForm = () => {
  return (
    <Section className="flex overflow-hidden">
      <div className="container relative z-2 max-w-[68rem] m-auto lg:flex lg:justify-between">
        <div className="max-w-[32.875rem] mx-auto mb-12 text-center md:mb-16 lg:flex lg:flex-col lg:justify-around lg:max-w-[23.75rem] lg:m-0 lg:text-left">
          <h2 className="h2">Diligencia nuestro formulario de contacto</h2>
          <p className="hidden body-2 mt-4 text-n-4 md:block">
            Tan pronto envies el formulario nos estaremos contactando contigo en
            la mayor brevedad posible
          </p>
        </div>
        <form className="relative max-w-[23.5rem] mx-auto p-0.25 bg-conic-gradient rounded-3xl lg:flex-1 lg:max-w-[27.5rem] lg:m-0 xl:mr-12">
          <div className="px-9 py-10 bg-n-8 rounded-[1.4375rem] lg:px-16 lg:py-[3.25rem]">
            <div className="relative mb-4 lg:mb-5">
              <img
                alt="Nombre"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                src={mail}
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                placeholder="Nombre"
                type="text"
              />
            </div>
            <div className="relative mb-4 lg:mb-5">
              <img
                alt="Mail"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                src={mail}
                // style="color: transparent;"
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                placeholder="Correo Electronico"
                type="text"
              />
            </div>
            <div className="relative mb-4 lg:mb-5">
              <img
                alt="Mail"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                src={mail}
                // style="color: transparent;"
              />
              <input
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                placeholder="Numero Celular"
                type="text"
              />
            </div>

            <div className="relative mb-4 lg:mb-5">
              <img
                alt="Mail"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                className="inline-block align-top transition-opacity opacity-100 absolute top-4 left-0 w-6 pointer-events-none"
                src={mail}
              />
              <textarea
                name=""
                className="w-full h-14 pl-12 bg-transparent border-b border-n-1/15 font-light placeholder:text-n-4 outline-none transition-colors focus:border-n-1/30"
                placeholder="¡Cuentanos el motivo de tu consulta!"
              ></textarea>
            </div>
            <button
              className="button relative inline-flex items-center justify-center h-11 px-7 text-n-8 transition-colors hover:text-color-1 w-full"
              control-id="ControlID-31"
            >
              <span className="relative z-10">Enviar</span>
              <svg
                className="absolute top-0 left-0"
                width="21"
                height="44"
                viewBox="0 0 21 44"
              >
                <path
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                  d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                ></path>
              </svg>
              <svg
                className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                height="44"
                viewBox="0 0 100 44"
                preserveAspectRatio="none"
                fill="white"
              >
                <polygon
                  fill="white"
                  fill-rule="nonzero"
                  points="100 0 100 44 0 44 0 0"
                ></polygon>
              </svg>
              <svg
                className="absolute top-0 right-0"
                width="21"
                height="44"
                viewBox="0 0 21 44"
              >
                <path
                  fill="white"
                  stroke="white"
                  stroke-width="2"
                  d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden absolute top-6 -right-12 bottom-6 xl:flex">
            <div className="w-6 bg-[#1B1B2E] rounded-r-3xl"></div>
            <div className="w-6 my-12 bg-[#1B1B2E]/50 rounded-r-3xl"></div>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
