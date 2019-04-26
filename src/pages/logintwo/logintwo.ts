import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { TabsclientPage } from '../tabsclient/tabsclient';


@Component({
  selector: 'page-logintwo',
  templateUrl: 'logintwo.html',
})
export class LogintwoPage {

  constructor(public navCtrl: NavController,
    public storage: Storage,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogintwoPage');
  }

  signIn(){
    this.storage.set("type","recruiter");
    // this.events.publish("type", "recruiter");
    this.navCtrl.setRoot(TabsclientPage);
  }

}
