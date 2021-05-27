import { useContext } from 'react';
import { Marker } from 'react-leaflet';
import DataContext from '../context/DataContext';
import CustomPopUp from '../components/CustomPopUp';
import { getIcon } from './getIcons';

function MarkersList() {
  const context = useContext(DataContext);

  if (context === null) return null;
  return (
    <>
      {context.data.map((el) => (
        <Marker position={el.position} icon={getIcon(el.locType)} key={el.id}>
          <CustomPopUp name={el.locName} details={el.details} />
        </Marker>
      ))}
    </>
  );
}

export default MarkersList;
