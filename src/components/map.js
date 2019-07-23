import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import * as markerData from '../data/marker-data.json'

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 49.21920015,
        longitude: -123.13836515,
        zoom: 10.5,
        width: '50vw',
        height: '100vh'
    });
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
                        <div>SPOT</div>
                    </Marker>
                ))};
            </ReactMapGL>
        </div>
    )
}