export default class WeatherService {

    getResourses = async ( cityName ) => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},CA&appid=7a32feedc6faebdb53bea416b5f9c1b5`)
        
    
        if(!res.ok){
            throw new Error(`Could not fetch ${cityName}` +
            `available ${res.status}`);
        }
    
        return await res.json();
    }

    getCity = async (cityName) => {
        const cityWeather = await this.getResourses(`${cityName}`);
        return this._transformCity(cityWeather);
    }

    _transformCity = (cityWeather) => {
        return {
            name: cityWeather.name,
            celsius: Math.round(parseFloat(cityWeather.main.temp)-273.15),
            fahrenheit: Math.round(((parseFloat(cityWeather.main.temp)-273.15)*1.8)+32),
            description: cityWeather.weather[0].description,
            wind: cityWeather.wind.speed,
            id: cityWeather.id,
            timezone: cityWeather.timezone
        }
    }
}