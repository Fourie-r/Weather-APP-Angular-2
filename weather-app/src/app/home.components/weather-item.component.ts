import { Component, Input } from '@angular/core';
import { WeatherItem} from './weather-item';


@Component({
    selector: 'weather-item',
    templateUrl: './weather-item.component.html',
    styleUrls: ['./weather-item.component.scss', './app.scss' ],
    //inputs: ['weatherItem']
})



export class WeatherItemComponent {

@Input() weatherItem: WeatherItem;
}