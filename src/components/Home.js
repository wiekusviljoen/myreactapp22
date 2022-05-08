import Hero from "./Hero";
import Frogins from "./images/Frogins log.jpg";
const Home = () => {
  return (
    <>
      <Hero text="Welcome" />
      <h1>Hello world from react 2022</h1>
      <section className="main-container">
        <div className="image">
          <img src={Frogins} />;
        </div>
      </section>
      <div class="paragraphHome">
        Lorem slkfjalsjflakjflkslf lskfj laf lafjd lsjdf lsf kjsf
        lkdlajfsldkflks lalsdkf ks ldafj flkadsfl jslf slkdfj alkjdf als
      </div>
    </>
  );
};

export default Home;
