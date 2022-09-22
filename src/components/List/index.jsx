import { Card } from "../Card";
import "./style.css";

export function List({ listTransactions }) {
    const rendering = listTransactions.map((transaction, i) => {
        return <Card transaction={transaction} key={i} />;
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
