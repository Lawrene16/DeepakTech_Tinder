import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DragulaModule } from 'ng2-dragula';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatsPage } from '../pages/chats/chats';
import { HttpClientModule } from '@angular/common/http';
// import { Chat } from '../pages/chat/chat';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LinkedIn } from '@ionic-native/linkedin/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { EmojiProvider } from '../providers/emoji';
import { ChatdetailsPage } from '../pages/chatdetails/chatdetails';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { TabsclientPage } from '../pages/tabsclient/tabsclient';
import { TabsfreelancerPage } from '../pages/tabsfreelancer/tabsfreelancer';
import { JobsPage } from '../pages/jobs/jobs';
import { PostjobPage } from '../pages/postjob/postjob';
import { ShortlistedPage } from '../pages/shortlisted/shortlisted';
import { FreelancersPage } from '../pages/freelancers/freelancers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilefreelancerPage } from '../pages/profilefreelancer/profilefreelancer';
import { ProfileclientPage } from '../pages/profileclient/profileclient';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { FormsModule }    from '@angular/forms';
import { CompletetestProvider } from '../providers/completetest/completetest';
import { JoblistPage } from '../pages/joblist/joblist';
import { ChatService } from '../providers/chat-service';
import { DetailsfreelancerPage } from '../pages/detailsfreelancer/detailsfreelancer';
import { AuthProvider } from '../providers/auth/auth';
import { RegisterPage } from '../pages/register/register';
import { CountriesapiProvider } from '../providers/countriesapi/countriesapi';
import { SetupprofilePage } from '../pages/setupprofile/setupprofile';
import { Http } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { ModalPage } from '../pages/modal/modal';
import { WriteupPage } from '../pages/writeup/writeup';


var firebaseconfig = {
  apiKey: "AIzaSyAKq8NqNzRd7Z_GMe2XVK95Km8HTHOlYYs",
    authDomain: "tech-tinder.firebaseapp.com",
    databaseURL: "https://tech-tinder.firebaseio.com",
    projectId: "tech-tinder",
    storageBucket: "tech-tinder.appspot.com",
    messagingSenderId: "857697500539"
};




firebase.initializeApp(firebaseconfig);


@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    ChatdetailsPage,
    LoginPage,
    // Chat,
    RegisterPage,
    JoblistPage,
    JobsPage,
    ShortlistedPage,
    DetailsfreelancerPage,    
    ModalPage,
    TabsclientPage,
    ProfilefreelancerPage,
    SetupprofilePage,
    ProfileclientPage,
    WriteupPage,
    FreelancersPage,
    TabsfreelancerPage,
    PostjobPage,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
   // DragulaModule.forRoot(),
    AutoCompleteModule,
    AngularFireModule.initializeApp(firebaseconfig),
    FormsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      // tabsLayout:'icon-left',
      preloadModules: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatdetailsPage,
    ShortlistedPage,
    FreelancersPage,
    ProfilefreelancerPage,
    WriteupPage,
    RegisterPage,
    ProfileclientPage,
    SetupprofilePage,
    JobsPage,
    JoblistPage,
    DetailsfreelancerPage,
    PostjobPage,    
    LoginPage,
    ChatsPage,    
    ModalPage,
    TabsclientPage,
    TabsfreelancerPage,
    // Chat,    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    AngularFireAuth,
    LinkedIn,
    Geolocation,
    // Http,
    CountriesapiProvider,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    CompletetestProvider,
    AuthProvider,
    CountriesapiProvider
  ]
})
export class AppModule {}
