const ShowCase = () => {
  return (
    <div className="w-full p-8">
      <iframe
        height="315"
        src="https://www.youtube.com/embed/PdJq-dAQr-Y?si=zsf3fM08HGHexJtM&autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-xl w-5/6 mx-auto"
      ></iframe>
    </div>
  );
};

export default ShowCase;
