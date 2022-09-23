import { useState } from "react";
import "./style.css";
export function Form({ listTransactions, setListTransactions }) {
    const [descriptionInput, setDescriptionInput] = useState("");
    const [amountInput, setAmountInput] = useState("");
    const [typeSelect, setTypeSelect] = useState("");

    function handleSubmit() {
        setListTransactions([
            ...listTransactions,
            {
                description: descriptionInput,
                value: amountInput,
                type: typeSelect,
            },
        ]);
    }

    return (
        <form
            onSubmit={(event) => handleSubmit(event.preventDefault())}
            className="form__container"
        >
            <div className="info__container info__container--description">
                <label htmlFor="description">Description</label>
                <div>
                    <input
                        required
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
            </div>

            <div className="info__container info__container--amount">
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        required
                        id="amount"
                        placeholder="1"
                        value={+amountInput}
                        onChange={(event) => {
                            setAmountInput(event.target.value);
                        }}
                    />
                    <span className="amount__sign">R$</span>
                </div>

                <div>
                    <label htmlFor="type">Type</label>
                    <select
                        required
                        value={typeSelect}
                        onChange={(event) => setTypeSelect(event.target.value)}
                        name=""
                        id="type"
                    >
                        <option value="">Select</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>
            </div>

            <button type="submit">Add transaction</button>
        </form>
    );
}
