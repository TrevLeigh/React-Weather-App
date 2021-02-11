import React, { useState } from 'react';
import Conditions from '../Conditions/conditions';


const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');

    const uriEncodedCity = encodeURIComponent(city);

    function getForecast(e: any) {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=${unit}&zip=${city},us&appid=60b8fdf97e4a89540156408d75f68121`)
            .then(response => response.json())
            .then(response => {
                setResponseObj(response);
            });
    }

    

    return (
    <div>
        <h2>Find Current Weather Conditions</h2>
        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength={50}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button type="submit">Get Forecast</button>
            </form>
        <Conditions responseObj={responseObj} />
    </div>
    );
    
}

export default Forecast;