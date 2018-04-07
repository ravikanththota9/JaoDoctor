import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ClickOutsideModule,
    Ng4GeoautocompleteModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
