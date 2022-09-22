import trashBin from "../../assets/trash.png";
import "./style.css";

export function Card({ transaction }) {
    const { description, type, value } = transaction;

    return (
        <li className="list__card">
            <div className="card__description">
                <h3>{description}</h3>
                <span>{type}</span>
            </div>
            <div className="card__value">
                <p>R$ {value}</p>
                <button>
                    <img src={trashBin} alt="Remove transaction" />
                </button>
            </div>
        </li>
    );
}
