import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherByCityNameComponent } from './weather-by-city-name/weather-by-city-name.component';

const routes: Routes = [
  {path:'',component:WeatherByCityNameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
