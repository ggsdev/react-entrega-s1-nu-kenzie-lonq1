import { useState } from "react";

export function Form(listTransactions, setListTransactions) {
    const [descriptionInput, setDescriptionInput] = useState("");
    const [amountInput, setAmountInput] = useState("");
    const [typeSelect, setTypeSelect] = useState("");

    return (
        <form className="form__container">
            <div className="description__container">
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    placeholder="Type your description"
                    type="text"
                    value={descriptionInput}
                    onChange={(event) =>
                        setDescriptionInput(event.target.value)
                    }
                />
                <span>Ex: Buy clothes</span>
            </div>

            <div className="amount__container">
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    placeholder="Amount"
                    type="text"
                    value={amountInput}
                    onChange={(event) => {
                        setAmountInput(event.target.value);
                    }}
                />
                <select
                    value={typeSelect}
                    onChange={(event) => setTypeSelect(event.target.value)}
                    name=""
                    id=""
                >
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                </select>
            </div>

            <button
                type="submit"
                onClick={(event) => {
                    event.preventDefault();
                }}
            >
                Submit amount
            </button>
            {console.log(descriptionInput, amountInput, typeSelect)}
        </form>
    );
}
