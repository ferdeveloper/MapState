  
import React from 'react';
// import './Card.css';

const Card = (props) => {
    // const {
    //     detectedEnvironment: {
    //         isMouseDetected = false,
    //         isTouchDetected = false
    //     } = {},
    //     elementDimensions: {
    //         width = 0,
    //         height = 0
    //     } = {},
    //     position: {
    //         x = 0,
    //         y = 0
    //     } = {},
    //     isActive = false,
    //     isPositionOutside = false
    // } = props;

    function handleClick() {
      alert(x);
    }

    return (
        <div className={props.className}>
            <img
              onClick={handleClick}
              src="/static/icons/treasure.svg"
              alt="icon"
            />
        </div>
    );
};

export default Card;