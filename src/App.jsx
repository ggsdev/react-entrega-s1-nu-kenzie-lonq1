import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";

function App() {
    const [listTransactions, setListTransactions] = useState([]);

    return (
        <div className="App">
            <Header />
            <main className="main__container">
                <section className="main__section">
                    <Form
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                    />
                    <TotalMoney listTransactions={listTransactions} />
                </section>
                <List
                    setListTransactions={setListTransactions}
                    listTransactions={listTransactions}
                />
            </main>
        </div>
    );
}

export default App;
