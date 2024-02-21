import React from "react";
import Cover from "../../assets/images/main_cover.png";
import Services from "../../components/services/index.jsx";

function Home() {
    return (
        <main className="home">
            <section className="cover">
                <img className="cover__img" src={Cover} alt="Обложка на главной странице"/>
                <div className="cover__container">
                <div className="cover__title-container">
                    <h2 className="cover__title">УНИКАЛЬНЫЙ ДОМ ИЗ УНИКАЛЬНОГО МАТЕРИАЛА!</h2>
                    <h3 className="cover__subtitle">Проектируем и строим из сухостойной сосны КЕЛО</h3>
                </div>
                <div className="cover__facts-container">
                    <p className="cover__number">1000+</p>
                    <p className="cover__description">срубов из КЕЛО</p>
                </div>
                </div>
            </section>


                <Services />

        </main>
    )
}

export default Home;