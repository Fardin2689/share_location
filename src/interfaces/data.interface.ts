import { LatLngExpression } from "leaflet";

export default interface DataInterface {
  id: string;
  locName: string;
  details: string;
  locType: string;
  position: LatLngExpression;
}
