import React from "react";
import {Link} from "react-router-dom";
import {HashLink as HashLink} from "react-router-hash-link";
import {useResize} from "../../utils/UseResize.jsx";

function Navigation() {
    const {width} = useResize()
    return (
        <div className="navigation">
            <HashLink to={"/#"} smooth className="navigation__link navigation__border">ГЛАВНАЯ</HashLink>
            {width > 764 && (
                <>
                <HashLink to={"/#about-us"} className="navigation__link" smooth>О НАС</HashLink>
                <HashLink to={"/#service"} className="navigation__link" smooth>УСЛУГИ</HashLink>
                <HashLink to={"/#price"} className="navigation__link" smooth>ПРАЙС</HashLink>
                </>
            )}

            <HashLink to={"/gallery/#"} smooth className="navigation__link">ГАЛЕРЕЯ</HashLink>

            {width > 764 && (
                <>
                    <HashLink to={"#contact"} className="navigation__link" smooth>КОНТАКТЫ</HashLink>
                </>
            )}

        </div>
    )
}

export default Navigation;