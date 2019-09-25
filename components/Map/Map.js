  
import React, { useState } from 'react';
import Card from '../Card/Card';
import mapStyle from './Map.sass';

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
			console.log('x => ', x);
			console.log('y => ', y);
			setMarksList([
				...marksList,
				{
					xPosition: x,
					yPosition: y,
				}
			]);

			console.log('marksList => ', marksList);
		}
		
		// const handleAddMark = () => {
		// 	setMarksList([
		// 		...marksList,
		// 		{
		// 			xPosition: x,
		// 			yPosition: y,
		// 		}
		// 	]);
		// };

    function getMark(data, index) {
			return (
				<Card
					key={index}
					xPosition={data.xPosition}
					yPosition={data.yPosition}
				/>
			);
    }

    function getMarksList() {
        // console.log('marksList ', marksList);
        return marksList.map(getMark);
    }

    return (
        <div
            className={mapStyle.map}
						>
            {getMarksList()}
            <img
            	onClick={handleAddMark}
              className={mapStyle.image}
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