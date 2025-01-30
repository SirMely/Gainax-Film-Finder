import "./Header.css";
import gainaxLogo from "../assets/images/Gainax Logo.png";


function Header() {
    return (
        <header>
            <img className="gainax-logo" src={gainaxLogo} alt="Gainax Logo" />
        </header>
    );
}

export default Header;
