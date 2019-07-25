import React, { useState , useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as markerData from '../data/marker-data.json'

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 49.21920015,
        longitude: -123.13836515,
        zoom: 10.5,
        width: '50vw',
        height: '100vh'
    });

    const [selectedSpot, setSelectedSpot] = useState(null);

    useEffect(() => {
        const listener = e => {
            if (e.key == "Escape"){
                setSelectedSpot(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        }
    }, [])

    return (
        <div>
            <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1Ijoiam9kaWdvIiwiYSI6ImNqeWZhMXpkczA5Y2ozaG52Z2l0Y29qa3IifQ.zglTcX0xV8BW_o1Umfx6Hg"
            onViewportChange={ viewport => {
                setViewport(viewport);
            }}
            >
                {markerData.features.map(spot =>(
                    <Marker 
                    key={spot.properties.PARK_ID}
                    latitude={spot.geometry.coordinates[0]}
                    longitude={spot.geometry.coordinates[1]}>
                        <i className="fa fa-thumb-tack map-marker" onClick={(e) => {
                            e.preventDefault();
                            setSelectedSpot(spot);
                        }}></i>
                    </Marker>
                ))};

                {selectedSpot && (
                    <Popup 
                        latitude={selectedSpot.geometry.coordinates[0]}
                        longitude={selectedSpot.geometry.coordinates[1]}
                        onClose={() => {
                            setSelectedSpot(null);
                        }}>
                        <div>
                            <h5>{selectedSpot.properties.NAME}</h5>
                        </div>
                    </Popup>
                )}
            </ReactMapGL>
        </div>
    )
}