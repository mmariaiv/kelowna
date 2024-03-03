import HomeAdvertCover from "../../assets/images/home_advert.jpg";
function HomeAdvert() {
    return (
        <section className="home-advert">

            <div className="home-advert__container">
                <div className="home-advert__description">
                    <div className="home-advert__description-container">
                        <h3 className="home-advert__title">СУХОСТОЙНАЯ&nbsp;
                            <span className="home-advert__span">СОСНА КЕЛО</span>
                        </h3>
                        <p className="home-advert__subtitle">Только истинные ценители качественных эко материалов
                            выбирают дом из КЕЛО.
                        </p>
                        <p className="home-advert__subtitle">Хотите построить идеальный экологически чистый дом с
                            ароматом леса? Звоните нам!</p>
                    </div>
                    <div className="home-advert__btn-container">
                        <button className="home-advert__btn-link home-advert__btn-link_m">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</button>
                    </div>
                </div>
                <img className="home-advert__img" src={HomeAdvertCover} alt="Изображение дома из ОЙ-ПУ"/>
            </div>
        </section>
    )
}

export default HomeAdvert;