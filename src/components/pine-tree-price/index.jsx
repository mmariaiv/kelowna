import React from "react";
function PineTreePrice() {
    const [chevronClicked, isChevronClicked] = React.useState(false);

    function handleAccordionClick(evt) {
        // isChevronClicked(current => !current);
        if (evt.currentTarget.querySelector(".accordion__arrow-icon").classList.contains("accordion__arrow-icon_on")) {
            evt.currentTarget.querySelector(".accordion__arrow-icon").classList.remove("accordion__arrow-icon_on")
        } else {

            evt.currentTarget.querySelector(".accordion__arrow-icon").classList.add("accordion__arrow-icon_on")
        }

    }
    return (
        <section className="pinetree">
            <h3 className="pinetree__title">цены на сухую необрезную доску</h3>
            <div className="pinetree__accordion">
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">доска из кело</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__price accordion__price_single">от 800 р/кв.м</p>
                        </li>
                    </ul>
                </details>
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">липа башкирская</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 20мм</p>
                            <p className="accordion__price">1.500 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (Экстра) 20мм</p>
                            <p className="accordion__price">2.500 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (АВ) 25 мм</p>
                            <p className="accordion__price">1800 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (Экстра) 20мм</p>
                            <p className="accordion__price">3000 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (АВ) 45 мм</p>
                            <p className="accordion__price">3500 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (Экстра) 45мм</p>
                            <p className="accordion__price">6000 р/кв.м</p>
                        </li>
                    </ul>
                </details>
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">чёрная ольха башкирская</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 25мм</p>
                            <p className="accordion__price">1.700 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (Экстра) 25мм</p>
                            <p className="accordion__price">3000 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 45мм</p>
                            <p className="accordion__price">3500 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (Экстра) 45мм</p>
                            <p className="accordion__price">6000 р/кв.м</p>
                        </li>
                    </ul>
                </details>
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">кедр сибирский</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 25мм</p>
                            <p className="accordion__price">2000 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 45мм</p>
                            <p className="accordion__price">5000 р/кв.м</p>
                        </li>
                    </ul>
                </details>
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">лиственница сибирская</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 25мм</p>
                            <p className="accordion__price">1700 р/кв.м</p>
                        </li>
                        <li className="accordion__details">
                            <p className="accordion__title">Класс (AB) 45мм</p>
                            <p className="accordion__price">3500 р/кв.м</p>
                        </li>
                    </ul>
                </details>
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">сосна/ёлка архангельская</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__title">Класс А/В (естественной влажности)</p>
                            <p className="accordion__price">от 16.000 р/куб.м</p>
                        </li>
                    </ul>
                </details>
                <details className="accordion">
                    <summary className="accordion__summary" onClick={handleAccordionClick}>
                        <div className="accordion__summary-container">
                            <p className="accordion__summary-title">липовый горбыль</p>
                            <div
                                className={`accordion__arrow-icon ${chevronClicked && `accordion__arrow-icon_on`}`}></div>
                        </div>
                    </summary>
                    <ul className="accordion__item">
                        <li className="accordion__details">
                            <p className="accordion__title">Толщина 40-80мм</p>
                            <p className="accordion__price">2500 р/кв.м</p>
                        </li>
                    </ul>
                </details>

            </div>
            <div className="pinetee__result">
            </div>
        </section>
    )
}

export default PineTreePrice;