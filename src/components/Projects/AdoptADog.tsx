const AdoptADog = () => {
  return (
    <>
      <a
        href="https://adopt-a-dog-frontend.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      />
      <div className="projectContainer">
        <h1 className="projectTitle">Adopt a Dog!</h1>
        <p className="projectDescription">
          A web application that allows users to adopt dogs from a shelter. The
          app includes features such as dog profiles, adoption forms, and a
          user-friendly interface.
        </p>
        <img
          src="/path/to/image.jpg"
          alt="Adopt a Dog"
          className="projectImage"
        />
      </div>
    </>
  );
};

export default AdoptADog;
