import "./Footer.css";
import gainaxLogo from "../assets/images/Gainax Logo.png";

function Footer () {

    return (
        <section>
            <footer>
                <span>&copy;</span> <img className="footerGainaxLogo" src={gainaxLogo} alt="The Gainax Logo" ></img> | | Site by <a href="https://deontaewills.netlify.app" target="_blank">Deontae Wills</a>
            </footer>
        </section>
    )
}

export default Footer;