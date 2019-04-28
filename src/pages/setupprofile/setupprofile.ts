import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { CountriesapiProvider } from '../../providers/countriesapi/countriesapi';
import { Keyboard } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { TabsfreelancerPage } from '../tabsfreelancer/tabsfreelancer';

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


  firedata = firebase.database();
  skills: Array<string>;
  private list: string[] = [ 'Android',
                        'UI',
                        'Photoshop',
                        'Excel',
                        'Xcode',
                        'Ionic',
                        'Visual Studio',
                        'React',
                        'Vue',
                        'iOS',
                        'Project Management',
                        'Swift'];
    public input: string = '';
    public countries: string[] = [];
    skillstobeuploaded = [];
    isshidden = true;


  constructor(public navCtrl: NavController,
    private keyboard: Keyboard,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public countriesApi: CountriesapiProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  add(item: string, i) {
    this.isshidden = false;
    // this.input = item;
    var currentskills = document.getElementById("currentskills");

    // if(this.skillstobeuploaded.length == 0){
      currentskills.innerHTML = item + " | " + currentskills.innerHTML;
    
      console.log(item, i);
      this.skillstobeuploaded.push(item);
    // }
    // else{
    //   this.skillstobeuploaded.forEach(skill => {
    //       if(item == skill){
    //           this.presentToast('You have already added this skill');
    //       }else{
    //         currentskills.innerHTML = item + " | " + currentskills.innerHTML;
    
    //         console.log(item);
    //         this.skillstobeuploaded.push(item);
    //         this.countries = [];

    //         this.list.splice(item);
    //       }
    //   });
    // }


    this.countries = [];
  }

  removeFocus() {
    this.keyboard.close();
  }

  search() {
    if (!this.input.trim().length || !this.keyboard.isOpen()) {
      this.countries = [];
      return;
    }
    
    this.countries = this.list.filter(item => item.toUpperCase().includes(this.input.toUpperCase()));
  }

  presentToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  showBox(index){
    var placeholder;
    switch(index){
      case 0:
      placeholder = "Full Name";
      break;

      case 1:
      placeholder = "Hourly Rate";
      break;

      case 3:
      placeholder = document.getElementById('writeup').innerHTML;
    }

    var inputs = [
      {
        name: 'clickedsumtn',
        placeholder: placeholder
      }
    ];

    if(index == 2){
        inputs = [
          {
          name: 'clickedsumtn',
          placeholder: 'Role'
        },
        {
          name: 'clickedsumtn',
          placeholder: 'Company'
        },
      ];
    }


    

    



    let alert = this.alertCtrl.create({
      inputs: inputs,
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


  saveprofile(){
    let load = this.loadingCtrl.create({
      content:'Setting up your Profile',
    });
    load.present();

    this.firedata.ref('/users').child(firebase.auth().currentUser.uid).update({
      hourlyRate: '$12.5/hr',
      skillstags: this.skillstobeuploaded,
      aboutMe: document.getElementById('writeup').innerHTML
    }).then(() =>{
        this.navCtrl.push(TabsfreelancerPage);
        load.dismiss();
    }).catch((err) =>{
      this.presentToast(err);
      load.dismiss();
    })
  }


}
