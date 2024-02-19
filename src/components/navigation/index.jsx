import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <Link to={"/"} className="navigation__link">HOME</Link>
            <Link to={"/about"} className="navigation__link">О НАС</Link>
            <Link to={"/"} className="navigation__link">УСЛУГИ</Link>
            <Link to={"/"} className="navigation__link">ПРАЙС</Link>
            <Link to={"/gallery"} className="navigation__link">ГАЛЕРЕЯ</Link>
            <Link to={"/"} className="navigation__link">КОМПЛЕКС УСЛУГ</Link>
            <Link to={"/"} className="navigation__link">КОНТАКТЫ</Link>
        </div>
    )
}

export default Navigation;