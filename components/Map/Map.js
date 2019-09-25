  
import React, { useState } from 'react';
import Card from '../Card/Card';

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

    const [marksList, setMarksList] = useState([]);

    function handleAddMark() {
        setMarksList([
            ...marksList,
            {
              position: 100,
            }
          ]);
    }

    function getMark(data, index) {
        return (
            <Card
                xPosition={x}
                yPosition={y}
            />
        );
    }

    function getMarksList() {
        console.log('marksList ', marksList);
        return marksList.map(getMark);
    }

    return (
        <div className={props.className}>
            {getMarksList()}
            <img
              onClick={handleAddMark}
              src="/static/zelda_map.jpg"
              alt="map"
            />
            {/* {`x: ${x}`}<br />
            {`y: ${y}`}<br />
            {props.shouldShowIsActive && [`isActive: ${isActive}`, <br key="line-break"/>]}
            {`width: ${width}`}<br />
            {`height: ${height}`}<br />
            {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
            {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
            {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`} */}
        </div>
    );
};

Map.defaultProps = {
    shouldShowIsActive: true
};

export default Map;