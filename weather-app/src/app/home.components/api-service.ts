import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const api = 'http://api.openweathermap.org/data/2.5/weather?q=';


@Injectable()
export class ApiService{
constructor( private http: Http){}

getData(cityName: string): Observable<any> {

    return this.http
    .get(api + cityName + '&APPID=fc3a7b332b77a310fb4b3c9e0f7f8f90&units=metric')
    .map(response => response.json())
    .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
    });

}

}