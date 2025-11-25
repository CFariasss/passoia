import "./banner.scss";
import banner from "../../assets/banner.png";

function Banner() {
  return (
    <section className="banner-section">
      <img className="banner-img" src={banner} alt="Banner" />
    </section>
  );
}

export default Banner;
