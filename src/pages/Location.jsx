import React from 'react'
import { useState, useEffect } from 'react'

// styles
import './Location.scss'

// components
import Footer from '../components/Footer'

// leaflet js
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
const icon = L.icon({ iconUrl: '/assets/icon-location.svg' })

function Location() {
  const [themeSecondary, setThemeSecondary] = useState(true)

  useEffect(() => {
    setThemeSecondary(true)
  }, [themeSecondary])

  return (
    <div className="location">
      <MapContainer
        className="location__map"
        center={[41.490578, -71.310196]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution=""
          url="https://api.mapbox.com/styles/v1/kaderathbun/cla7np860003c14n2qlbmk4xw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2FkZXJhdGhidW4iLCJhIjoiY2xhN25xd285MDg1NjNxb3pjcm15M2o5biJ9.m6gkBqv24CO_OgSTNYBT0g"
        />
        <Marker position={[41.490578, -71.310196]} icon={icon}>
          <Popup>
            99 King Street <br /> Newport RI <br /> 02840 <br />
            United States of America
          </Popup>
        </Marker>
      </MapContainer>
      <button className="location__cta">Back to Home</button>
      <article className="address">
        <h1 className="address__title">Our Location</h1>
        <p className="address__street">
          <span className="address__street--bold">99 King Street</span> <br />
          Newport <br />
          RI 02840 <br />
          United States of America
        </p>
        <p className="address__desc">
          Our newly opened gallery is located near the Edward King House on 99
          King Street, the Modern Art Gallery is free to all visitors and open
          seven days a week from 8am to 9pm.
        </p>
      </article>
      <Footer theme={themeSecondary} />
    </div>
  )
}

export default Location
