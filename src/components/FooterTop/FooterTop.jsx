import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import "./FooterTop.scss";
import data from "../../data.json";

const FooterTop = () => {
  return (
    <div className="dikkat">
      <div className="container dikkatItems">
        <div className="dikkatItem">
          <PhoneIcon fontSize="large" className="iconDikkat" />

          <div className="infoDikkat">
            <h3>Bizlere Ulaşın: {data.telefon}</h3>
            <p>
              Yukarıdaki telefon numarası ile gönül rahatlığıyla iletişim
              kurabilirsiniz.
            </p>
            <div>
              <a href={data.telefon_linki}>
                <button>Hemen Ara</button>
              </a>
            </div>
          </div>
        </div>

        <div className="dikkatItem">
          <MapIcon fontSize="large" className="iconDikkat" />

          <div className="infoDikkat">
            <h3>Adres İçin</h3>
            <p>{data.adres}</p>
            <div>
              <a target="_blank" href={data.adres_linki}>
                <button>Yol Tarifi Al</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
