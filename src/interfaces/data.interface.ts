import { LatLngExpression } from 'leaflet';

export default interface DataInterface {
  id: string;
  locName: string;
  details: string;
  locType: number;
  position: LatLngExpression;
}
