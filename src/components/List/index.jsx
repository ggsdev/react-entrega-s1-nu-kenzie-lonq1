import { useState } from "react";
import { Card } from "../Card";
import noInfo from "../../assets/noTransactions.png";
import "./style.css";

export function List({ listTransactions, setListTransactions }) {
    const [filterItem, setFilterItem] = useState("");
    const [buttonStyle1, setButtonStyle1] = useState([
        "var(--color-primary-1)",
        "#fff",
    ]);
    const [buttonStyle2, setButtonStyle2] = useState("");
    const [buttonStyle3, setButtonStyle3] = useState("");

    function render() {
        const rendering = listTransactions.map((transaction, i) => {
            transaction.id = i;
            return (
                <Card
                    style={
                        transaction.type === "Credit"
                            ? { borderLeft: "6px solid #03B898" }
                            : {
                                  borderLeft: "6px solid var(--color-grey-4)",
                              }
                    }
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                    id={i}
                    transaction={transaction}
                    key={i}
                />
            );
        });

        if (!filterItem) {
            return rendering;
        } else if (filterItem === "Credit") {
            return rendering.filter((transaction) => {
                const { type } = transaction.props.transaction;
                return type === "Credit";
            });
        } else {
            return rendering.filter((transaction) => {
                const { type } = transaction.props.transaction;
                return type === "Debit";
            });
        }
    }

    return (
        <aside className="main__aside">
            <div className="aside__header">
                <h2>Resumo financeiro</h2>
                <div className="header__buttons">
                    <button
                        style={{
                            backgroundColor: buttonStyle1[0],
                            color: buttonStyle1[1],
                        }}
                        onClick={() => {
                            setButtonStyle1(["var(--color-primary-1)", "#fff"]);
                            setButtonStyle2("");
                            setButtonStyle3("");
                            return setFilterItem("");
                        }}
                    >
                        All
                    </button>
                    <button
                        style={{
                            backgroundColor: buttonStyle2[0],
                            color: buttonStyle2[1],
                        }}
                        onClick={() => {
                            setButtonStyle1("");
                            setButtonStyle2(["var(--color-primary-1)", "#fff"]);
                            setButtonStyle3("");
                            return setFilterItem("Credit");
                        }}
                    >
                        Earnings
                    </button>
                    <button
                        style={{
                            backgroundColor: buttonStyle3[0],
                            color: buttonStyle3[1],
                        }}
                        onClick={() => {
                            setButtonStyle1("");
                            setButtonStyle2("");
                            setButtonStyle3(["var(--color-primary-1)", "#fff"]);
                            return setFilterItem("Debit");
                        }}
                    >
                        Expenses
                    </button>
                </div>
            </div>
            <ul className="main__list">
                {render().length > 0 ? (
                    render()
                ) : (
                    <div>
                        <h2>You don't have any transactions yet</h2>
                        <img src={noInfo} alt="Empty list template" />
                    </div>
                )}
            </ul>
        </aside>
    );
}
