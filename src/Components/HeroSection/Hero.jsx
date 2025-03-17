import Zodiac from "./Zodiac";

const Hero = () => {
  return (
    <section className=" hero-section">
      <Zodiac />

      <div className="video-section">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s1sSHoaW9u4?enablejsapi=1&rel=0&fs=0&origin=https://www.drikpanchang.com"
        //   src="https://www.youtube.com/embed/n8X4enw4o94"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <div className="breadcrumb-section">
        <img
          src="https://www.drikpanchang.com/images/icon/deepak/deepam.gif.pagespeed.ce.H0RitBz0ww.gif"
          alt="Diya"
          className="diya-icon"
        />
        <h1 className="main-heading">
          <span className="highlight">Month Panchang</span> for New Delhi, NCT,
          India
        </h1>

        <img
          src="https://www.drikpanchang.com/images/icon/deepak/deepam.gif.pagespeed.ce.H0RitBz0ww.gif"
          alt="Diya"
          className="diya-icon"
        />
      </div>
    </section>
  );
};

export default Hero;
