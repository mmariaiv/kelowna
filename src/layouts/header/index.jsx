import React from "react";
import Logo from "../../assets/images/logo.jpeg"
import Navigation from "../../components/navigation/index.jsx";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <HashLink to={"/#"} smooth><img src={Logo} className="logo" alt="logo"/></HashLink>
                <Navigation/>
                <div className="header__links">
                <Link to={"https://vk.com/kelowna1"} target="_blank" rel="noopener noreferrer" className="header__link-container header__link-container_vk"></Link>
                <Link to={"https://wa.me/79091527038?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20"} target="_blank" rel="noopener noreferrer" className="header__link-container  header__link-container_whatsapp"></Link>
            </div>
            </div>
        </div>
    )
}

export default Header;