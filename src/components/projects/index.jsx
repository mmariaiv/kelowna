import React from "react";
import Carousel from "nuka-carousel";
import {HashLink} from "react-router-hash-link";

import {useResize} from "../../utils/UseResize.jsx";
import {Girvas, Kivach, Ruskeala, Sayma} from "../../utils/constants.jsx";
import Popup from "../popup/index.jsx";

const renderCenterRightControls = ({nextDisabled, nextSlide}) => (
    <button className={"carousel__next"} disabled={nextDisabled} onClick={nextSlide}></button>
)

const renderCenterLeftControls = ({ previousDisabled, previousSlide,}) => (
    <button className={"carousel__next_l"} disabled={previousDisabled} onClick={previousSlide}></button>
)

function Projects() {
    const {width} = useResize();
    const [photoId, setPhotoId] = React.useState(0);

    function handlePopupClose() {
        setPhotoId(0);
    }
    return (
        <>
        <section className="projects">
            <div className="projects__title-container">
                <h2 className={"projects__title"}>проекты</h2>
            </div>
            <div className="project">
                <Carousel
                    className={"project__carousel"}
                    autoplay={false}
                    adaptiveHeight={false}
                    wrapAround={true}
                    renderCenterRightControls={renderCenterRightControls}
                    renderCenterLeftControls={renderCenterLeftControls}
                    defaultControlsConfig = {{
                        pagingDotsStyle: {display: `none`, visibility: "hidden"}
                    }}
                >
                    {Girvas.map((img, key ) => {
                        return (
                            <img
                                src={img}
                                key={key}
                                className={"project__image"}
                                alt={"Детальные фотографии проекта Гирвас"}
                                onClick={() => {
                                    setPhotoId(1);
                                }
                            }/>
                        )
                    })}
                </Carousel>
                <div className="project__description">
                    <p className="project__square">площадь 77 кв.м</p>
                    <h3 className="project__title">проект бани гирвас</h3>
                    {/*<p className="project__square">3 200 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
            <div className="project">
                <Carousel
                    className={"project__carousel"}
                    autoplay={false}
                    adaptiveHeight={false}
                    wrapAround={true}
                    renderCenterRightControls={renderCenterRightControls}
                    renderCenterLeftControls={renderCenterLeftControls}
                    defaultControlsConfig = {{
                        pagingDotsStyle: {display: `none`, visibility: "hidden"}
                    }}
                >
                    {Sayma.map((img, key ) => {
                        return (
                            <img src={img} key={key} className={"project__image"} alt={"Детальные фотографии проекта Гирвас"} onClick={() => {
                                setPhotoId(2);
                            }}/>
                        )
                    })}
                </Carousel>
                <div className="project__description">
                    <p className="project__square">площадь 66 кв.м</p>
                    <h3 className="project__title">проект бани сайма</h3>
                    {/*<p className="project__square">5 600 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
            <div className="project">
                <Carousel
                    className={"project__carousel"}
                    autoplay={false}
                    adaptiveHeight={false}
                    wrapAround={true}
                    renderCenterRightControls={renderCenterRightControls}
                    renderCenterLeftControls={renderCenterLeftControls}
                    defaultControlsConfig = {{
                        pagingDotsStyle: {display: `none`, visibility: "hidden"}
                    }}
                >
                    {Ruskeala.map((img, key ) => {
                        return (
                            <img src={img} key={key} className={"project__image"} alt={"Детальные фотографии проекта Гирвас"} onClick={() => {
                                setPhotoId(3);
                            }}/>
                        )
                    })}
                </Carousel>
                <div className="project__description">
                    <p className="project__square">площадь 53 кв.м</p>
                    <h3 className="project__title">проект бани рускеала</h3>
                    {/*<p className="project__square">8 100 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
            <div className="project">
                <Carousel
                    className={"project__carousel"}
                    autoplay={false}
                    adaptiveHeight={false}
                    wrapAround={true}
                    renderCenterRightControls={renderCenterRightControls}
                    renderCenterLeftControls={renderCenterLeftControls}
                    defaultControlsConfig = {{
                        pagingDotsStyle: {display: `none`, visibility: "hidden"}

                    }}
                >
                    {Kivach.map((img, key ) => {
                        return (
                            <img src={img} key={key} className={"project__image"} alt={"Детальные фотографии проекта Гирвас"} onClick={() => {
                                setPhotoId(4);
                            }}/>
                        )
                    })}
                </Carousel>
                <div className="project__description">
                    <p className="project__square">площадь 80 кв.м</p>
                    <h3 className="project__title">проект дома кивач</h3>
                    {/*<p className="project__square">3 400 000 ₽</p>*/}
                    <HashLink to={"#contact"} smooth className="vertical-card__btn project__btn">заказать проект</HashLink>
                </div>
            </div>
        </section>
            {width >= 764 && (<Popup onClose={handlePopupClose} carouselId={photoId}/>)}
        </>
    )
}

export default Projects;