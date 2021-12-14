import React from 'react';

const Cards = (props) => {
    return (
        <div className="card-group">
            <div className="card">
                <img src={props.image1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle1}</h5>
                    <p className="card-text">{props.cardText1}</p>
                    <p className="card-text"><small className="text-muted">{props.footerText1}</small></p>
                </div>
            </div>
            <div className="card" style={props.style2}>
                <img src={props.image2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle2}</h5>
                    <p className="card-text">{props.cardText2}</p>
                    <p className="card-text"><small className="text-muted">{props.footerText2}</small></p>
                </div>
            </div>
            <div className="card" style={props.style3}>
                <img src={props.image3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle3}</h5>
                    <p className="card-text">{props.cardText3}</p>
                    <p className="card-text"><small className="text-muted">{props.footerText3}</small></p>
                </div>
            </div>
        </div>
    )
};

export default Cards;