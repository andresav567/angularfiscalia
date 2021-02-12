import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city/city.component';
import { ProvinceComponent } from './province/province.component';



@NgModule({
  declarations: [CityComponent, ProvinceComponent],
  imports: [
    CommonModule
  ]
})
export class CityModule { }
