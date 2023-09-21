import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiKey } from '../key/api-key';
import { Observable } from 'rxjs';
import { Temperature } from '../model/temperature.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService{
  key = new ApiKey();
  constructor(private http :HttpClient) { }

  public getWeatherByCityName(cityName : string):Observable<Temperature>{

    return this.http
      .get<Temperature>
      (
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=fr&appid=${this.key.theAppid}`

      );
  }
}
