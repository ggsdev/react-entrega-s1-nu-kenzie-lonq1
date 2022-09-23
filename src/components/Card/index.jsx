import trashBin from "../../assets/trash.png";
import "./style.css";

export function Card({
    setListTransactions,
    listTransactions,
    transaction,
    id,
    style,
}) {
    const { description, type, value } = transaction;

    function removeTransaction(transactionId) {
        const filtering = listTransactions.filter((item) => {
            return item.id != transactionId;
        });

        setListTransactions(filtering);
    }

    return (
        <li style={style} className="list__card">
            <div className="card__description">
                <h3>{description}</h3>
                <span>{type}</span>
            </div>
            <div className="card__value">
                <p>R$ {value} </p>
                <button
                    id={id}
                    onClick={(event) => removeTransaction(event.target.id)}
                >
                    <img src={trashBin} alt="Remove transaction" />
                </button>
            </div>
        </li>
    );
}
