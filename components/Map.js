  
import React from 'react';
import Card from './Card/Card';

const Map = (props) => {
    const {
        detectedEnvironment: {
            isMouseDetected = false,
            isTouchDetected = false
        } = {},
        elementDimensions: {
            width = 0,
            height = 0
        } = {},
        position: {
            x = 0,
            y = 0
        } = {},
        isActive = false,
        isPositionOutside = false
    } = props;

    function handleClick() {
      alert(x);
    }

    return (
        <div className={props.className}>
            <Card />
            <img
              onClick={handleClick}
              src="/static/zelda_map.jpg"
              alt="map"
            />
            {`x: ${x}`}<br />
            {`y: ${y}`}<br />
            {props.shouldShowIsActive && [`isActive: ${isActive}`, <br key="line-break"/>]}
            {`width: ${width}`}<br />
            {`height: ${height}`}<br />
            {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
            {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
            {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`}
        </div>
    );
};

Map.defaultProps = {
    shouldShowIsActive: true
};

export default Map;