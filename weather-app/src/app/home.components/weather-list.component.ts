import { Component, OnInit } from '@angular/core';
import {WeatherItemComponent} from './weather-item.component';
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS} from './weather.data';
import { WeatherService } from './weather.service';
import { WeatherSearchComponent } from './weather-search.component';
import { ApiService } from './api-service';

@Component ({
selector: 'weather-list',
templateUrl: './weather-list.component.html',
styleUrls: ['./app.scss']
})


export class WeatherListComponent implements OnInit {


    weatherItems: WeatherItem[];
    constructor (private _weatherService: WeatherService) {

    }

    ngOnInit(): any {

        this.weatherItems = this._weatherService.getWeatherItems();
    }

}