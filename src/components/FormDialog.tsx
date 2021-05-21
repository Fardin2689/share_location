import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Map from './Map';
import DraggableMarker from './DraggableMarker';
import { v1 as uuidv1 } from 'uuid';
import { Grid } from '@material-ui/core';

type propsType = {
  open: boolean;
  handleClose: any;
  addData: (newData: any) => void;
};
const initialValue = { locName: '', details: '', locType: 1 };

function FormDialog({ open, handleClose, addData }: propsType) {
  const [data, setData] = useState(initialValue);
  const [position, setPosition] = useState<any>([51.505, -0.09]);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const { locName, details, locType } = data;
    addData({ id: uuidv1(), locName, details, locType, position });
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

        <Map height={'200px'} center={[51.505, -0.09]}>
          <DraggableMarker
            position={position}
            setPosition={setPosition}
            markerType={data.locType || 1}
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
