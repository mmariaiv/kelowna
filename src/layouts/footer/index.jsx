import React from "react";
import {useFormWithValidation} from "../../utils/UseFormWithValidation.jsx";
import {useResize} from "../../utils/UseResize.jsx";
import {Link} from "react-router-dom";
import {api} from "../../utils/api.jsx";


function Footer() {
    const [success, isSuccess] = React.useState(false);
    const [serverError, isServerError ] =React.useState(false);
    const [tooManyRequests, isTooManyRequests] = React.useState(false);
    const {width} = useResize()
    const { values, handleChange, errors, isValid, resetForm } =
        useFormWithValidation();

    function handleSubmitForm(e) {
        e.preventDefault();
        api.sendInfo(values.email, values.name, values.phone).then((data) => {
            if (data) {
                isSuccess(true)
                resetForm()
            }
        }).catch((err) => {
            if (err === 429) {
                isTooManyRequests(true);
                isServerError(false)
            } else {
                isServerError(true)
                isTooManyRequests(false)
            }
            isSuccess(false);
        })
    }

    React.useEffect(() => {
        isTooManyRequests(false);
        isServerError(false);

        values.name = "";
        values.email = "";
        values.phone = "";
    }, [resetForm])

    return (
        <div className="footer" id={"contact"}>
            <div className="contacts">
                {width <=764 && (
                    <div className={"contacts__header"}>
                        <h3 className="contacts__title">Свяжитесь прямо сейчас!</h3>
                        <p className="contacts__subtitle">Обсудите все нюансы с&nbsp;нашей командой профессионалов!
                            Мы&nbsp;ответим на&nbsp;любые ваши вопросы и&nbsp;создадим вместе Ваш дом мечты!</p>
                    </div>
                )}
                <div className="contacts__text-container">
                    {width > 764 && (
                        <>
                            <h3 className="contacts__title">Свяжитесь прямо сейчас!</h3>
                            <p className="contacts__subtitle">Обсудите все нюансы с&nbsp;нашей командой профессионалов!
                                Мы&nbsp;ответим на&nbsp;любые ваши вопросы и&nbsp;создадим вместе Ваш дом мечты!</p>
                        </>
                    )}

                    <div className="contacts__details">
                        <p className="contacts__details-title">КОНТАКТЫ</p>
                        <Link to={"https://yandex.ru/maps/213/moscow/house/dmitrovskoye_shosse_96k4/Z04YcwNpT0YEQFtvfXR2dnxrYw==/?indoorLevel=1&ll=37.549633%2C55.877087&z=17"}  target="_blank" rel="noopener noreferrer" className="contacts__details-container">
                            <div className="contacts__image contacts__image_geo"></div>
                            <p className="contacts__text">Офис: Москва 127347, г.Москва, Дмитровское шоссе, д.96, к.4,
                                офис 3</p>
                        </Link>
                        <Link  target="_blank" rel="noopener noreferrer" to={"https://yandex.ru/maps/2/saint-petersburg/house/anninskoye_shosse_26a/Z0kYdwRmTUcGQFtjfXt5cHxkZA==/?ll=30.149881%2C59.791553&z=13.6"} className="contacts__details-container">
                            <div className="contacts__image contacts__image_geo"></div>
                            <p className="contacts__text">Офис Продаж: 194356, г.Санкт-Петербург, Аннинское шоссе, д.26
                                А, офис 9</p>
                        </Link>

                        <Link  target="_blank" rel="noopener noreferrer" to={"https://2gis.ru/petrozavodsk/geo/11259634723598429?m=34.495664%2C61.715865%2F18.04"} className="contacts__details-container">
                            <div className="contacts__image contacts__image_geo"></div>
                            <p className="contacts__text">Производство Республики Карелия: г.Петрозаводск, Ужесельга,
                                ул.Центральная, д.69</p>
                        </Link>
                        <Link to={"mailto:Stroymarket.shop@yandex.ru"} target="_blank" rel="noopener noreferrer" className="contacts__details-container">
                            <div className="contacts__image contacts__image_email"></div>
                            <p className="contacts__text">Stroymarket.shop@yandex.ru</p>
                        </Link>
                        <Link  target="_blank" rel="noopener noreferrer" to={"tel:+79091527038"} className="contacts__details-container">
                            <div className="contacts__image contacts__image_phone"></div>
                            <p className="contacts__text">+7 (909) 152-70-38</p>
                        </Link>
                    </div>
                </div>
                <div className="form">
                    <p className="form__title">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</p>
                    <p className="form__subtitle">Оставьте контактные данные и мы свяжемся с вами в ближайшее время</p>
                    <form className="consultation" noValidate onSubmit={handleSubmitForm}>

                        <div className="form-input">
                            <input
                                className={`form-element-input ${values?.name && "form-element-with-text"}`}
                                type="text"
                                name="name"
                                required
                                onChange={handleChange}
                                value={values?.name ?? ""}
                            />
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="name">Имя</label>
                            <span className={"form-input__error"}>{errors?.name}</span>
                        </div>
                        <div className="form-input">
                            <input
                                className={`form-element-input ${values?.phone && "form-element-with-text"}`}
                                type="text"
                                name="phone"
                                required
                                onChange={handleChange}
                                value={values?.phone ?? ""}
                            />
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="phone">Телефон</label>
                            <span className={"form-input__error"}>{errors?.phone}</span>
                        </div>
                        <div className="form-input">
                            <input
                                className={`form-element-input ${values?.email && "form-element-with-text"}`}
                                type="email"
                                name="email"
                                required
                                onChange={handleChange}
                                value={values?.email ?? ""}
                            />
                            <div className="form-element-bar"></div>
                            <label className="form-element-label" htmlFor="email">E-mail</label>
                            <span className={"form-input__error"}>{errors?.email}</span>
                        </div>
                        {success ? (<p className="consultation__success">Ваша заявка успешно отправлена!</p>) : tooManyRequests ? (
                            <p className="consultation__success">Слишком много попыток отправки формы. Попробуйте позже.</p>) : serverError && (<p className="consultation__success">Произошла ошибка</p>)}
                        <button type="submit" className="consultation__btn" disabled={!isValid}>ОТПРАВИТЬ ЗАЯВКУ</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;