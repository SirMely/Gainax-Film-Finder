import "./Header.css";
import gainaxLogo from "../assets/images/Gainax Logo.png";


function Header() {
    return (
        <header>
            <img className="gainax-logo" src={gainaxLogo} alt="React Image" />
        </header>
    );
}

export default Header;
