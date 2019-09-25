  
import React from 'react';
import cardStyle from './Card.sass';

const Card = (props) => {
  function handleClick() {
    return null;
  }

  const positionCardStyle = {
    top: props.yPosition,
    left: props.xPosition,
  }

  return (
    <div
      key={props.index}
      className={cardStyle.card}
      style={positionCardStyle}>
        <img
          className={cardStyle.icon}
          onClick={handleClick}
          src="/static/icons/dot-circle.svg"
          alt="icon"
        />
    </div>
  );
};

export default Card;