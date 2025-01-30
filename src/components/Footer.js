import "./Footer.css";
import gainaxLogo from "../assets/images/Gainax Logo.png";

function Footer () {

    return (
        <section>
            <footer>
                <span>&copy;</span> <img className="footerGainaxLogo" src={gainaxLogo} alt="The Gainax Logo" ></img>
            </footer>
        </section>
    )
}

export default Footer;