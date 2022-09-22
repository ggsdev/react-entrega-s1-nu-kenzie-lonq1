import { useState } from "react";
import "./style.css";
export function Form({ addTransaction }) {
    const [descriptionInput, setDescriptionInput] = useState("");
    const [amountInput, setAmountInput] = useState("");
    const [typeSelect, setTypeSelect] = useState("");

    return (
        <form className="form__container">
            <div className="info__container info__container--description">
                <label htmlFor="description">Description</label>
                <div>
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
            </div>

            <div className="info__container info__container--amount">
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        placeholder="1"
                        value={amountInput}
                        onChange={(event) => {
                            setAmountInput(event.target.value);
                        }}
                    />
                    <span className="amount__sign">R$</span>
                </div>

                <div>
                    <label htmlFor="type">Type of amount</label>
                    <select
                        value={typeSelect}
                        onChange={(event) => setTypeSelect(event.target.value)}
                        name=""
                        id="type"
                    >
                        <option value="">Select</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </div>
            </div>

            <button
                type="submit"
                onClick={(event) => {
                    console.log(descriptionInput, amountInput, typeSelect);
                    event.preventDefault();
                }}
            >
                Submit amount
            </button>
        </form>
    );
}
