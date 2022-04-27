const Hero = ({ text }) => {
  return (
    <header className="bg-dark text-white p-s">
      <h1 type="heroText" class="heroText">
        {text}
      </h1>
    </header>
  );
};

export default Hero;
