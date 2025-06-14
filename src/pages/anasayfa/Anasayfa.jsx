import "./Anasayfa.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import Loading from "../loading/Loading";
import Slider from "../../Kutuphanem/Slider/Slider";
import AnaProduct from "../../Kutuphanem/anaProduct/AnaProduct";
import PopulerProduct from "../../Kutuphanem/populerProduct/PopulerProduct";
import WhoFounder from "../../Kutuphanem/whoFounder/WhoFounder";
import WhyOur from "../../Kutuphanem/whyOur/WhyOur";
import SikcaSorulan from "../../Kutuphanem/sikcaSorulan/SikcaSorulan";
import FullImg from "../../Kutuphanem/fullImg/FullImg";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import SliderLeft from "../../Kutuphanem/sliderLeft/SliderLeft";

const Anasayfa = () => {
  const [projeler, setProjeler] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/post/small?page=0&size=7`
        );
        setProjeler(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setLoading(false);

        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const sections2 = [
    <PopulerProduct
      title={"Projelerimiz"}
      desc={"Tümü için projelerimiz sayfasına göz atın"}
      products={projeler}
    />,
    <WhoFounder />,
    <WhyOur loading={loading} />,
  ];

  return (
    <div className="anasayfa">
      <div className="topSideAnasayfa">
        <div className="container">
          <div className="topSideAnasayfaContent">
            <Slider loading={loading} />
            <SliderLeft />
          </div>
        </div>
      </div>
      <FadeInSection>
        <AnaProduct />
      </FadeInSection>
      <FullImg />
      {sections2.map((Section, index) => (
        <FadeInSection key={index}>{Section}</FadeInSection>
      ))}
      <div className="slider">
        <div className="slider-track">
          {Array.from({ length: 37 }, (_, index) => (
            <div key={index} className="slide">
              <img
                src={`/images/karePost/1 (${index + 1}).jpeg`}
                alt={"detay peyzaj"}
              />
            </div>
          ))}
        </div>
      </div>
      <SikcaSorulan />
    </div>
  );
};

export default Anasayfa;
