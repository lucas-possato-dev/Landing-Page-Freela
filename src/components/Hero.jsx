import React from "react";
import Contato from "./Contato";
import Slider from "react-slick";
import { TypeAnimation } from "react-type-animation";
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";
import img6 from "../assets/6.jpeg";

const Hero = () => {
  const [slidesToShow, setSlidesToShow] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1000) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  return (
    <>
      <section className="w-full sm:h-[100vh] h-[165vh]  sm:mb-0 bg-black relative bg-opacity-50 p-4">
        <div className="max-w-[1200px] mx-auto justify-between flex flex-col sm:flex-row items-center h-full">
          <div className="w-full sm:w-1/2 sm:mb-32 anime">
            <h1 className="text-orange-300 text-7xl mb-2 font-bold uppercase">
              A sua casa
            </h1>
            <TypeAnimation
              className="text-orange-200 text-7xl mb-2 font-bold uppercase"
              sequence={["própria", 1000, "", 2000, "própria", 3000]}
              wrapper="span"
              speed={5}
              deletionSpeed={10}
              repeat={Infinity}
            />
            <h1 className="text-xl text-orange-200 ml-1 mb-2 font-thin">
              Encontre o lar perfeito para você
            </h1>
            <p className="text-slate-300 ml-1 text-2xl mb-12">
              Meu nome é <span className="text-orange-300">Carla Possato</span>,
              sou{" "}
              <span className="text-orange-300">consultora imobiliária</span> e
              tenho como principal objetivo ajudar pessoas a conquistarem a tão
              sonhada casa própria.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <Contato />
          </div>
        </div>
      </section>
      <section className="bg-slate-800 absolute sm:h-[65vh] h-[75vh] mb-12 w-full flex flex-col">
        <h1 className="text-3xl text-white text-center mt-12 mb-24">
          Subsídio de até R$ 47.500,00 através do Programa{" "}
          <span className="italic font-light text-orange-200">
            Minha Casa, Minha Vida.
          </span>
        </h1>
        <div className="w-8/12 mx-auto p-4">
          <Slider {...settings}>
            <div>
              <h3 className="text-center">
                <img
                  className="sm:h-[300px] sm:w-[300px] h-[200px] w-[250px] rounded-md shadow-md shadow-orange-300"
                  src={img1}
                  alt="Casa 5"
                />
              </h3>
            </div>
            <div>
              <h3 className="text-center">
                <img
                  className="sm:h-[300px] sm:w-[300px] h-[200px] w-[250px] rounded-md shadow-md shadow-orange-300"
                  src={img2}
                  alt="Casa 2"
                />
              </h3>
            </div>
            <div>
              <h3 className="text-center">
                <img
                  className="sm:h-[300px] sm:w-[300px] h-[200px] w-[250px] rounded-md shadow-md shadow-orange-300"
                  src={img3}
                  alt="Casa 3"
                />
              </h3>
            </div>
            <div>
              <h3 className="text-center">
                <img
                  className="sm:h-[300px] sm:w-[300px] h-[200px] w-[250px] rounded-md shadow-md shadow-orange-300"
                  src={img4}
                  alt="Casa 1"
                />
              </h3>
            </div>
            <div>
              <h3 className="text-center">
                <img
                  className="sm:h-[300px] sm:w-[300px] h-[200px] w-[250px] rounded-md shadow-md shadow-orange-300"
                  src={img5}
                  alt="Casa 6"
                />
              </h3>
            </div>
            <div>
              <h3 className="text-center">
                <img
                  className="sm:h-[300px] sm:w-[300px] h-[200px] w-[250px] rounded-md shadow-md shadow-orange-300"
                  src={img6}
                  alt="Casa 4"
                />
              </h3>
            </div>
          </Slider>
        </div>
        <footer className="h-60px w-full bg-slate-800 footer text-slate-600">
          <h1>&copy; Todos os direitos reservados.</h1>
        </footer>
      </section>
    </>
  );
};

export default Hero;
