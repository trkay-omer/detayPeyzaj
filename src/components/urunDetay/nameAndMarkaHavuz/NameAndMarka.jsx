import "./NameAndMarka.scss";
import data from "../../../data.json";

const NameAndMarka = ({ marka, name, desc }) => {
  return (
    <div className="nameAndMarka">
      <span className="marka">{marka}</span>
      <h2 className="name">{name}</h2>

      <div className="textHAvuz">
        <p>{desc}</p>

        <p>
          <span>Adres:</span> {data.adres}
        </p>
      </div>

      <div className="buttons">
        <div className="sepeteEkle">
          <a href={data.adres_linki} target="_blank" className="btnSepet">
            Yol Tarifi Al
          </a>
          <a
            href={data.whatsapp_linki}
            target="_blank"
            className="btnSepet green"
          >
            Whatsapp Mesaj
          </a>
        </div>
      </div>
    </div>
  );
};

export default NameAndMarka;
