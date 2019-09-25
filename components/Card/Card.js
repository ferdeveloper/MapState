  
import React from 'react';
import cardStyle from './Card.sass';

const Card = (props) => {
    function handleClick() {
      return null;
    }

    return (
        <div className={props.className}>
            <img
              className={cardStyle.icon}
              onClick={handleClick}
              src="/static/icons/treasure.svg"
              alt="icon"
            />
        </div>
    );
};

export default Card;