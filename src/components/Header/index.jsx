import logo from "../../assets/NuKenzie.png";
import "./style.css";

export function Header() {
    return (
        <header className="header__container">
            <div className="header__div">
                <img src={logo} alt="" />
                <button>Home</button>
            </div>
        </header>
    );
}
