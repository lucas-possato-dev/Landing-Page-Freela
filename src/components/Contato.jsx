import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contato = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const message = formData.get("message");
    if (message.length >= 10) {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setMessageSent(true);
        setShowError(false);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
        toast.success("Mensagem enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      setMessageSent(true);
      setShowError(true);
      toast.error("A mensagem é muito curta.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-500 to-slate-900 p-8 rounded-xl anime">
      <form
        method="POST"
        action="https://getform.io/f/64497ffb-b45c-4e6b-a7de-338c16debc4b"
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline uppercase text-orange-300">
            Não adie mais a realização do seu sonho.
          </p>
          <p className="text-slate-100 py-4 text-xl">
            Preencha o formulário abaixo e entre em contato.
          </p>
          <div className="border-b-4 border-orange-300 w-[100px]" />
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-lg outline-none"
          type="text"
          placeholder="Nome"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-lg outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-lg outline-none"
          name="message"
          placeholder="Sua mensagem"
          rows="8"
        ></textarea>
        <button className="text-white border-2 hover:bg-orange-300 hover:border-orange-300 px-4 py-3 my-8 mx-auto flex items-center">
          Entre em Contato
        </button>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/carlapossatoswell/?igshid=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fa-brands fa-instagram fa-xl"
              style={{ color: "#ffffff", cursor: "pointer" }}
            ></i>
          </a>

          <a
            href="https://www.facebook.com/carla.possato?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              class="fa-brands fa-facebook-f fa-xl"
              style={{ color: "#ffffff", cursor: "pointer" }}
            ></i>
          </a>
        </div>

        {messageSent && <ToastContainer />}
      </form>
    </div>
  );
};

export default Contato;
