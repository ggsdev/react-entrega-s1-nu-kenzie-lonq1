function TotalMoney({ listTransactions }) {
    const total = listTransactions.reduce((acc, act) => {
        return acc + act.value;
    }, 0);
}
