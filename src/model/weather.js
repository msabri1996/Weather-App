export class Weather{
    constructor(city,country,temp_celsius,temp_max,temp_min,description,weather_icon){
        this.city= city;
        this.country=country;
        this.temp_celsius=calcCelsius(temp_celsius);
        this.temp_max=calcCelsius(temp_max);
        this.temp_min=calcCelsius(temp_min);
        this.description=description;
        this.weather_icon=weather_icon;
    }
}

const calcCelsius=(temp)=>{
    let cel=Math.floor(temp-273.15)
    return cel
}