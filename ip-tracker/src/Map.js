import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css'
const Map = () => {
    const defaultCoords = [40.678177, -73.944160]

    return (
        <MapContainer center={defaultCoords} zoom={13} scrollWheelZoom={false} style={{ height: '70vh', width: '100wh', zIndex: "2" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
