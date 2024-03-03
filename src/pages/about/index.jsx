import React from "react";
import KeloTree from "../../assets/images/kelo__tree.png"

function About() {
    return (
        <div className={"about"}>
            <section className={"about-factory"}>
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
                            <p className="about-factory__fact-title">собсвтенное производство</p>
                            <p className="about-factory__fact-description">Все срубы мы&nbsp;производим
                                на&nbsp;собственной производственной базе в&nbsp;Карелии. Наша компания обладает
                                необходимой техникой, оборудованием и&nbsp;инструментом для качественного изготовления
                                срубов, а&nbsp;так&nbsp;же отлаженной системой логистики для доставки и&nbsp;быстрой
                                сборки срубов.</p>
                        </div>
                    </div>
                    <img className="about-factory__img"/>
                </div>
            </section>
            <section className="materials">
                <img className="materials__img" src={KeloTree} alt={"Две фотографии дерева"}/>
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
        </div>
    )
}

export default About;