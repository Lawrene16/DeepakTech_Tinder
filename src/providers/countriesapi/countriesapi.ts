// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CountriesapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesapiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountriesapiProvider Provider');
  }

  getCountries(){
  //   this.http.get('https://api.printful.com/countries').map(res => res.json()).subscribe(data => {
  //     console.log(data);
  //     return data;
  // });
  }

}
