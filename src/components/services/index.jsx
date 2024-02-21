import Card from "../../assets/images/service_card_photo.jpg";
import VerticalCard from "../../assets/images/vertical_card_1_banya.jpg";
function Services() {
    return (
        <section className="services">
            <div className="services__title-container">
                <h3 className="services__title">НАШИ УСЛУГИ</h3>
                <p className="services__subtitle">Мы&nbsp;предлагаем Вам полный комплекс услуг
                    строительство сруба из&nbsp;сухостойной сосны, от&nbsp;индивидуального архитектурного проектирования до&nbsp;внутренней отделки.</p>
            </div>
            <div className="services__cards">
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">РАЗРАБОТКА ПРОЕКТА</p>
                        <p className="card__subtitle">Разработаем проект по вашим чертежам или предложим индивидуальный
                            проект от наших специалистов</p>
                        <button className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <img className="card__img" src={Card}/>
                </div>
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">РАЗРАБОТКА ПРОЕКТА</p>
                        <p className="card__subtitle">Разработаем проект по вашим чертежам или предложим индивидуальный
                            проект от наших специалистов</p>
                        <button className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <img className="card__img" src={Card}/>
                </div>
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">РАЗРАБОТКА ПРОЕКТА</p>
                        <p className="card__subtitle">Разработаем проект по вашим чертежам или предложим индивидуальный
                            проект от наших специалистов</p>
                        <button className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <img className="card__img" src={Card}/>
                </div>
                <div className="card">
                    <div className="card__description">
                        <p className="card__title">РАЗРАБОТКА ПРОЕКТА</p>
                        <p className="card__subtitle">Разработаем проект по вашим чертежам или предложим индивидуальный
                            проект от наших специалистов</p>
                        <button className="card__consultation-btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <img className="card__img" src={Card} alt="Изображение дома"/>
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
                        <button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={VerticalCard}/>
                        <p className="vertical-card__title">3D-ВИЗУАЛИЗАЦИЯ ДОМОВ И БАНЬ</p>
                        <p className="vertical-card__subtitle">Разработка 3D модели дома по нашему проекту</p>
                        <button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={VerticalCard}/>
                        <p className="vertical-card__title">3D-ВИЗУАЛИЗАЦИЯ ДОМОВ И БАНЬ</p>
                        <p className="vertical-card__subtitle">Разработка 3D модели дома по нашему проекту</p>
                        <button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                    <div className="vertical-card">
                        <img className="vertical-card__img" src={VerticalCard}/>
                        <p className="vertical-card__title">3D-ВИЗУАЛИЗАЦИЯ ДОМОВ И БАНЬ</p>
                        <p className="vertical-card__subtitle">Разработка 3D модели дома по нашему проекту</p>
                        <button className="vertical-card__btn">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;