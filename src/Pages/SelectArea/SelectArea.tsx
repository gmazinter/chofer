type SelectAreaProps = {};
import Map from "react-map-gl";
import mapbox from "mapbox-gl";

const SelectArea = (props: SelectAreaProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div>header here</div>
      <div>
        <Map
          // accessToken={import.meta.env.VITE_MAPBOX_GL_TOKEN}
          mapLib={mapbox}
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5,
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    </div>
  );
};

export default SelectArea;
