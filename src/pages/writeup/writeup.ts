import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-writeup',
  templateUrl: 'writeup.html',
})
export class WriteupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteupPage');
  }

  test(){
    this.navCtrl.pop();
  }

}
