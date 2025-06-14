import { Link } from "react-router-dom";
import "./SliderLeft.scss";
import data from "./dataSliderLeft.json";

const SliderLeft = () => {
  return (
    <div className="sliderLeft">
      {data.kategori.map((item, index) => (
        <Link key={`slider ${index + 1}`} to={item.to} className="child">
          <div className="img">
            <img src={item.img} alt="" />
          </div>
          <div className="textChild">
            <h3>{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SliderLeft;
