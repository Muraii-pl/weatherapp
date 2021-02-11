import React, { Fragment } from 'react'

const Result = props => {
    const { date,sunrise,sunset,temp,pressure,wind,city,err } = props.weather
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    return (
        
        <React.Fragment>
        <div>Miasto : { city }</div>
        <div>Dziś jest {date}</div>
        <div>Temperatura: { temp } &#176;C</div>
        <div>Czas wschodu: {sunriseTime}</div>
        <div>Czas zachodu: {sunsetTime}</div>
        <div>Ciśnienie {pressure} hPa</div>
        <div>Prędkość Wiatru {wind} m/s </div>
        
        </React.Fragment>
    )
}

export default Result
