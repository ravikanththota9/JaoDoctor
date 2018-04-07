import { Injectable } from '@angular/core';

@Injectable()
export class CitiesService {

  hospitalsArray = [
    {
      title: 'Rainbow Hospital',
      place: 'Hyderbad',
      id: 1

    },
    {
      title: 'Remedy Hospital',
      place: 'Hyderbad',
      id: 2

    },
    {
      title: 'Anupama Hospital',
      place: 'Hyderbad',
      id: 3

    },
    {
      title: 'Yashoda Hospital',
      place: 'Hyderbad',
      id: 4

    },
    {
      title: 'LV prasad Hospital',
      place: 'Hyderbad',
      id: 5

    },
    {
      title: 'Prathima Hospital',
      place: 'Hyderbad',
      id: 6

    },
    {
      title: 'Keerthi Hospital',
      place: 'Hyderbad',
      id: 7

    },
    {
      title: 'Prime Hospital',
      place: 'Hyderbad',
      id: 8

    }
  ];



  resultsArrayCity: any[] = new Array;
  resultsArrayDoctor: any[] = new Array;

  search:any="";

  fetchAllCities(){
    this.resultsArrayCity.push('Hyderabad')
    this.resultsArrayCity.push('Bangalore')
    this.resultsArrayCity.push('Delhi')
    this.resultsArrayCity.push('Pune')
    this.resultsArrayCity.push('Bagalkot')
    this.resultsArrayCity.push('Hubli')
    this.resultsArrayCity.push('Dharwad')
    this.resultsArrayCity.push('Gadag')
    this.resultsArrayCity.push('Bellary')
    this.resultsArrayCity.push('Kukatpally')
    this.resultsArrayCity.push('Hydernagar')
    this.resultsArrayCity.push('Miyapur')
    this.resultsArrayCity.push('Koti')
    this.resultsArrayCity.push('Punjagutta')
    this.resultsArrayCity.push('Gachibowli')
    this.resultsArrayCity.push('Madhapur')
    this.resultsArrayCity.push('Bhel')
    this.resultsArrayCity.push('Lingampally')
    this.resultsArrayCity.push('Isnapur')
    this.resultsArrayCity.push('Ameerpet')

    return this.resultsArrayCity;
  }

  fetchAllHospitails(){

    return this.hospitalsArray;
  }

  autoSearchCities(event: any){
    let autoSearchedCityResult: any[] = new Array;
    let resultsArrayCities: any[] = new Array;
    resultsArrayCities.push('Hyderabad')
    resultsArrayCities.push('Bangalore')
    resultsArrayCities.push('Delhi')
    resultsArrayCities.push('Pune')
    resultsArrayCities.push('Bagalkot')
    resultsArrayCities.push('Hubli')
    resultsArrayCities.push('Dharwad')
    resultsArrayCities.push('Gadag')
    resultsArrayCities.push('Bellary')
    resultsArrayCities.push('Kukatpally')
    resultsArrayCities.push('Hydernagar')
    resultsArrayCities.push('Miyapur')
    resultsArrayCities.push('Koti')
    resultsArrayCities.push('Punjagutta')
    resultsArrayCities.push('Gachibowli')
    resultsArrayCities.push('Madhapur')
    resultsArrayCities.push('Bhel')
    resultsArrayCities.push('Lingampally')
    resultsArrayCities.push('Isnapur')
    resultsArrayCities.push('Ameerpet')
    this.search = event.target.value;
    console.log("Searched value is ", this.search)
    for(let city of resultsArrayCities) {
      if (city.toLowerCase().startsWith(this.search.toLowerCase())) {

        autoSearchedCityResult.push(city)
      }

      //console.log(this.resultsArrayCity.some(x => x === this.search));
    }

    return autoSearchedCityResult;
  }

  autoSearchHospitals(event: any){
    let autoSearchedHospitalResult: any[] = new Array;

    this.search = event.target.value;
    console.log("Searched value is ", this.search)
    for(let hosp of this.hospitalsArray) {
      if (hosp.title.toLowerCase().startsWith(this.search.toLowerCase())) {

        autoSearchedHospitalResult.push(hosp)
      }

      //console.log(this.resultsArrayCity.some(x => x === this.search));
    }

    return autoSearchedHospitalResult;
  }

}
