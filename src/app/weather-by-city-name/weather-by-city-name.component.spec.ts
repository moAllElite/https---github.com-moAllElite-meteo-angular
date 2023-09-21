import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherByCityNameComponent } from './weather-by-city-name.component';

describe('WeatherByCityNameComponent', () => {
  let component: WeatherByCityNameComponent;
  let fixture: ComponentFixture<WeatherByCityNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherByCityNameComponent]
    });
    fixture = TestBed.createComponent(WeatherByCityNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
