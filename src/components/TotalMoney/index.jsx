import { useState } from "react";
import "./style.css";

export function TotalMoney({ listTransactions }) {
    const total = listTransactions.reduce((acc, act) => {
        return acc + act.value;
    }, 0);

    return (
        <div className="amount__container">
            <div className="amount__info">
                <h3>Total Amount: </h3>
                <span>$ {total}</span>
            </div>

            <p>The amount refers to the balance</p>
        </div>
    );
}
