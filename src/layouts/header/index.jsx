import React from "react";
import Logo from "../../assets/images/logo.jpeg"
import Navigation from "../../components/navigation/index.jsx";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
            <img src={Logo} className="logo" alt="logo"/>
            <Navigation />
            <div className="header__links">
                <div className="header__link-container header__link-container_vk"></div>
                <div className="header__link-container  header__link-container_whatsapp"></div>
            </div>
            </div>
        </div>
    )
}

export default Header;