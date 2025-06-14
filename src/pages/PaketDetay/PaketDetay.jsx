import "./PaketDetay.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SikcaSorulan from "../../Kutuphanem/sikcaSorulan/SikcaSorulan";
import Loading from "../loading/Loading";
import axios from "axios";
import { BASE_URL } from "../../config/api";
import MrGlide from "../../components/urunDetayGlide/MrGlide";
import NameAndMarka from "../../components/urunDetay/nameAndMarkaHavuz/NameAndMarka";

const PaketDetay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      try {
        const paketResponse = await axios.get(
          `${BASE_URL}/api/v1/post/get-by-id?id=${id}`
        );
        setProductDetail(paketResponse.data);
        setSelectedImage(paketResponse.data.coverImage?.filename);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleImageClick = (image) => {
    setSelectedImage(image.url); // Yeni resmi güncelle
  };

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div className="projeDetay">
      <div className="projectName">
        <img src={productDetail.coverImage?.filename} alt="" />
        <div className="container">
          <div className="bannerText">
            <div className="title">
              <h1>{productDetail.title}</h1>
            </div>
          </div>
        </div>

        <div className="background"></div>
      </div>

      <div className="container">
        <div className="tabletNamee">
          <h3>Paket Resimlerimiz</h3>
        </div>

        <div className="mainTop">
          <div className="mainSectionSide">
            <div className="product-gallery">
              <div className="single-img">
                <img src={selectedImage} alt="Selected Product" />
              </div>
              <div className="product-thump">
                <MrGlide
                  images={productDetail.images}
                  onImageClick={handleImageClick}
                />
              </div>
            </div>

            <div className="rightActionSide">
              <NameAndMarka
                marka={"Detay Peyzaj"}
                name={productDetail.title}
                desc={productDetail.titleContent}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <SikcaSorulan />
      </div>
    </div>
  );
};

export default PaketDetay;
