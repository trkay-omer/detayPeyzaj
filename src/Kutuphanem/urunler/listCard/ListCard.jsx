import { Link } from "react-router-dom";
import "./ListCard.scss";

const ListCard = ({ proje }) => {
  return (
    <Link to={`/projeler/${proje.id}`} className="projeCard">
      <div className="img">
        <img src={proje.coverImage} alt="" />
      </div>
      <div className="detayCard">
        <div className="desc">
          <div className="title">
            <h3>{proje.title}</h3>
          </div>
          <div className="text">
            <p>{proje.titleContent}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
