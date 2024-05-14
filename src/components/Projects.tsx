import { mockup } from "../assets";
import Section from "./section";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Projects = () => {
  return (
    <Section className="overflow-hidden">
      <div className="container relative z-2">
        <div className="max-w-[50rem] mx-auto mb-12 md:text-center lg:mb-20 ">
          <div className="tagline flex items-center mb-4 md:justify-center ">
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 0.822266H1V12.8223H5"
                stroke="url(#brackets-left)"
              ></path>
              <defs>
                <linearGradient
                  id="brackets-left"
                  x1="50%"
                  x2="50%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#89F9E8"></stop>
                  <stop offset="100%" stopColor="#FACB7B"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="mx-3 text-n-3">Soluciones altamente efectivas</div>
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.98023e-08 0.822266H4V12.8223H-2.98023e-08"
                stroke="url(#brackets-right)"
              ></path>
              <defs>
                <linearGradient
                  id="brackets-right"
                  x1="14.635%"
                  x2="14.635%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#9099FC"></stop>
                  <stop offset="100%" stopColor="#D87CEE"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 className="h2">Lo que nuestros clientes dicen</h2>
        </div>
        <Splide aria-label="My Favorite Images">
          <SplideSlide className="flex justify-center">
            <div className="relative flex h-full p-4 rounded-t-xl overflow-hidden lg:w-[46.125rem]">
              <div className="absolute top-0 left-0 right-0 bottom-[3.25rem] border border-n-4/50 rounded-3xl"></div>
              <div className="absolute inset-px rounded-t-[1.4375rem] overflow-hidden">
                <div className="absolute -inset-0.25">
                  <img
                    alt="Jane Smith"
                    loading="lazy"
                    width="739"
                    height="472"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block align-top transition-opacity opacity-100 w-full h-full object-cover"
                    src={mockup}
                    //style="color: transparent;"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-n-8/50 to-n-8/0"></div>
              <div className="hidden relative z-1 md:flex flex-col flex-1 pt-12 px-4 pb-16">
                <div className="w-[12.75rem] h-10 mb-auto">
                  {/* <img
                    alt="Jane Smith"
                    loading="lazy"
                    width="204"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    className="inline-block align-top transition-opacity opacity-100 w-full h-full object-contain"
                    src={logo_plp}
                    // style="color: transparent;"
                  /> */}
                </div>
                <div className="h5">Jane Smith</div>
                <div className="h5 text-n-4">Shopee</div>
              </div>
              <div className="relative flex z-1 bg-conic-gradient p-0.25 rounded-2xl md:ml-auto">
                <div className="flex flex-col items-start p-8 bg-n-8 rounded-[0.9375rem] md:w-[21.75rem]">
                  <p className="quote mb-8">
                    I was blown away by the accuracy and speed of the AI chatbot
                    on Brainwave. It was able to understand my queries and
                    provide relevant recommendations in seconds.
                  </p>
                  <button
                    className="button relative inline-flex items-center justify-center h-11 px-7 text-n-1 transition-colors hover:text-color-1 mt-auto"
                    control-id="ControlID-45"
                  >
                    <span className="relative z-10">Visit link</span>
                    <svg
                      className="absolute top-0 left-0"
                      width="21"
                      height="44"
                      viewBox="0 0 21 44"
                    >
                      <path
                        fill="none"
                        stroke="url(#btn-left)"
                        stroke-width="2"
                        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
                      ></path>
                    </svg>
                    <svg
                      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
                      height="44"
                      viewBox="0 0 100 44"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <polygon
                        fill="url(#btn-top)"
                        fill-rule="nonzero"
                        points="100 42 100 44 0 44 0 42"
                      ></polygon>
                      <polygon
                        fill="url(#btn-bottom)"
                        fill-rule="nonzero"
                        points="100 0 100 2 0 2 0 0"
                      ></polygon>
                    </svg>
                    <svg
                      className="absolute top-0 right-0"
                      width="21"
                      height="44"
                      viewBox="0 0 21 44"
                    >
                      <path
                        fill="none"
                        stroke="url(#btn-right)"
                        stroke-width="2"
                        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>{" "}
          </SplideSlide>
          <SplideSlide>
            <img src="image2.jpg" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </div>
    </Section>
  );
};

export default Projects;
