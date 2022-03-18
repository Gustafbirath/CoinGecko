import React from "react"
import Coin from "../Coin";

const Carousel = (props) => {
    console.log(props);
    return (
        <div>
            {props.coins.length > 0 ?
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div>{props.coins.name}</div>
                            <div>asdasdasdasd</div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        </div>
                        <div className="carousel-item">
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> :
                <div></div>}
        </div>
    )
};

export default Carousel;