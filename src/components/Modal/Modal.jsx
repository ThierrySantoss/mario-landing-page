export function Modal({estadoModal ,setEstadoModal}) {
    
  return (
    <div className="bg-[#343432b3] fixed w-screen h-screen top-0 left-0">
      <div className="flex justify-center items-center flex-col h-screen rounded-[5px] gap-4">
        <span onClick={() => setEstadoModal(!estadoModal)} className="bg-[#ffffff] text-[#f03a17] font-bold text-2xl w-10 text-center cursor-pointer rounded-2xl hover:scale-105">X</span>
        <iframe className="w-[640px] h-[360px] max-[610px]:w-[500px] max-[610px]:h-[375px] max-[500px]:w-[300px] max-[500px]:h-[169px]"
          src="https://www.youtube.com/embed/Cb4WV4aXBpk"
          width={560}
          height={315}
          frameborder="1"
          title="Trailer oficial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
