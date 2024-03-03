import Card from "../../assets/images/service_card_photo.jpg";
import VerticalCard from "../../assets/images/vertical_card_1_banya.jpg";
import BathHouse from "../../assets/images/bathhouse_services.jpg";
import Bedroom from "../../assets/images/bedroom.jpg";
import Wood from "../../assets/images/dranka3.jpg"
import BathHouseService from "../../assets/images/home_9.jpg"
import LivingRoom from "../../assets/images/livingroom.jpg";
import Outside from "../../assets/images/outside.jpeg";
import {HashLink} from "react-router-hash-link";
function Services() {
    return (
        <section className="services" id={"service"}>
            <div className="services__container">
            <div className="services__title-container">
                <h3 className="services__title">НАШИ УСЛУГИ</h3>
                <p className="services__subtitle">Мы&nbsp;предлагаем Вам полный комплекс услуг
                    строительство сруба из&nbsp;сухостойной сосны, от&nbsp;индивидуального архитектурного проектирования до&nbsp;внутренней отделки.</p>
            </div>
            <div className="services__cards">
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">РАЗРАБОТКА ПРОЕКТА</p>
                        <p className="card__subtitle">Разработаем проект по&nbsp;вашим чертежам или предложим индивидуальный проект от&nbsp;наших специалистов</p>
                        <HashLink to={"#contact"} smooth className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</HashLink>
                    </div>
                    <img className="card__img" src={Card}/>
                </div>
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">изготовление срубов kelo</p>
                        <p className="card__subtitle">Сухостойные деревья подбирают индивидуально, обращая внимание на&nbsp;толщину ствола и&nbsp;его внешний вид.</p>
                        <HashLink to={"#contact"} smooth className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</HashLink>
                    </div>
                    <img className="card__img" src={BathHouseService} alt={"Изображение бани"}/>
                </div>
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">строим дома и бани под ключ</p>
                        <p className="card__subtitle">Мы&nbsp;предлагаем отделку дома в&nbsp;разном стиле, оригинальные изделия для интерьера. Работы начинаются с&nbsp;создания дизайн проекта и&nbsp;заканчиваются расстановкой всей мебели.</p>
                        <HashLink to={"#contact"} smooth className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</HashLink>
                    </div>
                    <img className="card__img" src={BathHouse} alt={"Изображение бани внутри"}/>
                </div>
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">пиломатериалы на заказ</p>
                        <p className="card__subtitle">Предлагаем высококачественный материал из&nbsp;Карелии, где суровый климат делает древесину еще прочнее. Доски из&nbsp;сухостоя отличаются прочностью и&nbsp;долговечностью</p>
                        <HashLink to={"#contact"} smooth className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</HashLink>
                    </div>
                    <img className="card__img" src={Wood} alt="Изображение пиломатериалов"/>
                </div>
            </div>
            <div className="services__additional">
                <div className="services__additional-container">
                    <p className="services__title">ДОПОЛНИТЕЛЬНО</p>
                    <p className="services__subtitle">Также вы можете воспользоваться дополнительными услугами нашей компании</p>
                </div>
                <div className="services__gallery">
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={VerticalCard}/>
                        <p className="vertical-card__title">3D-ВИЗУАЛИЗАЦИЯ ДОМОВ И БАНЬ</p>
                        <p className="vertical-card__subtitle">Разработка 3D модели дома по нашему проекту</p>
                        {/*<button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>*/}
                    </div>
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={Bedroom}/>
                        <p className="vertical-card__title">ДИЗАЙН ИНТЕРЬЕР</p>
                        <p className="vertical-card__subtitle">Разработка дизайна по вашим предпочтениям</p>
                        {/*<button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>*/}
                    </div>
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={LivingRoom}/>
                        <p className="vertical-card__title">ДЕКОРИРОВАНИЕ ПРОСТРАНСТВА</p>
                        <p className="vertical-card__subtitle">Подборка материалов от мебели до светильников</p>
                        {/*<button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>*/}
                    </div>
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={Outside}/>
                        <p className="vertical-card__title">ЛАНДШАФТНЫЙ ДИЗАЙН</p>
                        <p className="vertical-card__subtitle">Разработка концепта и создание ландшафтного дизайна</p>
                        {/*<button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>*/}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Services;