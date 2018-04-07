import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../core/cities.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showDiv: any = 'hide';
  showDivCity: any = 'hide';
  onSearchbarClick : boolean=false;
  autoSearchSelectedValue:any= ""
  autoSearchSelectedHospitalValue:any= ""
  resultsArrayCity: any[] = new Array;
  resultsArrayDoctor: any[] = new Array;

  constructor(private citiesService: CitiesService,private router: Router) { }

  ngOnInit() {

    this.showDiv = 'hide';
    this.showDivCity = 'hide';
    this.resultsArrayCity = this.citiesService.fetchAllCities();
    this.resultsArrayDoctor = this.citiesService.fetchAllHospitails();

  }

  onclickBox(){
    this.onSearchbarClick = true;
    if(this.showDiv=='hide'){
      this.showDiv = 'show';
      this.showDivCity = 'hide';
    }else if(this.showDiv=='show'){
      this.showDiv = 'hide';

    }
  }

  onclickCityBox(){
        this.onSearchbarClick = true;
        if(this.showDivCity=='hide'){
          this.showDivCity = 'show';
          this.showDiv = 'hide';
        }else if(this.showDivCity=='show'){
          this.showDivCity = 'hide';

        }
      }

  onSelectOfAutoSeachValue(key){
    this.autoSearchSelectedValue = key;
    this.showDivCity= 'hide'
  }

  onSelectOfAutoSeachHospitalValue(key){
    this.autoSearchSelectedHospitalValue = key.title;
    console.log(key)
    this.showDiv= 'hide'
    this.router.navigate(['/about',key.id])
  }

  onCitiesSelectKey(event: any){

    this.resultsArrayCity = this.citiesService.autoSearchCities(event)
    console.log(this.resultsArrayCity)
  }

  onHospitalSelectKey(event: any){

    this.resultsArrayDoctor = this.citiesService.autoSearchHospitals(event)
        console.log(this.resultsArrayDoctor)
      }

  onClickOutside(event: Object) {
    console.log("outside click called")
    if(!this.onSearchbarClick){
      this.showDivCity = 'hide';
      this.showDiv='hide'
    }
    this.onSearchbarClick = false;
  }

}
