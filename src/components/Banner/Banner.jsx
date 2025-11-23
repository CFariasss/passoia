import "./Banner.scss";
import banner from "../../assets/Banner.png";

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Banner" className="banner-img" />
    </div>
  );
}
export default Banner;