import { LatLngExpression } from 'leaflet';
import { useRef, useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { getIcon } from './Icons';

type propsType = {
  position: LatLngExpression;
  setPosition: React.Dispatch<React.SetStateAction<number[]>>;
  markerType?: number | unknown; //DivIcon | Icon<IconOptions> | undefined;
};

function DraggableMarker({ position, setPosition, markerType = 1 }: propsType) {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker: any = markerRef.current;
        if (marker != null) {
          const loc = marker.getLatLng();
          setPosition([loc.lat, loc.lng]);
        }
      },
    }),
    // eslint-disable-next-line
    []
  );

  return (
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={getIcon(markerType)}
    >
      <Popup minWidth={90}>Drag me wherever you want to share :)</Popup>
    </Marker>
  );
}

export default DraggableMarker;
