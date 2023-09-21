import { Weather, Temperature } from './../model/temperature.model';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import {FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-weather-by-city-name',
  templateUrl: './weather-by-city-name.component.html',
  styleUrls: ['./weather-by-city-name.component.css']
})
export class WeatherByCityNameComponent  implements OnDestroy{



  city : string ="" ;
  url :string ="http://openweathermap.org/img/wn/";
  extension : string ="@2x.png";
  data! :Subscription;
  temperature! : Temperature ;



  constructor(
     private weatherService : WeatherService,
    )
    {}
  ngOnDestroy(): void {
      this.data.unsubscribe();
  }




  public getData(){
      this.data = this
        .weatherService
        .getWeatherByCityName(this.city)
        .subscribe(
         (value) => this.temperature = value,
        );
  }
}
