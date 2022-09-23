import { Card } from "../Card";
import "./style.css";

export function List({ listTransactions, setListTransactions }) {
    const rendering = listTransactions.map((transaction, i) => {
        transaction.id = i;
        return (
            <Card
                style={
                    transaction.type == "Credit"
                        ? { borderLeft: "6px solid #03B898" }
                        : { borderLeft: "6px solid var(--color-grey-4)" }
                }
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                id={i}
                transaction={transaction}
                key={i}
            />
        );
    });

    return (
        <aside className="main__aside">
            <div className="aside__header">
                <h2>Resumo financeiro</h2>
                <div className="header__buttons">
                    <button>All</button>
                    <button>Earnings</button>
                    <button>Expenses</button>
                </div>
            </div>
            <ul className="main__list">
                {rendering.length > 0 ? rendering : <h2>No info yet</h2>}
            </ul>
        </aside>
    );
}
