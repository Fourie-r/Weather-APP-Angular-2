
import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherItem } from './weather-item'; 


@Injectable()
export class WeatherService {
    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItems( item: WeatherItem){
        WEATHER_ITEMS.push(item);
    }

}