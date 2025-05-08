import "./App.css";
import Logo from "./assets/imagens/logo-chapeu-mario.png";
import Titulo from "./assets/imagens/titulo.png";
import ImagemMario from "./assets/imagens/super-mario-chars.png";
import VideoMario from "./assets/video/video-mario.mp4";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [estadoModal, setEstadoModal] = useState(false);

  return (
    <>
      <div className="absolute z-[-1] w-screen h-screen bg-black after:h-screen after:w-screen after:bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_50%,rgba(0,0,0,1)_100%)] after:absolute after:top-0 after:left-0">
        <video
          className="h-screen w-screen max-[825px]:hidden"
          src={VideoMario}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="font-poppins max-w-[1440px] m-auto">
        <header className="flex items-center justify-between px-8 py-10">
          <a href="#">
            <img className="size-16 max-[500px]:size-12" src={Logo} alt="Logo Chapéu Mario" />
          </a>
          <nav>
            <ul className="flex gap-10 max-[500px]:gap-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Detalhes</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="px-8 pb-8 flex items-center h-[calc(100vh-144px)] max-[1200px]:flex-wrap">
          <div>
            <img
              className="max-w-[500px] max-[1200px]:max-w-[300px]"
              src={Titulo}
              alt="Imagem do título do filme"
            />
            <p className="max-[1200px]:w-full text-[#a8abd7] w-4/5 text-[18px] my-8 max-[500px]:my-4">
              Em uma aventura épica e cheia de diversão, Super Mario Bros. traz
              a icônica franquia dos jogos para a vida real em uma animação
              vibrante e repleta de ação. Quando o Reino Cogumelo é ameaçado
              pelo terrível Bowser, que está em busca de um poder lendário,
              Mario e seu irmão Luigi são transportados para um mundo mágico e
              desconhecido. Separados em terras diferentes, Mario precisa
              embarcar em uma jornada para resgatar Luigi, fazer novos aliados –
              como a corajosa Princesa Peach e o divertido Toad – e enfrentar
              desafios incríveis para se tornar o herói que sempre sonhou ser.
            </p>
            <button
              onClick={() => setEstadoModal(!estadoModal)}
              className="hover:scale-105 duration-500 ease-in-out p-4 uppercase cursor-pointer text-[18px] font-bold bg-[#ff0021] text-[#ffffff]"
            >
              Veja o trailer
            </button>
          </div>
          <img className="max-[1200px]:w-1/2 m-auto max-[580px]:hidden" src={ImagemMario} alt="" />
          {estadoModal && (
            <Modal
              estadoModal={estadoModal}
              setEstadoModal={setEstadoModal}
            ></Modal>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
