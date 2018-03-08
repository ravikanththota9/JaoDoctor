import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showDiv: any = 'hide';
  showDivCity: any = 'hide';
  autoSearchSelectedValue:any= ""
  resultsArrayCity: any[] = new Array;
  resultsArrayDoctor: any[] = new Array;
  constructor() { }

  ngOnInit() {
    this.showDiv = 'hide';
    this.showDivCity = 'hide';
    this.resultsArrayCity.push('Hyderabad')
    this.resultsArrayCity.push('Bangolore')
    this.resultsArrayCity.push('Delhi')
    this.resultsArrayCity.push('Pune')

    this.resultsArrayDoctor.push('Dr.Ravi')
    this.resultsArrayDoctor.push('Dr.Veera')
    this.resultsArrayDoctor.push('Dr.Raj')
    this.resultsArrayDoctor.push('Dr.Jhon')
  }

  onclickBox(){

    if(this.showDiv=='hide'){
      this.showDiv = 'show';
    }else if(this.showDiv=='show'){
      this.showDiv = 'hide';
    }
  }

  onclickCityBox(){

        if(this.showDivCity=='hide'){
          this.showDivCity = 'show';
        }else if(this.showDivCity=='show'){
          this.showDivCity = 'hide';
        }
      }

  onSelectOfAutoSeachValue(key){
    this.autoSearchSelectedValue = key;
    this.showDiv= 'hide'
  }

}
