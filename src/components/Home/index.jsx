import logo from "../../assets/NuKenzie2.png";
import landingImage from "../../assets/landingImg.png";
import "./style.css";
export function Home({ setIsLoggedIn }) {
    return (
        <div className="home__body">
            <div className="home__container">
                <div>
                    <img src={logo} alt="NuKenzie Logo" />
                    <h1>Control your finances better</h1>
                    <p>fast and safe</p>
                    <button onClick={() => setIsLoggedIn(true)}>Begin</button>
                </div>
                <img src={landingImage} alt="Landing Page Image" />
            </div>
        </div>
    );
}
