import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

type propsType = {
  height: string;
  center: LatLngExpression | undefined;
  children?: JSX.Element | never[];
};

function Map({ height, center, children }: propsType) {
  return (
    <MapContainer
      style={{ height: height, width: "100%" }}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}

export default Map;
