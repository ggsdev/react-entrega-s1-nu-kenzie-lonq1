export function Card({ transaction }) {
    const { description, type, value } = transaction;

    return (
        <li>
            <div>
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            <div>
                <p>{value}</p>
            </div>
        </li>
    );
}
