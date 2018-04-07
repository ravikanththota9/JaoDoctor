import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { CitiesService } from './cities.service';
import { HospitalService } from './hospital.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent,CitiesService,HospitalService]
})
export class CoreModule { }
