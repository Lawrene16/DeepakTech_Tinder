import { Component } from '@angular/core';
import { IonicPage, NavController, Events} from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TabsclientPage } from '../tabsclient/tabsclient';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  showIntro = true;
  loginDetails = false;
  showAcctType = false;
  // visibility1: string = "shown"
  // visibility2: string = 'hidden';

  constructor(public navCtrl: NavController,
    public events: Events,
    public storage: Storage,) {
    // this.visibility1 = 'shown';
    // this.visibility2 = 'hidden';

  }

  goBack(){
    this.showIntro = true;
  this.loginDetails = false;
    this.showAcctType = false;
  
  }

  recruiter(){
    this.storage.set("type","recruiter");
    this.events.publish("type", "recruiter");
    this.navCtrl.setRoot(MyApp);
  }

  freelancer(){
    this.storage.set("type","freelancer");
    this.events.publish("type", "freelancer");    
    this.navCtrl.setRoot(MyApp);
    // this.navCtrl.push(MyApp);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showSignIn(){
    this.showIntro = false;
    this.loginDetails = true;
    this.showAcctType = false;
    
    // this.visibility2 = 'shown';
    // this.visibility1 = 'hidden';
  }

  selectType(){
    this.showIntro = false;
    this.loginDetails = false;
    this.showAcctType = true;
  }


  signin(){
    this.navCtrl.push(TabsclientPage);
  }

}
