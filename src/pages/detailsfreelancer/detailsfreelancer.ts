import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsfreelancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detailsfreelancer',
  templateUrl: 'detailsfreelancer.html',
})
export class DetailsfreelancerPage {

  res;
  fullname;
  skills;
  experiences;
  hourlyrate;
  writeup;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.res = this.navParams.get('res');
      // console.log(this.res);

      this.fullname = this.res.fullname;
      this.skills = this.res.skillsstring;
      this.hourlyrate = this.res.hourlyRate;
      this.writeup = this.res.aboutMe;
      this.experiences = this.res.experiences;

      console.log(this.experiences);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsfreelancerPage');
  }

}
