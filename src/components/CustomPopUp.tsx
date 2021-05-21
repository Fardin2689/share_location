import { Popup } from 'react-leaflet';

export default function CustomPopUp({
  name,
  details,
}: {
  name: string;
  details: string;
}) {
  return (
    <Popup className="request-popup">
      <div style={{ textAlign: 'start', height: '50px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '22px' }}>
          {`Name: ${name}`}
        </div>
        <span style={{ fontSize: '15px', marginBottom: '20px' }}>
          {`Details: ${details}`}
        </span>
      </div>
    </Popup>
  );
}
