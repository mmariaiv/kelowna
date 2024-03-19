import {HashLink} from "react-router-hash-link";

import Cover from "../../assets/images/price_cover.jpg";
import BathHouse from "../../assets/images/bathhouse_price.png"
import InsidePrice from "../../assets/images/inside_price.jpg";
const typeOfService = [
    "фундамент", "коробка здания", "перекрытия", "кровля утепленная", "фасадные работы", "остекление", "система электроснабжения", "система водоснабжения", "отопление", "внутренняя отделка",
]


function Prices() {
    return (
        <section className="prices" id={"price"}>
           <div className="prices__title-container">
               <h2 className="prices__title">ЦЕНЫ НА СТРОИТЕЛЬСТВО</h2>
               <p className="prices__subtitle">Свяжитесь с нами и рассчитайте полную стоимость постройки вашего проекта!</p>
           </div>
            <div className="prices__carousel">
                <div className="price-container">
                    <div className="price-containter__header">
                        <img className="price-container__cover" src={Cover} alt="Обложка цены"/>
                        <div className="price-container__icon"></div>
                        <p className="price-container__title">строительство дома</p>
                    </div>
                    <div className="price-container__price">
                        <p className="price-container__price-text">55 000 ₽/кв.м</p>
                    </div>
                    <div className="price-container__additional">
                        {typeOfService.map((type, key) => {
                            return (
                                <p key={key} className="price-container__service">{type}</p>
                            )
                        })}
                    </div>
                    <HashLink to={"#contact"} smooth className="home-advert__btn-link price-container__btn">ЗАКАЗАТЬ ПРОЕКТ</HashLink>
                </div>
                <div className="price-container">
                    <div className="price-containter__header">
                        <img className="price-container__cover" src={BathHouse} alt="Обложка цены"/>
                        <div className="price-container__icon price-container__icon_bathhouse">
                        </div>
                        <p className="price-container__title">строительство бани</p>
                    </div>
                    <div className="price-container__price">
                        <p className="price-container__price-text">52 000 ₽/кв.м</p>
                    </div>
                    <div className="price-container__additional">
                        {typeOfService.map((type, key) => {
                            return (
                                <p key={key} className="price-container__service">{type}</p>
                            )
                        })}
                    </div>
                    <HashLink to={"#contact"} smooth className="home-advert__btn-link price-container__btn">ЗАКАЗАТЬ ПРОЕКТ</HashLink>
                </div>
                <div className="price-container">
                    <div className="price-containter__header">
                        <img className="price-container__cover" src={InsidePrice} alt="Обложка цены"/>
                        <div className="price-container__icon price-container__icon_key"></div>
                        <p className="price-container__title">строительство под ключ</p>
                    </div>
                    <div className="price-container__price">
                        <p className="price-container__price-text">80 000 ₽/кв.м</p>
                    </div>
                    <div className="price-container__additional">
                        {typeOfService.map((type, key) => {
                            return (
                                <p key={key} className="price-container__service">{type}</p>
                            )
                        })}
                    </div>
                    <HashLink to={"#contact"} smooth className="home-advert__btn-link price-container__btn">ЗАКАЗАТЬ ПРОЕКТ</HashLink>
                </div>
            </div>
        </section>
    )
}

export default Prices;