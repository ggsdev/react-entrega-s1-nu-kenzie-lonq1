import logo from "../../assets/NuKenzie.png";
import "./style.css";

export function Header({ setIsLoggedIn }) {
    return (
        <header className="header__container">
            <div className="header__div">
                <img src={logo} alt="" />
                <button onClick={() => setIsLoggedIn(false)}>Home</button>
            </div>
        </header>
    );
}
