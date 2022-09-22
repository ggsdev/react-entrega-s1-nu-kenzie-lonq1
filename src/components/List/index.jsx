import { Card } from "../Card";

export function List({ listTransactions }) {
    const rendering = listTransactions.map((transaction, i) => {
        return <Card transaction={transaction} key={i} />;
    });

    return <ul>{rendering}</ul>;
}
