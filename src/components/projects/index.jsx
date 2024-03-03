import Keytely from "../../assets/images/project_keytely.png";
import Inariyavri from "../../assets/images/project_inariyavri.png"
import Inari from "../../assets/images/project_inari.png"
import Kiyani from "../../assets/images/project_kiyani.jpg"
import {HashLink} from "react-router-hash-link";

function Projects() {
    return (
        <section className="projects">
            <div className="projects__title-container">
                <h2 className={"projects__title"}>наши проекты</h2>
            </div>
            <div className="project">
                <img className="project__image" src={Keytely} alt={"Изображение проекта бани"}/>
                <div className="project__description">
                    <p className="project__square">площадь 90 кв.м</p>
                    <h3 className="project__title">проект бани кейтели</h3>
                    {/*<p className="project__square">3 200 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
            <div className="project">
                <img className="project__image" src={Inariyavri} alt={"Изображение проекта бани"}/>
                <div className="project__description">
                    <p className="project__square">площадь 90 кв.м</p>
                    <h3 className="project__title">проект бани инарияври</h3>
                    {/*<p className="project__square">5 600 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
            <div className="project">
                <img className="project__image" src={Inari} alt={"Изображение проекта бани"}/>
                <div className="project__description">
                    <p className="project__square">площадь 107 кв.м</p>
                    <h3 className="project__title">проект бани инари</h3>
                    {/*<p className="project__square">8 100 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
            <div className="project">
                <img className="project__image" src={Kiyani} alt={"Изображение проекта бани"}/>
                <div className="project__description">
                    <p className="project__square">площадь 65 кв.м</p>
                    <h3 className="project__title">проект бани кияани</h3>
                    {/*<p className="project__square">3 400 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
        </section>
    )
}

export default Projects;