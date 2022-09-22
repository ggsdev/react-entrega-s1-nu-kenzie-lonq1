import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";

function App() {
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
        { description: "Conta de luz", type: "saída", value: -150 },
    ]);

    function addTransaction(newTransaction) {
        setListTransactions([...listTransactions, newTransaction]);
    }
    return (
        <div className="App">
            <Header />
            <main className="main__container">
                <section className="main__section">
                    <Form addTransaction={addTransaction} />
                    <TotalMoney listTransactions={listTransactions} />
                </section>
                <List listTransactions={listTransactions} />
            </main>
        </div>
    );
}

export default App;
