import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HospitalService } from '../core/hospital.service';
declare const google: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  routeParams: any;
  id: number;
  private sub: any;
  hospitalInformation : any = "";

  constructor(private route: ActivatedRoute,private hospitalService: HospitalService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("id is " , this.id)

      if(this.id==1){
        this.hospitalInformation = this.hospitalService.hospital1
      }else if(this.id==2){
        this.hospitalInformation = this.hospitalService.hospital2
      }else if(this.id==3){
        this.hospitalInformation = this.hospitalService.hospital3
      }else if(this.id==4){
        this.hospitalInformation = this.hospitalService.hospital4
      }else if(this.id==5){
        this.hospitalInformation = this.hospitalService.hospital5
      }else if(this.id==6){
        this.hospitalInformation = this.hospitalService.hospital7
      }else if(this.id==7){
        this.hospitalInformation = this.hospitalService.hospital7
      }else if(this.id==8){
        this.hospitalInformation = this.hospitalService.hospital8
      }

   });
    let mapProp = {
      center: new google.maps.LatLng(51.508742, -0.120850),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }

}
