import { Component } from '@angular/core';
import { FormGroup  } from '@angular/forms';
import { ApiService } from './api-service';
import { WeatherService } from './weather.service';
import { WeatherItem } from './weather-item'; 

@Component({
    selector: 'my-weather-search',
    templateUrl: './weather-search.component.html',
    styleUrls:['./app.scss'],
    providers:[ApiService]
})



export class WeatherSearchComponent {

    constructor ( private _apiService: ApiService, private _weatherService: WeatherService){}
    onSubmit(form: FormGroup) {
        this._apiService.getData(form.value.location)
        .subscribe(
            data => {
                const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                this._weatherService.addWeatherItems(weatherItem);

            }
        );
    }
}