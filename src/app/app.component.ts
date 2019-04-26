import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LoginPage } from '../pages/login/login';
import { TabsclientPage } from '../pages/tabsclient/tabsclient';
import { TabsfreelancerPage } from '../pages/tabsfreelancer/tabsfreelancer';
import { FreelancersPage } from '../pages/freelancers/freelancers';
import { PostjobPage } from '../pages/postjob/postjob';
import { JobsPage } from '../pages/jobs/jobs';
import { ProfileclientPage } from '../pages/profileclient/profileclient';
import { ShortlistedPage } from '../pages/shortlisted/shortlisted';
import { JoblistPage } from '../pages/joblist/joblist';
import { ProfilefreelancerPage } from '../pages/profilefreelancer/profilefreelancer';
import { Storage } from '@ionic/storage';
import { LogintwoPage } from '../pages/logintwo/logintwo';
import { DetailsfreelancerPage } from '../pages/detailsfreelancer/detailsfreelancer';


@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{title: string, icon:string,component: any, pageName:string, index:any}>;

  constructor(public platform: Platform,
    public storage: Storage,
    public events: Events,
    public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.rootPage = LogintwoPage;
    // this.storage.get("type").then((res) =>{
    //   console.log(res);
    //   if(res == null){
    //       //  this.rootPage = LoginPage;  
    //       this.rootPage = LogintwoPage;
          
    //   }
    //   else{
    //     if(res == "recruiter"){

           this.pages = [
            { title: 'Home', icon : 'ios-home', component: TabsclientPage, pageName: 'GotopremiumPage', index: 1 },
            { title: 'Profile', icon : 'ios-person', component: ProfileclientPage, pageName: 'GotopremiumPage', index: 0 },        
            { title: 'Settings', icon : 'ios-settings', component: TabsclientPage, pageName: 'GotopremiumPage', index: 1 },
            { title: 'Post Job!', icon : 'ios-alert',  component: PostjobPage, pageName: 'GotopremiumPage', index: 2 },
            { title: 'Logout', icon : 'ios-log-out',   component: LoginPage, pageName: 'GotopremiumPage', index: 6 },
          ];  

    //       this.rootPage = TabsclientPage;
          
    //     }else if(res == "freelancer"){
          
    //       this.pages = [
    //         { title: 'Search Jobs', icon : 'ios-search', component: TabsfreelancerPage, pageName: 'GotopremiumPage', index: 0 },        
    //         { title: 'Job Posts', icon : 'ios-pricetags', component: JoblistPage, pageName: 'GotopremiumPage', index: 1 },
    //         { title: 'Invite', icon : 'ios-alert',  component: TabsfreelancerPage, pageName: 'GotopremiumPage', index: 2 },
    //         { title: 'Logout', icon : 'ios-log-out',   component: LoginPage, pageName: 'GotopremiumPage', index: 6 },
      
    //       ];   

    //       // this.rootPage = TabsfreelancerPage;
    //       this.rootPage = LogintwoPage;
          
          
    //     }
    //     // this.rootPage = TabsclientPage;  
    //   }
    // });

    // this.events.subscribe("type", (userType) =>{
    //   console.log(userType);
    //   this.pages = [
    //     { title: 'Search Jobs', icon : 'ios-search', component: TabsfreelancerPage, pageName: 'GotopremiumPage', index: 0 },        
    //     { title: 'Job Posts', icon : 'ios-pricetags', component: JoblistPage, pageName: 'GotopremiumPage', index: 1 },
    //     { title: 'Invite', icon : 'ios-alert',  component: TabsfreelancerPage, pageName: 'GotopremiumPage', index: 2 },
    //     { title: 'Logout', icon : 'ios-log-out',   component: LoginPage, pageName: 'GotopremiumPage', index: 6 },
  
    //   ];   

    // })
    // console.log("type");
    // var s: Stro
    // this.userType = 
    // used for an example of ngFor and navigation
       


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}