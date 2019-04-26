import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-profilefreelancer',
  templateUrl: 'profilefreelancer.html',
})
export class ProfilefreelancerPage {

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,    
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilefreelancerPage');
  }

  showBox(index){
    var placeholder;
    switch(index){
      case 0:
      placeholder = "First Name";
      break;

      case 1:
      placeholder = "Last Name";
      break;

      case 2:
      placeholder = "E-mail";
      break;

      case 3:
      placeholder = "New Password";
      break;

      case 4:
      placeholder = "Confirm Password";
      break;
    }

    let alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'clickedsumtn',
          placeholder: placeholder
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            
          }
        }
      ]
    });
    alert.present();
  }

}
