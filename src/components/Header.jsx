import logo from "../assets/logo2.png";

const Header = () => {
  return (
    <header className="relative h-[20vh]">
      <div className="h-full w-full flex justify-center items-center text-xl absolute bg-black bg-opacity-50">
        <div className="w-[1200px] relative anime">
          <div>
            <img
              className="w-[180px] mt-20 sm:mt-0 h-[180px] sm:w-[360px] sm:h-[360px] absolute top-[-150px] inline"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="absolute right-[0px]">
            <div>
              <h1 className="text-slate-100 text-[16px]">Entre em contato</h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1 className="text-orange-300">(21) 96496-2886</h1>

              <div>
                <a
                  href="https://wa.me/5521964962886"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    class="fa fa-whatsapp fa-lg"
                    aria-hidden="true"
                    style={{ color: "#4cd34a" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
