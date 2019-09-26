  
import React, { useState } from 'react';
import Info from '../Info/Info';
import cardStyle from './Card.sass';

const POSITION_INDEX = 15;

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(true);

  function handleClick() {
    setShowInfo(!showInfo);
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
      style={positionCardStyle}
      onClick={handleClick}
    >
        <Info 
          showInfo={showInfo}
        />
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