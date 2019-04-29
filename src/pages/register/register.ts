import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController,
  LoadingController , NavParams } from 'ionic-angular';
import { TabsfreelancerPage } from '../tabsfreelancer/tabsfreelancer';
import { AuthProvider } from '../../providers/auth/auth'
import { SetupprofilePage } from '../setupprofile/setupprofile';
import { LinkedIn, LinkedInLoginScopes } from '@ionic-native/linkedin/ngx';
import { TabsclientPage } from '../tabsclient/tabsclient';
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
  cardtextr = "#000000";
  scopes: LinkedInLoginScopes[] = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
  linkedinUrl = "https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D9645523%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Ftech-tinder.com%252Fauth%252Flinkedin%2522%252C%2522codeChallenge%2522%253Anull%252C%2522codeChallengeMethod%2522%253Anull%252C%2522externalBindingKey%2522%253Anull%252C%2522loginHint%2522%253Anull%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522flowHint%2522%253Anull%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522appId%2522%253A9645523%252C%2522creationTime%2522%253A1556410651277%252C%2522state%2522%253A%2522987654321%2522%252C%2522scope%2522%253A%2522r_basicprofile%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D9645523%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Ftech-tinder.com%252Fauth%252Flinkedin%2522%252C%2522codeChallenge%2522%253Anull%252C%2522codeChallengeMethod%2522%253Anull%252C%2522externalBindingKey%2522%253Anull%252C%2522loginHint%2522%253Anull%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522flowHint%2522%253Anull%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522appId%2522%253A9645523%252C%2522creationTime%2522%253A1556410651277%252C%2522state%2522%253A%2522987654321%2522%252C%2522scope%2522%253A%2522r_basicprofile%2522%257D";


  constructor(public navCtrl: NavController,
    public linkedin: LinkedIn,
    public loadingCtrl: LoadingController,
    public auth: AuthProvider,
    public toastCtrl: ToastController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  linkedinsignup(){
    this.linkedin.login(this.scopes, true)
    .then(() => this.presentToast('Logged In'))
    .catch(e => console.log('Error logging in', e));


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
          if(this.userType == "freelancer"){
            this.navCtrl.setRoot(SetupprofilePage, {
              'fullname':this.fullname
            });
          }else if(this.userType == "recruiter"){
            this.navCtrl.setRoot(TabsclientPage);
          }
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
