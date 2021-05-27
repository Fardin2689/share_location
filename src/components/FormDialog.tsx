import { useState } from 'react';
import { Button, TextField, Dialog } from '@material-ui/core';
import { DialogActions, DialogContent } from '@material-ui/core';
import { DialogContentText, DialogTitle } from '@material-ui/core';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
import { FormControl, Grid } from '@material-ui/core';
import DraggableMarker from './DraggableMarker';
import { v1 as uuidv1 } from 'uuid';
import { useContext } from 'react';
import Map from './Map';
import DataContext from '../context/DataContext';
import { LatLngExpression } from 'leaflet';
import DataInterface from '../interfaces/data.interface';

type propsType = {
  open: boolean;
  handleClose: () => void;
};
const initialValue = { locName: '', details: '', locType: 1 };

function FormDialog({ open, handleClose }: propsType) {
  const [data, setData] = useState(initialValue);
  const [position, setPosition] = useState<LatLngExpression>([51.505, -0.09]);
  const context = useContext(DataContext);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (context === null) return;
    const newData: DataInterface = {
      id: uuidv1(),
      locName: data.locName,
      details: data.details,
      locType: data.locType,
      position,
    };
    const newDataSet = [...context.data, newData];

    context.setData(newDataSet);
    localStorage.setItem('dataSet', JSON.stringify(newDataSet));

    handleCancel();
  };

  const handleCancel = () => {
    setData(initialValue);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel}>
      <DialogTitle>Share Location</DialogTitle>
      <DialogContent>
        <DialogContentText>
          here you can share your location on map with your friends!
        </DialogContentText>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoFocus
              name="locName"
              label="Location Name"
              type="text"
              required
              fullWidth
              value={data.locName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl style={{ width: '100%' }}>
              <InputLabel>Location Type</InputLabel>
              <Select
                name="locType"
                value={data.locType}
                onChange={handleChange}
              >
                <MenuItem value={1}>Default</MenuItem>
                <MenuItem value={2}>{'Home 🏠'}</MenuItem>
                <MenuItem value={3}>{'Office 🏦'}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <TextField
          margin="dense"
          name="details"
          label="Details"
          type="text"
          fullWidth
          multiline
          value={data.details}
          onChange={handleChange}
        />

        <Map height={'200px'}>
          <DraggableMarker
            position={position}
            setPosition={setPosition}
            markerType={data.locType}
          />
        </Map>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary" disabled={!data.locName}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
