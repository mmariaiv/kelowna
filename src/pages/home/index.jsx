import React from "react";
import Cover from "../../assets/images/main_cover.png";
import Services from "../../components/services/index.jsx";
import HomeAdvert from "../../components/home-advert/index.jsx";
import Prices from "../../components/prices/index.jsx";
import PineTreePrice from "../../components/pine-tree-price/index.jsx";
import Projects from "../../components/projects/index.jsx";
import Inside from "../../assets/images/inside_main.png"
import Factory from "../../assets/images/factory.jpg"
import UpButton from "../../components/up-button/index.jsx";

function Home() {
    return (
        <main className="home" id={"#"}>
            <section className="cover">
                <img className="cover__img" src={Cover} alt="Обложка на главной странице"/>
                <div className="cover__container">
                    <div className="cover__title-container">
                        <h1 className="cover__title">УНИКАЛЬНЫЙ ДОМ ИЗ УНИКАЛЬНОГО МАТЕРИАЛА!</h1>
                        <h3 className="cover__subtitle">Проектируем и строим из сухостойной сосны КЕЛО</h3>
                    </div>
                    <div className="cover__facts-container">
                        <p className="cover__number">1000+</p>
                        <p className="cover__description">срубов из КЕЛО</p>
                    </div>
                </div>
            </section>
            <section className={"about-factory"} id={"about-us"}>
                <h2 className="about-factory__title">о нас</h2>
                <p className={"about-factory__description"}>Наш опыт отлично отражается в&nbsp;подходе, качестве
                    изготовления и&nbsp;сборке срубов для Российских клиентов. Качество нашей рубки и&nbsp;сборки высоко
                    оценили клиенты из&nbsp;Австрии, Германии, Финляндии и&nbsp;России.</p>
                <div className="about-factory__block">
                    <div className={"about-factory__container"}>
                        <div className="about-factory__item">
                            <p className="about-factory__fact-title">высокий профессионализм</p>
                            <p className="about-factory__fact-description">Мы&nbsp;специализируемся
                                на&nbsp;индивидуальном строительстве срубов домов и&nbsp;бань из&nbsp;таких пород
                                древесины как: карельская сосна kelo, кедр, лиственница, северная сосна.</p>
                        </div>
                        <div className="about-factory__item">
                            <p className="about-factory__fact-title">собственное производство</p>
                            <p className="about-factory__fact-description">Все срубы мы&nbsp;производим
                                на&nbsp;собственной производственной базе в&nbsp;Карелии. Наша компания обладает
                                необходимой техникой, оборудованием и&nbsp;инструментом для качественного изготовления
                                срубов, а&nbsp;так&nbsp;же отлаженной системой логистики для доставки и&nbsp;быстрой
                                сборки срубов.</p>
                        </div>
                    </div>
                    <img className="about-factory__img" src={Factory} alt={"Изображение производства"}/>
                </div>
            </section>
            <section className="materials">
                <img className="materials__img" src={Inside} alt={"Две фотографии дерева"}/>
                <div className="materials__description">
                    <h2 className="materials__title">только лучшие материалы</h2>
                    <div className="materials__about">
                        <p className="materials__about-title">строительство из лиственницы</p>
                        <p className={"materials__about-description"}>Содержит большое количество смол, которые
                            наполняют воздух полезными веществами. Обладает антисептическими свойствами. Не&nbsp;гниет
                            из-за воздействия воды, повышенная влажность еще больше укрепляет древесину.</p>
                    </div>
                    <div className="materials__about">
                        <p className="materials__about-title">СТРОИТЕЛЬСТВО ИЗ КЕДРА</p>
                        <p className={"materials__about-description"}>Обеспечивает максимальную теплозащиту. Обладает
                            высокой прочностью, стойкостью к&nbsp;гниению, деформации и&nbsp;паразитам. Выделяет
                            фитонциды, активирующие природные защитные силы организма.</p>
                    </div>
                    <div className="materials__about">
                        <p className="materials__about-title">СТРОИТЕЛЬСТВО ИЗ СОСНЫ КЕЛО</p>
                        <p className={"materials__about-description"}>Одинаковый диаметр бревна по&nbsp;всей длине.
                            Минимальное количество сучков. Стойкость к&nbsp;короедам и&nbsp;другим вредителям. Срок
                            службы&nbsp;&mdash; больше 100&nbsp;лет.</p>
                    </div>
                </div>
            </section>

            <Projects/>
            <Services/>
            <HomeAdvert/>
            <Prices/>
            <PineTreePrice/>

        </main>
    )
}

export default Home;