import React from "react";
import Carousel from "nuka-carousel";
import {Girvas, Kivach, Ruskeala, Sayma} from "../../utils/constants.jsx";



function Popup({carouselId, onClose}) {
    const [img, setImg] = React.useState([]);

    React.useEffect(() => {
        if (carouselId === 1) {
            setImg(Girvas)
        } else if (carouselId === 2) {
            setImg(Sayma)
        } else if (carouselId === 3) {
            setImg(Ruskeala)
        } else {
            setImg(Kivach)
        }
    })
    const renderCenterRightControls = ({nextDisabled, nextSlide}) => (
        <button className={"carousel__next"} disabled={nextDisabled} onClick={nextSlide}></button>
    )

    const renderCenterLeftControls = ({ previousDisabled, previousSlide,}) => (
        <button className={"carousel__next_l"} disabled={previousDisabled} onClick={previousSlide}></button>
    )
    function closeByClickingOutside(event) {
        if (event.currentTarget === event.target) {
            onClose();
        }
    }
    return (
        <div className={`popup ${carouselId && `popup_opened`}`}
        onClick={closeByClickingOutside}>
            <div className={"popup__container"}>
                <button className={"popup__close-btn"} type={"button"} onClick={onClose}></button>

                <Carousel
                    className={"popup__carousel"}
                    autoplay={false}
                    adaptiveHeight={true}
                    wrapAround={true}
                    renderCenterRightControls={renderCenterRightControls}
                    renderCenterLeftControls={renderCenterLeftControls}
                    defaultControlsConfig = {{
                        pagingDotsStyle: {display: `none`, visibility: "hidden"},
                        containerClassName: "popup__carousel"
                    }}
                >
                    {img.map((image, key ) => {
                        return (
                            <img src={image} key={key} className={"project__image"} alt={"Детальные фотографии проекта Гирвас"}/>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default Popup;