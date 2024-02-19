import React from "react";
import {useFormWithValidation} from "../../utils/UseFormWithValidation.jsx";


function Footer() {
    const { values, handleChange, errors, isValid, resetForm } =
        useFormWithValidation();

    function handleSubmitForm(e) {
        e.preventDefault();
        console.log(e);
    }

    React.useEffect(() => {
        resetForm();
    }, [resetForm])
    return (
        <div className="footer">
            <div className="contacts">
                <div className="contacts__text-container">
                    <h3 className="contacts__title">Свяжитесь прямо сейчас!</h3>
                    <p className="contacts__subtitle">Обсудите все нюансы с&nbsp;нашей командой профессионалов! Мы&nbsp;ответим на&nbsp;любые ваши вопросы и&nbsp;создадим вместе Ваш дом мечты!</p>
                    <div className="contacts__details">
                        <p className="contacts__details-title">КОНТАКТЫ</p>
                        <div className="contacts__details-container">
                            <div className="contacts__image contacts__image_geo"></div>
                            <p className="contacts__text">Офис: Москва 127347, г.Москва, Дмитровское шоссе, д.96, к.4,
                                офис 3</p>
                        </div>
                        <div className="contacts__details-container">
                            <div className="contacts__image contacts__image_geo"></div>
                            <p className="contacts__text">Производство Республики Карелия: г.Петрозаводск, Ужесельга, ул.Центральная, д.69</p>
                        </div>
                        <div className="contacts__details-container">
                            <div className="contacts__image contacts__image_email"></div>
                            <p className="contacts__text">kelowna@list.ru</p>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <p className="form__title">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</p>
                    <p className="form__subtitle">Оставьте контактные данные и мы свяжемся с вами в ближайшее время</p>
                    <form className="consultation" noValidate onSubmit={handleSubmitForm}>

                        <div className="form-input">
                            <input className="form-element-input" type="text" name="name"
                                   onChange={handleChange}/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="name">Имя</label>
                        </div>
                        <div className="form-input">
                            <input className="form-element-input" type="text" name="phone" onChange={handleChange}/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="phone">Телефон</label>
                        </div>
                        <div className="form-input">
                            <input className="form-element-input" type="email"
                                   name="email" onChange={handleChange}/>
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="email">E-mail</label>
                        </div>

                        <button type="submit" className="consultation__btn">ОТПРАВИТЬ ЗАЯВКУ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;