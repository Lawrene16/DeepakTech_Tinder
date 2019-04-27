import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, 
  ToastController,
  LoadingController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { TabsclientPage } from '../tabsclient/tabsclient';
import { TabsfreelancerPage } from '../tabsfreelancer/tabsfreelancer';
// import * as firebase from 'firebase';
import { AuthProvider } from '../../providers/auth/auth'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // firebase: firebase;
  email: string;
  password: string;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public storage: Storage,
    public auth: AuthProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogintwoPage');
  }

  signIn(){
    if(this.email == null || this.email == "" || !this.email.includes("@") || !this.email.includes(".")){
      this.presentToast("Email should be in the format example@example.com");
    }
    else if(this.password == null || this.password == "" ){
      this.presentToast("Password field cannot be left blank");
    }
    else{
      let load = this.loadingCtrl.create({
        content:'Logging you in',
      });
      load.present();
  
      this.auth.signInWithEmail(this.email, this.password).then(() =>{
        this.navCtrl.setRoot(TabsclientPage);
        load.dismiss();
      }).catch((err) =>{
        console.log(err);
        load.dismiss();
        this.presentToast(err)
      });
    }



    // let load = this.loadingCtrl.create({
    //   message: ''
    // })
    
    // // this.storage.set("type","recruiter");
    // // // this.events.publish("type", "recruiter");
    // // this.navCtrl.setRoot(TabsclientPage);

    // this.auth.signInWithEmail(this.email, this.password).then(() =>{
    // this.navCtrl.setRoot(TabsclientPage);
    // }).catch((err) =>{
    //   alert(err);
    // })

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


}
