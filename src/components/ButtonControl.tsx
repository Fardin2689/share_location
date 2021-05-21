import Button from "@material-ui/core/Button";

type propsType = {
  handleOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function ButtonControl({ handleOpen }: propsType) {
  return (
    <div className={"leaflet-bottom leaflet-left"}>
      <div className="leaflet-control leaflet-bar">
        <Button variant="contained" onClick={handleOpen}>
          Share Location
        </Button>
      </div>
    </div>
  );
}

export default ButtonControl;
