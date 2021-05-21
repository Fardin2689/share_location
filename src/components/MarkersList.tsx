import React, { useContext } from 'react';
import { Marker } from 'react-leaflet';
import DataContext from '../context/DataContext';
import CustomPopUp from '../components/CustomPopUp';
import { getIcon } from '../components/Icons';

function MarkersList() {
  const dataSet = useContext(DataContext);

  if (dataSet === null) return null;
  return (
    <>
      {dataSet.data.map((el) => (
        <Marker position={el.position} icon={getIcon(el.locType)} key={el.id}>
          {/* <Popup>{el.locName}</Popup> */}
          <CustomPopUp name={el.locName} details={el.details} />
        </Marker>
      ))}
    </>
  );
}

export default MarkersList;
