import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountriesapiProvider } from '../../providers/countriesapi/countriesapi';

/**
 * Generated class for the SetupprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setupprofile',
  templateUrl: 'setupprofile.html',
})
export class SetupprofilePage {

  constructor(public navCtrl: NavController,
    public countriesApi: CountriesapiProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupprofilePage');

    this.countriesApi.getCountries();
  }

}
