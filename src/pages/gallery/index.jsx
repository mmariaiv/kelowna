import React from "react";
import Materal1 from "../../assets/images/material_1.jpg"
import Materal2 from "../../assets/images/material_2.jpg"
import Materal3 from "../../assets/images/material_3.jpg"
import Materal4 from "../../assets/images/material_4.jpg"

import Home1 from "../../assets/images/home_1.jpg"
import Home2 from "../../assets/images/home_2.jpg"
import Home3 from "../../assets/images/home_3.jpg"
import Home4 from "../../assets/images/home_4.jpg"
import Home5 from "../../assets/images/home_5.jpg"
import Home6 from "../../assets/images/home_6.jpg"
import Home7 from "../../assets/images/home_7.jpg"
import Home8 from "../../assets/images/home_8.jpg"
import Home9 from "../../assets/images/home_9.jpg"
import Home10 from "../../assets/images/home_10.jpg"
import Home11 from "../../assets/images/home_11.jpg"
import Home12 from "../../assets/images/home_12.jpeg"

import Design1 from "../../assets/images/design_1.jpg"
import Design2 from "../../assets/images/design_2.jpg"
import Design3 from "../../assets/images/design_3.jpg"
import Design4 from "../../assets/images/design_4.jpg"
import Design5 from "../../assets/images/design_5.jpg"
import Design6 from "../../assets/images/design_6.jpg"
import Design7 from "../../assets/images/design_7.jpg"
import Design8 from "../../assets/images/design_8.jpg"
import Design9 from "../../assets/images/design_9.jpeg"
import Design10 from "../../assets/images/design_10.jpg"
import Design11 from "../../assets/images/design_11.jpg"
import Design12 from "../../assets/images/design_12.jpg"
import Design13 from "../../assets/images/design_13.jpg"
import Design14 from "../../assets/images/design_14.jpg"
import Design15 from "../../assets/images/design_15.jpg"

import Dranka1 from "../../assets/images/dranka1.jpg"
import Dranka2 from "../../assets/images/dranka2.jpg"
import Dranka3 from "../../assets/images/dranka3.jpg"
import UpButton from "../../components/up-button/index.jsx";

function Gallery() {
    return (
        <div className="gallery" id={"#"}>
            <div className="gallery__cover">
                <div className="gallery__blur"></div>
                <div className="gallery__description">
                    <h2 className={"gallery__title"}>Галерея</h2>
                    <p className={"gallery__subtitle"}>Здесь представлены фотографии готовых объектов, а&nbsp;также их&nbsp;этапы строительства, чтобы вы&nbsp;могли оценить качество нашей работы и&nbsp;найти вдохновение для своего проекта.</p>
                </div>

            </div>

            <section className="gallery__items">
                <div className={"items--container"}>
                    <h3 className="items__title">ВЫСОКОКАЧЕСТВЕННЫЕ ПИЛОМАТЕРИАЛЫ ДЛЯ ЗАГОРОДНОГО ДОМА ИЛИ
                        БАНИ </h3>
                    <div className="items">
                        <img className="gallery__item" src={Materal1}/>
                        <img className="gallery__item" src={Materal2}/>
                        <img className="gallery__item" src={Materal3}/>
                        <img className="gallery__item" src={Materal4}/>
                    </div>
                </div>

                <div className={"items__container"}>
                    <h3 className="items__title">ДОМА И БАНИ РУЧНОЙ РУБКИ</h3>
                    <div className="items">
                        <img className="gallery__item" src={Home1}/>
                        <img className="gallery__item" src={Home2}/>
                        <img className="gallery__item" src={Home3}/>
                        <img className="gallery__item" src={Home4}/>
                        <img className="gallery__item" src={Home5}/>
                        <img className="gallery__item" src={Home6}/>
                        <img className="gallery__item" src={Home7}/>
                        <img className="gallery__item" src={Home8}/>
                        <img className="gallery__item" src={Home9}/>
                        <img className="gallery__item" src={Home10}/>
                        <img className="gallery__item" src={Home11}/>
                        <img className="gallery__item" src={Home12}/>
                    </div>
                </div>

                <div className={"items__container"}>
                    <h3 className="items__title">ДИЗАЙНЕРСКИЕ РЕШЕНИЯ,
                        СОЗДАЮЩИЕ АТМОСФЕРУ</h3>
                    <div className="items">
                        <img className="gallery__item" src={Design1} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design2} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design3} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design4} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design5} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design6} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design7} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design8} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design9} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design10} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design11} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design12} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design13} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design14} alt={"Изображение дизайна дома"}/>
                        <img className="gallery__item" src={Design15} alt={"Изображение дизайна дома"}/>

                    </div>
                </div>

                <div className={"items__container"}>
                    <h3 className="items__title">дранка кровельная из лиственницы </h3>
                    <div className="items">
                        <img className="gallery__item" src={Dranka1} alt={"Дранка кровельная изображение"}/>
                        <img className="gallery__item" src={Dranka2} alt={"Дранка кровельная изображение"}/>
                        <img className="gallery__item" src={Dranka3} alt={"Дранка кровельная изображение"}/>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Gallery;