import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';
import Map from '../components/Map/Map';

export default function MapContainer() {
  return (    
    <ReactCursorPosition
      activationInteractionMouse={INTERACTIONS.CLICK}
    >
      <Map/>
    </ ReactCursorPosition>
  );     
};