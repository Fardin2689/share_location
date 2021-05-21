import L, { DivIconOptions } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [13, 5],
});
const getIcon = (type: any, size: number = 30) => {
  if (type > 3 || type <= 1) return DefaultIcon;
  const shape = type === 2 ? '🏠' : '🏦';

  const iconOptions: DivIconOptions = {
    iconSize: [size, size],
    iconAnchor: [20, size / 10],
    className: 'mymarker',
    html: shape,
  };
  return L.divIcon(iconOptions);
};

export { getIcon };
