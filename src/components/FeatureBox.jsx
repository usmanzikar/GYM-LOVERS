import React from 'react';

const FeatureBox = (props) => {
    return (
        <div className='a-box'>
            <div className="a-b-img">
                <img src={props.image} alt="" />
            </div>
            <div className="a-b-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum, dolor sit amet sumenda incidunt et iure eum, qui ex aperiam</p>
            </div>
        </div>
    )
}

export default FeatureBox
