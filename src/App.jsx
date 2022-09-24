import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { List } from "./components/List";
import { TotalMoney } from "./components/TotalMoney";

function App() {
    const [listTransactions, setListTransactions] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if (isLoggedIn) {
        return (
            <div className="App">
                <Header setIsLoggedIn={setIsLoggedIn} />
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
    } else {
        return (
            <div className="App">
                <Home setIsLoggedIn={setIsLoggedIn} />
            </div>
        );
    }
}

export default App;
