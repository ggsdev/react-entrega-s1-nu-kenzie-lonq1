import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

function App() {
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 },
    ]);

    return (
        <div className="App">
            <Header />
            <Form />
        </div>
    );
}

export default App;
