import { Weather, Temperature } from './../model/temperature.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-weather-by-city-name',
  templateUrl: './weather-by-city-name.component.html',
  styleUrls: ['./weather-by-city-name.component.css']
})
export class WeatherByCityNameComponent {

  temperature$! : Observable<Temperature>;

  city : string ="" ;
  url :string ="http://openweathermap.org/img/wn/";
  extension : string ="@2x.png";

  temperature! : Temperature ;

  

  constructor(
     private weatherService : WeatherService,
    )
    {}




  public getData(){
      this
        .weatherService
        .getWeatherByCityName(this.city)
        .subscribe(
          {
            next : (value) => this.temperature = value,
            error : err =>console.log(err)
          }
        );
  }
}
