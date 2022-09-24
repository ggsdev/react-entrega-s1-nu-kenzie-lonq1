import { useState } from "react";
import { Card } from "../Card";
import noInfo from "../../assets/noTransactions.png";
import "./style.css";

export function List({ listTransactions, setListTransactions }) {
    const [filterItem, setFilterItem] = useState("");

    const rendering = listTransactions.map((transaction, i) => {
        transaction.id = i;
        return (
            <Card
                style={
                    transaction.type === "Credit"
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
                    <button onClick={() => setFilterItem("")}>All</button>
                    <button onClick={() => setFilterItem("Credit")}>
                        Earnings
                    </button>
                    <button onClick={() => setFilterItem("Debit")}>
                        Expenses
                    </button>
                </div>
            </div>
            <ul className="main__list">
                {rendering.length > 0 ? (
                    rendering
                ) : (
                    <div>
                        <h2>You don't have any transactions yet</h2>
                        <img src={noInfo} alt="" />
                    </div>
                )}
            </ul>
        </aside>
    );
}
