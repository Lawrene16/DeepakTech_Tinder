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
import { Dialogs } from '@ionic-native/dialogs';
import { JoblistPage } from '../pages/joblist/joblist';
import { ChatService } from '../providers/chat-service';
import { DetailsfreelancerPage } from '../pages/detailsfreelancer/detailsfreelancer';
import { LogintwoPage } from '../pages/logintwo/logintwo';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    ChatdetailsPage,
    LoginPage,
    // Chat,
    JoblistPage,
    JobsPage,
    ShortlistedPage,
    DetailsfreelancerPage,    
    TabsclientPage,
    ProfilefreelancerPage,
    LogintwoPage,
    ProfileclientPage,
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
    ProfileclientPage,
    JobsPage,
    JoblistPage,
    LogintwoPage,    
    DetailsfreelancerPage,
    PostjobPage,    
    LoginPage,
    ChatsPage,    
    TabsclientPage,
    TabsfreelancerPage,
    // Chat,    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    CompletetestProvider
  ]
})
export class AppModule {}
