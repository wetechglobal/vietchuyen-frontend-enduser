import React from 'react';

const Banner = ({imgSrc}) => {
    return (
        <div className="banner">
            <img src={imgSrc}/>
        </div>
    );
}

export default Banner;