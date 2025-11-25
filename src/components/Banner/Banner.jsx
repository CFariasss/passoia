import "./Banner.scss";
import banner from "../../assets/Banner.png";

function Banner() {
  return (
    <section className="banner-section">
      <img className="banner-img" src={banner} alt="Banner" />
    </section>
  );
}

export default Banner;
