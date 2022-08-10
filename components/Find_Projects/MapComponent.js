import React, { useState } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from '../../styles/MapComponent.module.scss';

const MapComponent = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);
  const coordinates = searchResults.map((result) => ({
    longitude: result.projectCoordinates.lng,
    latitude: result.projectCoordinates.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  // console.log(Marker);

  return (
    <MapGL
      mapStyle={'mapbox://styles/mapbox/streets-v9'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(e) => setViewport(e.viewState)}
    >
      {searchResults.map((result) => (
        <div>
          <Marker
            style={{ backgroundColor: 'transparent' }}
            latitude={result.projectCoordinates.lat}
            longitude={result.projectCoordinates.lng}
            offsetTop={-50}
            onClick={() => {
              setSelectedLocation(result);
            }}
          >
            <div className={styles.marker}>
              <img src={result.businessAvatar} alt="" />
            </div>
          </Marker>
          {selectedLocation?.projectCoordinates?.lng ===
            result.projectCoordinates.lng && (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.projectCoordinates.lat}
              longitude={result.projectCoordinates.lng}
              className={styles.popup}
            >
              <div className={styles.popupdiv}>
                <img src={result.businessAvatar} />
                <div>
                  <h1>{result.postTitle}</h1>
                  <h3>{result.description}</h3>
                </div>
              </div>
            </Popup>
          )}
        </div>
      ))}
    </MapGL>
  );
};

export default MapComponent;
