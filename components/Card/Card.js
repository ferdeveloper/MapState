  
import React from 'react';
import cardStyle from './Card.sass';

const POSITION_INDEX = 15;

const Card = (props) => {
  function handleClick() {
    return null;
  }

  function getPosition(position) {
    return position - POSITION_INDEX;
  }

  const positionCardStyle = {
    top: getPosition(props.yPosition),
    left: getPosition(props.xPosition),
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