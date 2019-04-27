import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController,
  LoadingController , NavParams } from 'ionic-angular';
import { TabsfreelancerPage } from '../tabsfreelancer/tabsfreelancer';
import { AuthProvider } from '../../providers/auth/auth'
import { SetupprofilePage } from '../setupprofile/setupprofile';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email;
  password;
  fullname;
  userType;
  cardbackgroundr = "#ffffff";
  cardbackgroundf = "#ffffff";
  cardtextf = "#000000";
  cardtextr = "#000000"



  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public auth: AuthProvider,
    public toastCtrl: ToastController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  linkedinsignup(){

  }

  isRecruiter(){
    this.userType = "recruiter";
    this.cardbackgroundr = "#006096";
    this.cardbackgroundf = "#ffffff";
    this.cardtextr = "#ffffff";
    this.cardtextf = "#000000";
  }

  isFreelancer(){
    this.userType = "freelancer";
    this.cardbackgroundf = "#006096";
    this.cardbackgroundr = "#ffffff";
    this.cardtextf = "#ffffff";
    this.cardtextr = "#000000";
  }

  signUp(){
    if(this.email == null || this.email == "" || !this.email.includes("@") || !this.email.includes(".")){
      this.presentToast("Email should be in the format example@example.com");
    }
    else if(this.password == null || this.password == "" ){
      this.presentToast("Password field cannot be left blank");
    }
    else{
      let load = this.loadingCtrl.create({
        content:'Creating your account',
      });
      load.present();
  
      this.auth.signUpWithEmail(
        this.email, this.password, this.fullname, this.userType
        ).then(() =>{
        this.navCtrl.setRoot(SetupprofilePage);
        load.dismiss();
      }).catch((err) =>{
        console.log(err);
        load.dismiss();
        this.presentToast(err)
      });
    }
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

  alreadyaMember(){
    this.navCtrl.pop();
  }

}
