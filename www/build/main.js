webpackJsonp([2],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsfreelancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats_chats__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_jobs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profilefreelancer_profilefreelancer__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsfreelancerPage = /** @class */ (function () {
    function TabsfreelancerPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__jobs_jobs__["a" /* JobsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__chats_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__profilefreelancer_profilefreelancer__["a" /* ProfilefreelancerPage */];
    }
    TabsfreelancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/tabsfreelancer/tabsfreelancer.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Jobs" tabIcon="ios-briefcase"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="ios-chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Profile" tabIcon="ios-contact"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/tabsfreelancer/tabsfreelancer.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsfreelancerPage);
    return TabsfreelancerPage;
}());

//# sourceMappingURL=tabsfreelancer.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.toUser = {
            toUserId: '210000198410281948',
            toUserName: 'Hancock'
        };
    }
    ChatsPage.prototype.gotoChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__["a" /* ChatdetailsPage */], { "username": "Hisham Toure" });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/chats/chats.html"*/'<ion-header>\n  <ion-navbar ion-fixed align-title="center" color="light">\n      <button ion-button left menuToggle>\n            <ion-icon class="icon ion-home custom-icon" name="menu"></ion-icon>\n      </button>\n\n      <ion-buttons end>\n        <button ion-button icon-only         >\n            <ion-icon name="search"></ion-icon>\n        </button>\n    </ion-buttons>\n\n      <ion-title>  \n        Chats\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<br>\n<br>\n<br>\n\n  <ion-list>\n\n    <ion-fab bottom right >\n      <button color="testone" ion-fab mini>\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-fab>\n\n\n    <ion-item (click)="gotoChat(user)">\n      <ion-avatar item-left>\n        <img src="../../assets/one.jpg">\n      </ion-avatar>\n      <h2>Hisham Toure (UI/UX Designer)</h2>\n      <p>Hello there</p>\n      <!-- <p  item-right>19:32</p> -->\n      <ion-badge style="margin-top: 30px" item-right color="testone">3</ion-badge>\n    </ion-item>\n\n\n    <ion-item  (click)="gotoChat(user)">\n      <ion-avatar item-left>\n        <img src="../../assets/three.jpg">\n      </ion-avatar>\n      <h2>Edung Divine (Expert iOS Developer)</h2>\n      <p>Have you started to make the designs</p>\n    </ion-item>\n\n\n    <ion-item  (click)="gotoChat(user)">\n      <ion-avatar item-left>\n        <img src="../../assets/two.jpg">\n      </ion-avatar>\n      <h2>John Doe (Project Manager)</h2>\n      <p>What will you like to do to the app</p>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/chats/chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesapiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Http } from '@angular/http';


/*
  Generated class for the CountriesapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CountriesapiProvider = /** @class */ (function () {
    function CountriesapiProvider(http) {
        this.http = http;
        console.log('Hello CountriesapiProvider Provider');
    }
    CountriesapiProvider.prototype.getCountries = function () {
        //   this.http.get('https://api.printful.com/countries').map(res => res.json()).subscribe(data => {
        //     console.log(data);
        //     return data;
        // });
    };
    CountriesapiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CountriesapiProvider);
    return CountriesapiProvider;
}());

//# sourceMappingURL=countriesapi.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, view, element, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.element = element;
        this.navParams = navParams;
        this.writeup = "";
        this.callback = this.navParams.get('callback');
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.goPrevious = function () {
        var _this = this;
        this.callback(this.writeup).then(function () {
            _this.navCtrl.pop();
        });
    };
    ModalPage.prototype.doit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    ModalPage.prototype.autoSizeDescription = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
        return;
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/modal/modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="light">\n    <ion-title>Write about yourself</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <ion-textarea style="height: 40vh" placeholder="Write about yourself here">\n\n    </ion-textarea> -->\n\n    <ion-textarea placeholder="Write about yourself here" type="text" [(ngModel)]="writeup" (input)="autoSizeDescription($event);"></ion-textarea>\n\n\n    <button ion-button block (click)="goPrevious()">Save</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setupprofile_setupprofile__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_linkedin_ngx__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabsclient_tabsclient__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, linkedin, loadingCtrl, auth, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.linkedin = linkedin;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.cardbackgroundr = "#ffffff";
        this.cardbackgroundf = "#ffffff";
        this.cardtextf = "#000000";
        this.cardtextr = "#000000";
        this.scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
        this.linkedinUrl = "https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D9645523%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Ftech-tinder.com%252Fauth%252Flinkedin%2522%252C%2522codeChallenge%2522%253Anull%252C%2522codeChallengeMethod%2522%253Anull%252C%2522externalBindingKey%2522%253Anull%252C%2522loginHint%2522%253Anull%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522flowHint%2522%253Anull%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522appId%2522%253A9645523%252C%2522creationTime%2522%253A1556410651277%252C%2522state%2522%253A%2522987654321%2522%252C%2522scope%2522%253A%2522r_basicprofile%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D9645523%26auth_type%3DAC%26flow%3D%257B%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Ftech-tinder.com%252Fauth%252Flinkedin%2522%252C%2522codeChallenge%2522%253Anull%252C%2522codeChallengeMethod%2522%253Anull%252C%2522externalBindingKey%2522%253Anull%252C%2522loginHint%2522%253Anull%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522flowHint%2522%253Anull%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522appId%2522%253A9645523%252C%2522creationTime%2522%253A1556410651277%252C%2522state%2522%253A%2522987654321%2522%252C%2522scope%2522%253A%2522r_basicprofile%2522%257D";
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.linkedinsignup = function () {
        var _this = this;
        this.linkedin.login(this.scopes, true)
            .then(function () { return _this.presentToast('Logged In'); })
            .catch(function (e) { return console.log('Error logging in', e); });
    };
    RegisterPage.prototype.isRecruiter = function () {
        this.userType = "recruiter";
        this.cardbackgroundr = "#006096";
        this.cardbackgroundf = "#ffffff";
        this.cardtextr = "#ffffff";
        this.cardtextf = "#000000";
    };
    RegisterPage.prototype.isFreelancer = function () {
        this.userType = "freelancer";
        this.cardbackgroundf = "#006096";
        this.cardbackgroundr = "#ffffff";
        this.cardtextf = "#ffffff";
        this.cardtextr = "#000000";
    };
    RegisterPage.prototype.signUp = function () {
        var _this = this;
        if (this.email == null || this.email == "" || !this.email.includes("@") || !this.email.includes(".")) {
            this.presentToast("Email should be in the format example@example.com");
        }
        else if (this.password == null || this.password == "") {
            this.presentToast("Password field cannot be left blank");
        }
        else {
            var load_1 = this.loadingCtrl.create({
                content: 'Creating your account',
            });
            load_1.present();
            this.auth.signUpWithEmail(this.email, this.password, this.fullname, this.userType).then(function () {
                if (_this.userType == "freelancer") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__setupprofile_setupprofile__["a" /* SetupprofilePage */], {
                        'fullname': _this.fullname
                    });
                }
                else if (_this.userType == "recruiter") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabsclient_tabsclient__["a" /* TabsclientPage */]);
                }
                load_1.dismiss();
            }).catch(function (err) {
                console.log(err);
                load_1.dismiss();
                _this.presentToast(err);
            });
        }
    };
    RegisterPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.alreadyaMember = function () {
        this.navCtrl.pop();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/register/register.html"*/'\n\n<ion-content class="content_bg" padding>\n\n<p align="center">\n  <img src="../../assets/icon.png" height="110">\n  <!-- <b style="font-size: 35px; color: white">ech-Tinder</b> -->\n</p>\n\n  <ion-list class="listt">  \n    \n      <ion-item class="listt">\n          <ion-label floating>Full Name</ion-label>\n          <ion-input [(ngModel)]="fullname"></ion-input>\n        </ion-item>\n\n      <ion-item class="listt">\n        <ion-label floating>E-mail or Phone</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n  \n      <ion-item class="listt">\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <h5 style="text-align: center; opacity: 0.7">I want to be a </h5>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-card\n            [ngStyle]="{\'background-color\': cardbackgroundr}"\n            (click)="isRecruiter()"\n             class="choosecard">\n             <h2 \n            [ngStyle]="{\'color\': cardtextr}"             \n             style="opacity: 0.8">Recruiter\n            </h2></ion-card>\n        </ion-col>\n        <ion-col>\n            <ion-card \n            [ngStyle]="{\'background-color\': cardbackgroundf}"            \n            (click)="isFreelancer()" class="choosecard">\n            <h2\n            [ngStyle]="{\'color\': cardtextf}"             \n             style="opacity: 0.8">Freelancer</h2>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    \n\n    <button ion-button (click)="signUp()" block class="btn success">JOIN NOW</button>\n\n    <!-- <p align="center"><b >Or</b></p> -->\n    <button ion-button \n    (click)="linkedinsignup()"\n    block style="border-radius: 5px;\n    margin-top: 20px;\n    margin-left: 30px;\n    width: 75vw;" \n    color="testone">\n    <ion-icon style="font-size: 30px;\n     position: absolute; left: 20px;" name="logo-linkedin"></ion-icon>                    \n     Join now with LinkedIn!\n</button>\n\n    <br>\n    <br>\n    \n    <div>\n      <!-- <b class="forgotp">F?</b> -->\n      <b class="joinn" (click)="alreadyaMember()">ALREADY A MEMBER?</b>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_linkedin_ngx__["a" /* LinkedIn */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import AuthProvider = firebase.auth.AuthProvider;
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.firedata = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]();
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthProvider.prototype.signInWithEmail = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider.prototype.signUpWithEmail = function (email, password, fullname, userType) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function () {
            _this.firedata.ref('/users').child(_this.afAuth.auth.currentUser.uid).set({
                fullname: fullname,
                userType: userType
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsclientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chats_chats__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shortlisted_shortlisted__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__freelancers_freelancers__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsclientPage = /** @class */ (function () {
    function TabsclientPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__freelancers_freelancers__["a" /* FreelancersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__chats_chats__["a" /* ChatsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__shortlisted_shortlisted__["a" /* ShortlistedPage */];
    }
    TabsclientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/tabsclient/tabsclient.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Freelancers" tabIcon="ios-people"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Chats" tabIcon="ios-chatbubbles"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="ShortListed" tabIcon="ios-contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/tabsclient/tabsclient.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], TabsclientPage);
    return TabsclientPage;
}());

//# sourceMappingURL=tabsclient.js.map

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 246;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/jobtags/jobtags.module": [
		637,
		1
	],
	"../pages/usertype/usertype.module": [
		638,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 289;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabsfreelancer_tabsfreelancer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as firebase from 'firebase';


var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, toastCtrl, storage, auth, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.auth = auth;
        this.navParams = navParams;
        // firebase: firebase;
        this.email = "q@gmail.com";
        this.password = "aaaaaaaa";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogintwoPage');
    };
    LoginPage.prototype.signIn = function () {
        var _this = this;
        if (this.email == null || this.email == "" || !this.email.includes("@") || !this.email.includes(".")) {
            this.presentToast("Email should be in the format example@example.com");
        }
        else if (this.password == null || this.password == "") {
            this.presentToast("Password field cannot be left blank");
        }
        else {
            var load_1 = this.loadingCtrl.create({
                content: 'Logging you in',
            });
            load_1.present();
            this.auth.signInWithEmail(this.email, this.password).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabsfreelancer_tabsfreelancer__["a" /* TabsfreelancerPage */]);
                load_1.dismiss();
            }).catch(function (err) {
                console.log(err);
                load_1.dismiss();
                _this.presentToast(err);
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
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/login/login.html"*/'\n\n<ion-content class="content_bg" padding>\n\n    <br>\n  <br>\n  <p align="center">\n    <img src="../../assets/icon.png" height="110">\n    <!-- <b style="font-size: 35px; color: white">ech-Tinder</b> -->\n  </p>\n\n  <br>\n    <ion-list class="listt">  \n        <ion-item class="listt">\n          <ion-label floating>E-mail or Phone</ion-label>\n          <ion-input type="email" [(ngModel)]="email"></ion-input>\n        </ion-item>\n    \n        <ion-item class="listt">\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <button ion-button (click)="signIn()" block class="btn success">SIGN IN</button>\n\n      <!-- <p align="center"><b >Or</b></p> -->\n      <button ion-button \n      block style="border-radius: 5px;\n      margin-top: 20px;\n      margin-left: 30px;\n      width: 75vw;" \n      color="testone">\n      <ion-icon style="font-size: 30px;\n       position: absolute; left: 20px;" name="logo-linkedin"></ion-icon>                    \n       Sign in with LinkedIn\n  </button>\n\n      <br>\n      <br>\n      \n      <div>\n        <b class="forgotp">FORGOT PASSWORD?</b>\n        <b class="joinn" (click)="signUp()">JOIN NOW</b>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatdetailsPage = /** @class */ (function () {
    function ChatdetailsPage(navParams, chatService, events) {
        var _this = this;
        this.chatService = chatService;
        this.events = events;
        this.msgList = [];
        this.editorMsg = '';
        this.showEmojiPicker = false;
        // Get the navParams toUserId parameter
        this.toUser = {
            id: navParams.get('toUserId'),
            name: navParams.get('username')
        };
        // Get mock user information
        this.chatService.getUserInfo()
            .then(function (res) {
            _this.user = res;
        });
    }
    ChatdetailsPage.prototype.ionViewWillLeave = function () {
        // unsubscribe
        this.events.unsubscribe('chat:received');
    };
    ChatdetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //get message list
        this.getMsg();
        // Subscribe to received  new message events
        this.events.subscribe('chat:received', function (msg) {
            _this.pushNewMsg(msg);
        });
    };
    ChatdetailsPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    ChatdetailsPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.focus();
        }
        else {
            this.setTextareaScroll();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * @name getMsg
     * @returns {Promise<ChatMessage[]>}
     */
    ChatdetailsPage.prototype.getMsg = function () {
        var _this = this;
        // Get mock message list
        return this.chatService
            .getMsgList()
            .subscribe(function (res) {
            _this.msgList = res;
            _this.scrollToBottom();
        });
    };
    /**
     * @name sendMsg
     */
    ChatdetailsPage.prototype.sendMsg = function () {
        var _this = this;
        if (!this.editorMsg.trim())
            return;
        // Mock message
        var id = Date.now().toString();
        var newMsg = {
            messageId: Date.now().toString(),
            userId: this.user.id,
            userName: this.user.name,
            userAvatar: this.user.avatar,
            toUserId: this.toUser.id,
            time: Date.now(),
            message: this.editorMsg,
            status: 'pending'
        };
        this.pushNewMsg(newMsg);
        this.editorMsg = '';
        if (!this.showEmojiPicker) {
            this.focus();
        }
        this.chatService.sendMsg(newMsg)
            .then(function () {
            var index = _this.getMsgIndexById(id);
            if (index !== -1) {
                _this.msgList[index].status = 'success';
            }
        });
    };
    /**
     * @name pushNewMsg
     * @param msg
     */
    ChatdetailsPage.prototype.pushNewMsg = function (msg) {
        var userId = this.user.id, toUserId = this.toUser.id;
        // Verify user relationships
        if (msg.userId === userId && msg.toUserId === toUserId) {
            this.msgList.push(msg);
        }
        else if (msg.toUserId === userId && msg.userId === toUserId) {
            this.msgList.push(msg);
        }
        this.scrollToBottom();
    };
    ChatdetailsPage.prototype.getMsgIndexById = function (id) {
        return this.msgList.findIndex(function (e) { return e.messageId === id; });
    };
    ChatdetailsPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatdetailsPage.prototype.focus = function () {
        if (this.messageInput && this.messageInput.nativeElement) {
            this.messageInput.nativeElement.focus();
        }
    };
    ChatdetailsPage.prototype.setTextareaScroll = function () {
        var textarea = this.messageInput.nativeElement;
        textarea.scrollTop = textarea.scrollHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatdetailsPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChatdetailsPage.prototype, "messageInput", void 0);
    ChatdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatdetails',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/chatdetails/chatdetails.html"*/'<ion-header>\n\n  <ion-navbar color="light">\n    <ion-title>{{toUser.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of msgList"\n         class="message"\n         [class.left]=" msg.userId === toUser.id "\n         [class.right]=" msg.userId === user.id ">\n      <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n      <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>\n            <!-- {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p> -->\n        </div>\n        <div class="msg-content">\n          <span class="triangle"></span>\n          <p class="line-breaker ">{{msg.message}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n <div class="input-wrap">\n    <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n      <ion-icon name="md-happy"></ion-icon>\n    </button>\n    <textarea #chat_input\n              placeholder="Text Input"\n              [(ngModel)]="editorMsg"\n              (keyup.enter)="sendMsg()"\n              (focusin)="onFocus()">\n    </textarea>\n    <button ion-button clear icon-only item-right (click)="sendMsg()">\n      <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n    </button>\n  </div>\n   <!-- <emoji-picker [(ngModel)]="editorMsg"></emoji-picker> -->\n</ion-footer>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/chatdetails/chatdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ChatdetailsPage);
    return ChatdetailsPage;
}());

//# sourceMappingURL=chatdetails.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

var UserInfo = /** @class */ (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatService = /** @class */ (function () {
    function ChatService(http, events) {
        this.http = http;
        this.events = events;
    }
    ChatService.prototype.mockNewMsg = function (msg) {
        var _this = this;
        var mockMsg = {
            messageId: Date.now().toString(),
            userId: '210000198410281948',
            userName: 'Hancock',
            userAvatar: './assets/to-user.jpg',
            toUserId: '140000198202211138',
            time: Date.now(),
            message: msg.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat:received', mockMsg, Date.now());
        }, Math.random() * 1800);
    };
    ChatService.prototype.getMsgList = function () {
        var msgListUrl = './assets/mock/msg-list.json';
        return this.http.get(msgListUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) { return response.array; }));
    };
    ChatService.prototype.sendMsg = function (msg) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(msg); }, Math.random() * 1000); })
            .then(function () { return _this.mockNewMsg(msg); });
    };
    ChatService.prototype.getUserInfo = function () {
        var userInfo = {
            id: '140000198202211138',
            name: 'Luff',
            avatar: './assets/user.jpg'
        };
        return new Promise(function (resolve) { return resolve(userInfo); });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobsPage = /** @class */ (function () {
    function JobsPage(navCtrl, toastCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        Window["myComponent"] = this;
    }
    JobsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loadMap();
        this.geolocation.getCurrentPosition().then(function (res) {
            _this.presentToast(res);
        });
    };
    JobsPage.prototype.populateMap = function (map) {
        var icon = {
            url: '../../assets/icon/dot.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var text = document.getElementById("intitalstring");
        var initialwindow = new google.maps.InfoWindow({
            content: text
        });
        var features = [
            {
                position: new google.maps.LatLng(-33.91721, 151.22630),
                type: 'info',
            }, {
                position: new google.maps.LatLng(-33.91539, 151.22820),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91747, 151.22912),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91910, 151.22907),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91872, 151.23089),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91784, 151.23094),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91682, 151.23149),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91790, 151.23463),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91666, 151.23468),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.916988, 151.233640),
                type: 'info'
            }, {
                position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
                type: 'parking'
            }
        ];
        var markerslist = [];
        for (var i = 0; i < features.length; i++) {
            var marker = new google.maps.Marker({
                position: features[i].position,
                icon: icon,
                map: map
            });
            markerslist.push(marker);
        }
        ;
        // console.log(markerslist);
        // for(var i = 0; i < markerslist.length; i++){
        //   marker.addListener('click', (event) =>  {
        //     // initialwindow.open(map, marker);
        //   });
        // }
        markerslist.forEach(function (mymarker) {
            mymarker.addListener('click', function (event) {
                initialwindow.open(map, mymarker);
            });
        });
    };
    JobsPage.prototype.viewProfile = function () {
        // this.navCtrl.push(DetailsfreelancerPage);
    };
    JobsPage.prototype.loadMap = function () {
        var mapStyle = [
            {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];
        var latLng = new google.maps.LatLng(-33.91722, 151.23064);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.map.set('styles', mapStyle);
        this.addDefaultMarker(this.map, latLng);
        this.populateMap(this.map);
        this.map.addListener('click', function (e) {
            console.log('Clicked');
        });
    };
    JobsPage.prototype.addDefaultMarker = function (map, position) {
        var icon = {
            url: '../../assets/icon/red.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var defmarker = new google.maps.Marker({
            position: position,
            map: map,
            // icon: icon,
            // animation: google.maps.Animation.BOUNCE,
            title: 'Hello World!'
        });
        defmarker.addListener('click', function () {
            map.setZoom(15);
            map.panTo(defmarker.getPosition());
        });
        return defmarker;
    };
    JobsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], JobsPage.prototype, "mapElement", void 0);
    JobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobs',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/jobs/jobs.html"*/'<!-- <ion-header>\n  <ion-navbar color="transparent">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n      <ion-icon name="menu" color="dark"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-searchbar class="searchitem"\n    animated="true" \n   placeholder="Search for talents close to you"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSecondModal()">\n          <ion-icon  class="icon ion-home custom-icon" name="notifications"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="maincontent">\n\n\n\n\n\n  <ion-fab bottom right >\n    <button color="testone" ion-fab mini>\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-fab bottom right style="margin-right: 45px">\n    <button color="testone" ion-fab mini>\n      <ion-icon name="md-remove"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n\n  <div  #map id="map">\n  </div>\n\n\n  <ion-card class="headercard">\n    <ion-grid style="height: 50px;">\n      <ion-row>\n        <ion-col col-1>\n        <ion-icon menuToggle style="font-size: 27px; margin-left: 10px; float: left;" \n        name="menu" color="dark"></ion-icon>                      \n        </ion-col>\n\n        <ion-col>\n          <ion-searchbar animated="true" \n          placeholder="Find jobs close to you" class="mysearch"></ion-searchbar>\n            <!-- <ion-searchbar animated="true" \n        placeholder="Search for talents close to you" class="mysearchbar"></ion-searchbar>-->\n        </ion-col>\n\n        <ion-col col-1>\n        <ion-icon style="font-size: 27px; \n        margin-right: 10px; float: right;" name="notifications-outline" \n        color="dark"></ion-icon>                                  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- <div>\n        <ion-icon style="font-size: 27px; margin-left: 20px; float: left; margin-top: 1px; margin-bottom: 1px;" name="menu" color="dark"></ion-icon>            \n        <ion-searchbar style="float: left;" animated="true" \n        placeholder="Search for talents close to you" class="mysearchbar"></ion-searchbar>\n    </div>\n         -->\n    </ion-card>\n\n  <p align="center" id="intitalstring">\n    <b>Edung Divinefavour</b><br>\n    Hourly rate - $12.5/hr<br>\n    Skills - Android | UI/UX\n    <br>\n    <br>\n    <button onclick="Window.myComponent.viewProfile()" class="contactbtn">View Profile</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/jobs/jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation_ngx__["a" /* Geolocation */]])
    ], JobsPage);
    return JobsPage;
}());

//# sourceMappingURL=jobs.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilefreelancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countriesapi_countriesapi__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilefreelancerPage = /** @class */ (function () {
    function ProfilefreelancerPage(navCtrl, modalCtrl, keyboard, loadingCtrl, toastCtrl, countriesApi, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.countriesApi = countriesApi;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]();
        this.list = ['Android',
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
        this.input = '';
        this.countries = [];
        this.skillstobeuploaded = [];
        this.isshidden = true;
        this.writeup = "";
        this.experienceslist = [];
        this.shouldhidetext = false;
        this.shouldhidetexttwo = false;
        this.getData = function (data) {
            return new Promise(function (resolve, reject) {
                resolve();
                console.log(data);
                _this.writeup = data;
                _this.shouldhidetexttwo = true;
            });
        };
        this.fullname = this.navParams.get('fullname');
        this.hourlyrate = '0';
    }
    ProfilefreelancerPage.prototype.add = function (item, i) {
        this.isshidden = false;
        // this.input = item;
        var currentskills = document.getElementById("currentskills");
        // if(this.skillstobeuploaded.length == 0){
        this.skillsstring = item + " | " + currentskills.innerHTML;
        currentskills.innerHTML = this.skillsstring;
        // console.log(item, i);
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
        this.input = "";
    };
    ProfilefreelancerPage.prototype.removeFocus = function () {
        this.keyboard.close();
    };
    ProfilefreelancerPage.prototype.ionViewDidLoad = function () {
        if (this.writeup.length != 0) {
            this.shouldhidetexttwo = true;
        }
    };
    ProfilefreelancerPage.prototype.search = function () {
        var _this = this;
        if (!this.input.trim().length || !this.keyboard.isOpen()) {
            this.countries = [];
            return;
        }
        this.countries = this.list.filter(function (item) { return item.toUpperCase().includes(_this.input.toUpperCase()); });
    };
    ProfilefreelancerPage.prototype.presentModal = function () {
        // const modal = this.modalCtrl.create(ModalPage);
        // modal.onDidDismiss(data => {
        //   console.log(data);
        //   this.writeup == data;
        //   });
        // modal.present();
        // this.navCtrl.push(ModalPage);
        // callback...
        // push page...
        // this.navCtrl.push(ModalPage, {
        // callback: this.myCallbackFunction
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalPage */], {
            // data: this.data,
            callback: this.getData
        });
    };
    ProfilefreelancerPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ProfilefreelancerPage.prototype.showBox = function (index) {
        var _this = this;
        var placeholder;
        var type;
        var classtouse;
        switch (index) {
            case 0:
                placeholder = "Full Name";
                type = 'text';
                break;
            case 1:
                placeholder = "Hourly Rate";
                type = 'number';
                break;
            case 3:
                placeholder = "Hourly Rate";
                type = 'number';
                this.presentModal();
                break;
        }
        var inputs = [
            {
                name: 'clickedsumtn',
                placeholder: placeholder,
                type: type
            }
        ];
        if (index == 2) {
            inputs = [
                {
                    name: 'role',
                    placeholder: 'Role',
                    type: 'text'
                },
                {
                    name: 'company',
                    placeholder: 'Company',
                    type: 'text'
                },
            ];
        }
        var alert = this.alertCtrl.create({
            inputs: inputs,
            cssClass: classtouse,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        switch (index) {
                            case 0:
                                _this.fullname = data.clickedsumtn;
                                break;
                            case 1:
                                _this.hourlyrate = data.clickedsumtn;
                                break;
                            case 2:
                                if (data.role != "" && data.role != null && data.company != "" && data.company != null) {
                                    _this.experienceslist.push({
                                        role: data.role,
                                        company: data.company
                                    });
                                }
                                else if (data.role == "" || data.role == null) {
                                    _this.presentToast("Role Field Cannot be left blank");
                                }
                                else if (data.company == "" || data.company == null) {
                                    _this.presentToast("Company name cannot be left blank");
                                }
                        }
                        if (_this.experienceslist.length != 0) {
                            _this.shouldhidetext = true;
                        }
                    }
                }
            ]
        });
        if (index != 3) {
            alert.present();
        }
        else if (index == 3) {
            alert.dismiss();
        }
    };
    ProfilefreelancerPage.prototype.removeExperience = function (experience, index) {
        this.experienceslist.splice(index, 1);
        console.log(this.experienceslist.length);
        if (this.experienceslist.length == 0) {
            this.shouldhidetext = false;
        }
    };
    ProfilefreelancerPage.prototype.revert = function () {
        // console.log(this.skillstobeuploaded.length);
        console.log(this.skillstobeuploaded[this.skillstobeuploaded.length - 1]);
        this.skillsstring = this.skillsstring.replace(this.skillstobeuploaded[this.skillstobeuploaded.length - 1] + " | ", "");
        this.skillstobeuploaded.splice(this.skillstobeuploaded.length - 1);
        var currentskills = document.getElementById("currentskills");
        currentskills.innerHTML = this.skillsstring;
        if (this.skillstobeuploaded.length == 0) {
            this.isshidden = true;
        }
    };
    ProfilefreelancerPage.prototype.saveprofile = function () {
        var _this = this;
        var load = this.loadingCtrl.create({
            content: 'Setting up your Profile',
        });
        load.present();
        this.firedata.ref('/users').child(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid).update({
            hourlyRate: '$' + this.hourlyrate + '/hr',
            skillstags: this.skillstobeuploaded,
            experiences: this.experienceslist,
            aboutMe: this.writeup
        }).then(function () {
            // this.navCtrl.push(TabsfreelancerPage);
            load.dismiss();
            _this.presentToast("Profile Updated Succesfully");
        }).catch(function (err) {
            _this.presentToast(err);
            load.dismiss();
        });
    };
    ProfilefreelancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilefreelancer',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/profilefreelancer/profilefreelancer.html"*/'<ion-header>\n  <ion-navbar ion-fixed align-title="center"  color="light">\n      <ion-title color="primary">  \n        My Profile\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <p align="center">\n    <!-- <div class="user-photo"> -->\n      <img class="user-photo"\n       src="../../assets/one.jpg">\n    <!-- </div> -->\n  </p>\n\n  <div (click)="showBox(0)">\n      <h4 align="center">{{fullname}}\n          <ion-icon item-right name="ios-create-outline"></ion-icon></h4>\n  </div>\n\n  <div [hidden]="isshidden" (click)="revert()">\n      <p style="margin-left: 30px;margin-right:30px" id="currentskills" align="center">\n          <ion-icon item-right name="ios-remove-circle-outline"></ion-icon>\n        </p>\n\n  </div>\n\n  <div (click)="showBox(1)">\n      <p align="center">Hourly Rate - ${{hourlyrate}}/hr\n          <ion-icon item-right name="ios-create-outline"></ion-icon>\n        </p>\n  </div>\n\n  <br>\n    <ion-list>\n\n        <ion-list-header>Skills\n        </ion-list-header>\n\n            <div class="autocomplete">\n                <ion-item>\n                  <ion-input  type="text" \n                              placeholder="Search skill tags here"\n                              [(ngModel)]="input"\n                              (ionChange)="search()"\n                              (ionBlur)="removeFocus()"\n                              debounce=500>\n                            </ion-input>\n                </ion-item>\n                <ion-list>\n                  <ion-item *ngFor="let country of countries" (click)="add(country, i)">\n                    {{country}}\n                  </ion-item>\n                </ion-list>\n          </div>\n\n      <ion-list-header (click)="showBox(2)">My Experiences\n          <ion-icon item-right name="ios-create-outline"></ion-icon>\n      </ion-list-header>\n\n      <p [hidden]="shouldhidetext" style="margin-left: 20px">No Experiences Added Yet, Click the icon above to add experiences</p>\n\n      <ion-item *ngFor="let experience of experienceslist; let i= index">\n        <ion-avatar item-left>\n          <img src="../../assets/upwork.png">\n        </ion-avatar>\n        <b>{{experience.role}}</b><br>\n        {{experience.company}}\n        <ion-icon \n        name="ios-remove-circle-outline" (click)="removeExperience(experience, i)" item-right></ion-icon>\n      </ion-item>\n<!--   \n      <ion-item>\n          <ion-avatar item-left>\n            <img src="../../assets/upwork.png">\n          </ion-avatar>\n          <b>Android Developer</b><br>\n          Upwork\n        <ion-icon name="ios-remove-circle-outline" item-right></ion-icon>\n        </ion-item>\n -->\n\n\n\n\n\n\n\n        <br>\n        <ion-list-header (click)="showBox(3)">About Me\n          <ion-icon item-right name="ios-create-outline"></ion-icon>\n        </ion-list-header>\n\n      <p [hidden]="shouldhidetexttwo" style="margin-left: 20px">Click the button above to tell the Tech-Tinder community about yourself</p>\n\n        <div id="writeup" style="margin: 15px; font-size: 16px">\n           {{writeup}}\n        </div>\n    </ion-list>\n\n    <p align="center">\n        <button ion-button outline (click)="saveprofile()" class="bsuccess">SAVE PROFILE</button>\n    </p>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/profilefreelancer/profilefreelancer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_countriesapi_countriesapi__["a" /* CountriesapiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProfilefreelancerPage);
    return ProfilefreelancerPage;
}());

//# sourceMappingURL=profilefreelancer.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_countriesapi_countriesapi__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabsfreelancer_tabsfreelancer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SetupprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetupprofilePage = /** @class */ (function () {
    function SetupprofilePage(navCtrl, modalCtrl, keyboard, loadingCtrl, toastCtrl, countriesApi, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.keyboard = keyboard;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.countriesApi = countriesApi;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]();
        this.list = ['Android',
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
        this.input = '';
        this.countries = [];
        this.skillstobeuploaded = [];
        this.isshidden = true;
        this.writeup = "";
        this.experienceslist = [];
        this.shouldhidetext = false;
        this.stringtoupload = "";
        this.shouldhidetexttwo = false;
        this.getData = function (data) {
            return new Promise(function (resolve, reject) {
                resolve();
                console.log(data);
                _this.writeup = data;
                _this.shouldhidetexttwo = true;
            });
        };
        this.fullname = this.navParams.get('fullname');
        this.hourlyrate = '0';
    }
    SetupprofilePage.prototype.add = function (item, i) {
        this.isshidden = false;
        // this.input = item;
        var currentskills = document.getElementById("currentskills");
        // if(this.skillstobeuploaded.length == 0){
        this.skillsstring = item + " | " + currentskills.innerHTML;
        this.stringtoupload = this.stringtoupload + item + ' | ';
        console.log(this.stringtoupload);
        currentskills.innerHTML = this.skillsstring;
        // console.log(item, i);
        this.skillstobeuploaded.push(item);
        this.countries = [];
        this.input = "";
    };
    SetupprofilePage.prototype.removeFocus = function () {
        this.keyboard.close();
    };
    SetupprofilePage.prototype.ionViewDidLoad = function () {
        if (this.writeup.length != 0) {
            this.shouldhidetexttwo = true;
        }
    };
    SetupprofilePage.prototype.search = function () {
        var _this = this;
        if (!this.input.trim().length || !this.keyboard.isOpen()) {
            this.countries = [];
            return;
        }
        this.countries = this.list.filter(function (item) { return item.toUpperCase().includes(_this.input.toUpperCase()); });
    };
    SetupprofilePage.prototype.presentModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */], {
            // data: this.data,
            callback: this.getData
        });
    };
    SetupprofilePage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SetupprofilePage.prototype.showBox = function (index) {
        var _this = this;
        var placeholder;
        var type;
        var classtouse;
        switch (index) {
            case 0:
                placeholder = "Full Name";
                type = 'text';
                break;
            case 1:
                placeholder = "Hourly Rate";
                type = 'number';
                break;
            case 3:
                placeholder = "Hourly Rate";
                type = 'number';
                this.presentModal();
                break;
        }
        var inputs = [
            {
                name: 'clickedsumtn',
                placeholder: placeholder,
                type: type
            }
        ];
        if (index == 2) {
            inputs = [
                {
                    name: 'role',
                    placeholder: 'Role',
                    type: 'text'
                },
                {
                    name: 'company',
                    placeholder: 'Company',
                    type: 'text'
                },
            ];
        }
        var alert = this.alertCtrl.create({
            inputs: inputs,
            cssClass: classtouse,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        switch (index) {
                            case 0:
                                _this.fullname = data.clickedsumtn;
                                break;
                            case 1:
                                _this.hourlyrate = data.clickedsumtn;
                                break;
                            case 2:
                                if (data.role != "" && data.role != null && data.company != "" && data.company != null) {
                                    _this.experienceslist.push({
                                        role: data.role,
                                        company: data.company
                                    });
                                }
                                else if (data.role == "" || data.role == null) {
                                    _this.presentToast("Role Field Cannot be left blank");
                                }
                                else if (data.company == "" || data.company == null) {
                                    _this.presentToast("Company name cannot be left blank");
                                }
                        }
                        if (_this.experienceslist.length != 0) {
                            _this.shouldhidetext = true;
                        }
                    }
                }
            ]
        });
        if (index != 3) {
            alert.present();
        }
        else if (index == 3) {
            alert.dismiss();
        }
    };
    SetupprofilePage.prototype.removeExperience = function (experience, index) {
        this.experienceslist.splice(index, 1);
        console.log(this.experienceslist.length);
        if (this.experienceslist.length == 0) {
            this.shouldhidetext = false;
        }
    };
    SetupprofilePage.prototype.revert = function () {
        // console.log(this.skillstobeuploaded.length);
        console.log(this.skillstobeuploaded[this.skillstobeuploaded.length - 1]);
        this.skillsstring = this.skillsstring.replace(this.skillstobeuploaded[this.skillstobeuploaded.length - 1] + " | ", "");
        this.skillstobeuploaded.splice(this.skillstobeuploaded.length - 1);
        var currentskills = document.getElementById("currentskills");
        currentskills.innerHTML = this.skillsstring;
        if (this.skillstobeuploaded.length == 0) {
            this.isshidden = true;
        }
    };
    SetupprofilePage.prototype.saveprofile = function () {
        var _this = this;
        var load = this.loadingCtrl.create({
            content: 'Setting up your Profile',
        });
        load.present();
        this.firedata.ref('/users').child(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser.uid).update({
            hourlyRate: '$' + this.hourlyrate + '/hr',
            skillstags: this.skillstobeuploaded,
            skillsstring: this.stringtoupload,
            experiences: this.experienceslist,
            aboutMe: this.writeup
        }).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabsfreelancer_tabsfreelancer__["a" /* TabsfreelancerPage */]);
            load.dismiss();
        }).catch(function (err) {
            _this.presentToast(err);
            load.dismiss();
        });
    };
    SetupprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setupprofile',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/setupprofile/setupprofile.html"*/'<ion-header>\n    <ion-navbar ion-fixed align-title="center"  color="light">\n        <ion-title color="primary">  \n          Setup Your Profile\n        </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <p align="center">\n      <!-- <div class="user-photo"> -->\n        <img class="user-photo"\n         src="../../assets/one.jpg">\n      <!-- </div> -->\n    </p>\n  \n    <div (click)="showBox(0)">\n        <h4 align="center">{{fullname}}\n            <ion-icon item-right name="ios-create-outline"></ion-icon></h4>\n    </div>\n\n    <div [hidden]="isshidden" (click)="revert()">\n        <p style="margin-left: 30px;margin-right:30px" id="currentskills" align="center">\n            <ion-icon item-right name="ios-remove-circle-outline"></ion-icon>\n          </p>\n\n    </div>\n\n    <div (click)="showBox(1)">\n        <p align="center">Hourly Rate - ${{hourlyrate}}/hr\n            <ion-icon item-right name="ios-create-outline"></ion-icon>\n          </p>\n    </div>\n \n    <br>\n      <ion-list>\n\n          <ion-list-header>Skills\n          </ion-list-header>\n\n              <div class="autocomplete">\n                  <ion-item>\n                    <ion-input  type="text" \n                                placeholder="Search skill tags here"\n                                [(ngModel)]="input"\n                                (ionChange)="search()"\n                                (ionBlur)="removeFocus()"\n                                debounce=500>\n                              </ion-input>\n                  </ion-item>\n                  <ion-list>\n                    <ion-item *ngFor="let country of countries" (click)="add(country, i)">\n                      {{country}}\n                    </ion-item>\n                  </ion-list>\n            </div>\n\n        <ion-list-header (click)="showBox(2)">My Experiences\n            <ion-icon item-right name="ios-create-outline"></ion-icon>\n        </ion-list-header>\n\n        <p [hidden]="shouldhidetext" style="margin-left: 20px">No Experiences Added Yet, Click the icon above to add experiences</p>\n  \n        <ion-item *ngFor="let experience of experienceslist; let i= index">\n          <ion-avatar item-left>\n            <img src="../../assets/upwork.png">\n          </ion-avatar>\n          <b>{{experience.role}}</b><br>\n          {{experience.company}}\n          <ion-icon \n          name="ios-remove-circle-outline" (click)="removeExperience(experience, i)" item-right></ion-icon>\n        </ion-item>\n<!--   \n        <ion-item>\n            <ion-avatar item-left>\n              <img src="../../assets/upwork.png">\n            </ion-avatar>\n            <b>Android Developer</b><br>\n            Upwork\n          <ion-icon name="ios-remove-circle-outline" item-right></ion-icon>\n          </ion-item>\n   -->\n\n\n\n\n\n\n\n          <br>\n          <ion-list-header (click)="showBox(3)">About Me\n            <ion-icon item-right name="ios-create-outline"></ion-icon>\n          </ion-list-header>\n\n        <p [hidden]="shouldhidetexttwo" style="margin-left: 20px">Click the button above to tell the Tech-Tinder community about yourself</p>\n\n          <div id="writeup" style="margin: 15px; font-size: 16px">\n             {{writeup}}\n          </div>\n      </ion-list>\n\n      <p align="center">\n          <button ion-button outline (click)="saveprofile()" class="bsuccess">SAVE PROFILE</button>\n      </p>\n  </ion-content>\n  '/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/setupprofile/setupprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_countriesapi_countriesapi__["a" /* CountriesapiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SetupprofilePage);
    return SetupprofilePage;
}());

//# sourceMappingURL=setupprofile.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortlistedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShortlistedPage = /** @class */ (function () {
    function ShortlistedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShortlistedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShortlistedPage');
    };
    ShortlistedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shortlisted',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/shortlisted/shortlisted.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSecondModal()">\n          <ion-icon  class="icon ion-home custom-icon" name="ios-search"></ion-icon>\n      </button>\n  </ion-buttons>\n    <ion-title>Shortlisted</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n\n\n      <ion-card>\n        <ion-item  (click)="gotoChat(user)">\n          <ion-avatar item-left>\n            <img src="../../assets/one.jpg">\n          </ion-avatar>\n          <b>Edung Divine (Expert iOS Developer)</b>\n          <p>Have you started to make the designs</p>\n        </ion-item>\n\n      </ion-card>\n\n\n      <ion-card>\n        <ion-item  (click)="gotoChat(user)">\n          <ion-avatar item-left>\n            <img src="../../assets/three.jpg">\n          </ion-avatar>\n          <b>Edung Divine (Expert iOS Developer)</b>\n          <p>Have you started to make the designs</p>\n        </ion-item>\n\n      </ion-card>\n      <ion-card>\n        <ion-item  (click)="gotoChat(user)">\n          <ion-avatar item-left>\n            <img src="../../assets/three.jpg">\n          </ion-avatar>\n          <b>Edung Divine (Expert iOS Developer)</b>\n          <p>Have you started to make the designs</p>\n        </ion-item>\n\n      </ion-card>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/shortlisted/shortlisted.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ShortlistedPage);
    return ShortlistedPage;
}());

//# sourceMappingURL=shortlisted.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detailsfreelancer_detailsfreelancer__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FreelancersPage = /** @class */ (function () {
    // circle;
    function FreelancersPage(navCtrl, keyboard, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.firedata = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database();
        this.firebaseArray = [];
        this.markerslist = [];
        this.zoomvalue = 20;
        this.radius = 0;
        this.num = 20;
        this.list = ['Android',
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
        this.searchedtag = '';
        this.countries = [];
        Window["myComponent"] = this;
    }
    FreelancersPage.prototype.add = function (item, i) {
        this.countries = [];
        this.searchedtag = "";
    };
    FreelancersPage.prototype.search = function () {
        var _this = this;
        if (!this.searchedtag.trim().length || !this.keyboard.isOpen()) {
            this.countries = [];
            return;
        }
        this.countries = this.list.filter(function (item) { return item.toUpperCase().includes(_this.input.toUpperCase()); });
    };
    FreelancersPage.prototype.removeFocus = function () {
        this.keyboard.close();
    };
    FreelancersPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    FreelancersPage.prototype.populateMap = function (map) {
        var _this = this;
        this.getdist();
        var icon = {
            url: '../../assets/icon/dot.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var load = this.loadingCtrl.create({
            content: 'Loading full map...',
        });
        load.present();
        this.firedata.ref('/users').orderByChild('mjbmmn').once('value', function (snapshot) {
            var result = snapshot.val();
            var temparr = [];
            for (var key in result) {
                temparr.push(result[key]);
            }
            load.dismiss();
            // setTimeout(() => { map.setZoom(15);}, 1200);
            var contentwindow = new google.maps.InfoWindow({});
            temparr.forEach(function (firebaseSpot) {
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(firebaseSpot.lat, firebaseSpot.lng),
                    icon: icon,
                    animation: google.maps.Animation.DROP,
                    map: map
                });
                // var loc1 = new google.maps.LatLng(52.5773139, 1.3712427);
                // var loc2 = marker.getPosition();
                // // var distancefromclient = google.maps.geometry.spherical.computeDistanceBetween (loc1, loc2);
                // var bla = this.getDistance(loc1, loc2)
                // console.log(firebaseSpot.skillstags);
                _this.markerslist.push(marker);
                _this.storage.set("clickedmarker", firebaseSpot);
                // var dist = loc2.distanceFrom(loc1);
                // alert(dist/1000);
                // console.log((bla/1000).toFixed(2));
                // for(var i:any = 0; i < firebaseSpot.skillstags.length ; i ++){
                //   console.log(i);
                // }
                var strinh = '<p align="center" id="intitalstring">' +
                    '<b>' + firebaseSpot.fullname + '</b><br>' +
                    'Hourly rate - ' + firebaseSpot.hourlyRate + '<br>' +
                    'Skills - ' + firebaseSpot.skillsstring + '<br>' +
                    '<br>' +
                    '<button onclick="Window.myComponent.viewProfile()" class="contactbtn">View Profile</button>' +
                    '</p>';
                marker.addListener('click', function (event) {
                    if (map.getZoom() != _this.zoomvalue && map.getZoom() != _this.zoomvalue) {
                        map.setZoom(16);
                        map.panTo(marker.getPosition());
                    }
                    else if (map.getZoom() == _this.zoomvalue) {
                        contentwindow.setContent(strinh);
                        _this.storage.set("clickedmarker", firebaseSpot);
                        contentwindow.open(map, marker);
                    }
                });
            });
        });
    };
    FreelancersPage.prototype.rad = function (x) {
        return x * Math.PI / 180;
    };
    ;
    FreelancersPage.prototype.getDistance = function (p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.rad(p2.lat() - p1.lat());
        var dLong = this.rad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.rad(p1.lat())) * Math.cos(this.rad(p2.lat())) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; // returns the distance in meter
    };
    FreelancersPage.prototype.viewProfile = function () {
        var _this = this;
        this.storage.get("clickedmarker").then(function (res) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detailsfreelancer_detailsfreelancer__["a" /* DetailsfreelancerPage */], { 'res': res });
        });
    };
    FreelancersPage.prototype.getdist = function () {
        google.maps.LatLng.prototype.distanceFrom = function (latlng) {
            var lat = [this.lat(), latlng.lat()];
            var lng = [this.lng(), latlng.lng()];
            var R = 6378137;
            var dLat = (lat[1] - lat[0]) * Math.PI / 180;
            var dLng = (lng[1] - lng[0]) * Math.PI / 180;
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat[0] * Math.PI / 180) * Math.cos(lat[1] * Math.PI / 180) *
                    Math.sin(dLng / 2) * Math.sin(dLng / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            return Math.round(d);
        };
    };
    FreelancersPage.prototype.loadMap = function () {
        var _this = this;
        var mapStyle = [
            {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];
        var latLng = new google.maps.LatLng(-33.91722, 151.23064);
        var mapOptions = {
            center: latLng,
            zoom: this.zoomvalue,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.map.set('styles', mapStyle);
        this.addDefaultMarker(this.map, latLng);
        this.populateMap(this.map);
        this.map.addListener('click', function (e) {
            console.log(_this.map.getZoom());
        });
    };
    FreelancersPage.prototype.addDefaultMarker = function (map, position) {
        var icon = {
            url: '../../assets/icon/red.png',
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        var defmarker = new google.maps.Marker({
            position: position,
            map: map,
            // icon: icon,
            // animation: google.maps.Animation.BOUNCE,
            title: 'Hello World!'
        });
        defmarker.addListener('click', function () {
            map.setZoom(this.zoomvalue);
            map.panTo(defmarker.getPosition());
        });
        // this.circle = new google.maps.Circle({
        //   map: map,
        //   radius: this.radius,    // 10 miles in metres
        //   fillColor: '#AA0000'
        // });
        // this.circle.bindTo('center', defmarker, 'position');
        return defmarker;
    };
    FreelancersPage.prototype.increase = function () {
        this.radius = this.radius + 5;
        if (this.radius >= 0) {
            this.num = this.num - 0.2;
            // this.circle.setRadius(this.radius);
            this.map.setZoom(this.num);
        }
        // this.markerslist.forEach(marker =>{
        // console.log(marker);
        // var loc1 = new google.maps.LatLng(52.5773139, 1.3712427);
        // var loc2 = marker.getPosition();
        // var bla = this.getDistance(loc1, loc2)
        // if(this.radius >= bla){
        //   console.log("is more")
        // }
        // });
        // console.log(this.radius);
    };
    FreelancersPage.prototype.eventHandler = function (keyCode) {
        console.log(keyCode);
        if (keyCode == 13) {
            // this.radius = this.radius - 1;
            console.log(this.radius);
            // this.map.setZoom(this.radius);
        }
    };
    FreelancersPage.prototype.reduce = function () {
        if (this.radius >= 0) {
            this.radius = this.radius - 5;
            this.num = this.num + 0.2;
            // this.circle.setRadius(this.radius);
            this.map.setZoom(this.num);
        }
        // this.markerslist.forEach(marker =>{
        // var loc1 = new google.maps.LatLng(52.5773139, 1.3712427);
        // var loc2 = marker.getPosition();
        // var bla = this.getDistance(loc1, loc2)
        // if(this.radius <= bla){
        //   console.log("is more")
        // }
        // });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], FreelancersPage.prototype, "mapElement", void 0);
    FreelancersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-freelancers',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/freelancers/freelancers.html"*/'<!-- <ion-header>\n  <ion-navbar color="transparent">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n      <ion-icon name="menu" color="dark"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-searchbar class="searchitem"\n    animated="true" \n   placeholder="Search for talents close to you"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openSecondModal()">\n          <ion-icon  class="icon ion-home custom-icon" name="notifications"></ion-icon>\n      </button>\n  </ion-buttons>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="maincontent">\n\n  <ion-fab bottom right (click)="increase()" >\n    <button color="testone" ion-fab mini>\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-input [(ngModel)]="radius" (keypress)="eventHandler($event.keyCode)" class="bottominput" bottom right placeholder="radius">\n      \n  </ion-input>\n\n  <ion-fab bottom (click)="reduce()" right style="margin-right: 85px">\n    <button color="testone" ion-fab mini>\n      <ion-icon name="md-remove"></ion-icon>\n    </button>\n  </ion-fab>\n\n\n\n  <div  #map id="map">\n  </div>\n\n\n  <ion-card class="headercard">\n    <ion-grid style="height: 50px;">\n      <ion-row>\n        <ion-col col-1>\n        <ion-icon menuToggle style="font-size: 27px; margin-left: 10px; float: left;" \n        name="menu" color="dark"></ion-icon>                      \n        </ion-col>\n\n        <ion-col>\n          <ion-searchbar animated="true" \n          placeholder="Find talents close to you"\n          (ionChange)="search()"\n          (ionBlur)="removeFocus()"\n          debounce=500 [(ngModel)]="searchedtag" class="mysearch"></ion-searchbar>\n            <!-- <ion-searchbar animated="true" \n        placeholder="Search for talents close to you" class="mysearchbar"></ion-searchbar>-->\n        </ion-col>\n\n        <ion-list>\n          <ion-item *ngFor="let country of countries" (click)="add(country, i)">\n            {{country}}\n          </ion-item>\n        </ion-list>\n\n        <ion-col col-1>\n        <ion-icon style="font-size: 27px; \n        margin-right: 10px; float: right;" name="notifications-outline" \n        color="dark"></ion-icon>                                  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- <div>\n        <ion-icon style="font-size: 27px; margin-left: 20px; float: left; margin-top: 1px; margin-bottom: 1px;" name="menu" color="dark"></ion-icon>            \n        <ion-searchbar style="float: left;" animated="true" \n        placeholder="Search for talents close to you" class="mysearchbar"></ion-searchbar>\n    </div>\n         -->\n    </ion-card>\n\n  <p align="center" id="intitalstring">\n    <b>Edung Divinefavour</b><br>\n    Hourly rate - $12.5/hr<br>\n    Skills - Android | UI/UX\n    <br>\n    <br>\n    <button onclick="Window.myComponent.viewProfile()" class="contactbtn">View Profile</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/freelancers/freelancers.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _e || Object])
    ], FreelancersPage);
    return FreelancersPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=freelancers.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsfreelancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailsfreelancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsfreelancerPage = /** @class */ (function () {
    function DetailsfreelancerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.res = this.navParams.get('res');
        // console.log(this.res);
        this.fullname = this.res.fullname;
        this.skills = this.res.skillsstring;
        this.hourlyrate = this.res.hourlyRate;
        this.writeup = this.res.aboutMe;
        this.experiences = this.res.experiences;
        console.log(this.experiences);
    }
    DetailsfreelancerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsfreelancerPage');
    };
    DetailsfreelancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detailsfreelancer',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/detailsfreelancer/detailsfreelancer.html"*/'<ion-header>\n    <ion-navbar ion-fixed align-title="center"  color="light">\n        <ion-title color="primary">  \n          Profile\n        </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  \n    <p align="center">\n      <!-- <div class="user-photo"> -->\n        <img class="user-photo"\n         src="../../assets/one.jpg">\n      <!-- </div> -->\n    </p>\n\n    <h4 align="center">{{fullname}}</h4>\n    <p align="center">{{skills}}\n    </p>\n\n    <p align="center">Hourly Rate - {{hourlyrate}}</p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <button class="btn">MESSAGE</button>\n        </ion-col>\n\n        <ion-col>\n          <button class="btntwo">\n            SHORTLIST\n      </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <br>\n    <ion-list>\n      <ion-list>\n        <ion-list-header>Last Experience</ion-list-header>\n\n        <ion-item *ngFor="let experience of experiences">\n          <ion-avatar item-left>\n            <img src="../../assets/upwork.png">\n          </ion-avatar>\n          <b>{{experience.role}}</b><br>\n          {{experience.company}}\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-avatar item-left>\n              <img src="../../assets/upwork.png">\n            </ion-avatar>\n            <b>Android Developer</b><br>\n            Upwork\n          </ion-item> -->\n\n          <br>\n          <ion-list-header>About Edung</ion-list-header>\n          <div style="margin: 15px; font-size: 16px">\n              {{writeup}}\n          </div>\n      </ion-list>\n    </ion-list>\n\n    <!-- <div class="topdiv" >\n  \n      <div style="width: 100%; height: 10vh;"></div>\n      <div align="center"><b style="font-size: 16px; color: white">Expert Cross Platform Developer</b></div> \n      <div align="center" style="font-size: 14px; color: white">\n        <ion-icon></ion-icon>\n        Port Harcourt, Nigeria\n     </div>     \n     <div style="width: 100%; height: 3vh;"></div>\n     \n      <div align="center"><b style="font-size: 16px; margin-top: 10px; color: white">$12.50/hr</b></div> \n      \n      \n      <div class="user-photo">\n        <img src="../../assets/one.jpg">\n      </div>\n  \n  \n      \n      <ion-grid >\n        <ion-row style="padding-left: 110px; margin-top: 5vh">\n                <ion-col col-5>\n                    <div >\n                        <ion-card style="padding: 7px">\n                            Android\n                          </ion-card>\n                    </div>\n                    \n                  </ion-col>\n                    \n                  <ion-col col-4>\n                      <div >\n                          <ion-card style="padding: 7px">\n                              UI/UX\n                            </ion-card>\n                      </div>\n                      \n                    </ion-col>\n\n                   \n        </ion-row>\n      </ion-grid>\n  \n  \n    </div> -->\n<!--   \n    <div style="margin-top: 12vh"></div>\n    <div style="margin: 15px; font-size: 16px">\n        I am an Expert Cross platform Mobile Developer with over 4 years experience building mobile apps with Java, Kotlin, Swift, Objective-C, Ionic and Flutter. \n  \n        I build/maintain/debug mobile apps as a hobby, therefore, I have expert knowledge on a lot of areas and tools that extend the Android and iOS framework to whatever is to be achieved.\n        \n        Quality is very important to me so I always write readable and maintainable codes using best practices, clean architectural principles with reactive approach and MVVM pattern.\n        \n        I always ensure that every product is thoroughly tested on multiple devices before its release. I follow requirements strictly without missing a step and I can also share my ideas if you are nor sure of how something should work.\n        \n        I am reachable on Upwork and through any other means of communication. I am also comfortable working remotely with tools like Teamviewer, Anydesk or goToMeeting.. \n        \n        What matters to me is to actually make your ideas a reality. \n        I will like to be a part of your project and make it a success, nothing gives me more joy. \n        \n        I look forward to working with you\n    </div>\n   -->\n  \n    <!-- <div>\n      <ion-list>\n        \n            <ion-item-divider>\n                Account Info \n                <ion-icon color="white" name="ios-create-outline" \n                \n                item-right></ion-icon>   \n            </ion-item-divider>\n  \n            <ion-item detail-push (click)="showBox(0)">\n                Edung\n                <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>   \n            </ion-item>\n  \n            <ion-item detail-push (click)="showBox(1)">\n                Divinefavour \n                <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>   \n            </ion-item>\n  \n            <ion-item detail-push (click)="showBox(2)">\n                lawrenedickson49@gmail.com \n                <ion-icon color="white" name="ios-mail-outline" item-left></ion-icon>   \n            </ion-item>\n  \n  \n  \n  \n  \n            <ion-item-divider>\n                Change Password\n                <ion-icon color="white" name="ios-create-outline" \n                item-right></ion-icon>   \n            </ion-item-divider>\n  \n            <ion-item detail-push (click)="showBox(3)">\n                New Password\n                <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>   \n            </ion-item>\n  \n            <ion-item detail-push (click)="showBox(4)">\n                Confirm Password \n                <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>   \n            </ion-item>\n  \n  \n            <ion-item-divider>\n                Connected Accounts\n                <ion-icon color="white" name="ios-create-outline" \n                item-right></ion-icon>   \n            </ion-item-divider>\n  \n      </ion-list>\n    </div> -->\n  \n    \n  </ion-content>\n  '/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/detailsfreelancer/detailsfreelancer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], DetailsfreelancerPage);
    return DetailsfreelancerPage;
}());

//# sourceMappingURL=detailsfreelancer.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostjobPage = /** @class */ (function () {
    function PostjobPage(navCtrl, keyboard) {
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.list = ['Android',
            'UI',
            'Photoshop',
            'Excel',
            'Xcode',
            'Ionic',
            'Visual Studio',
            'React',
            'Vue',
            'iOS',
            'Swift',
            'Project Management',
            'Swift'];
        this.input = '';
        this.countries = [];
    }
    PostjobPage.prototype.add = function (item) {
        this.input = item;
        this.countries = [];
    };
    PostjobPage.prototype.removeFocus = function () {
        this.keyboard.close();
    };
    PostjobPage.prototype.search = function () {
        var _this = this;
        if (!this.input.trim().length || !this.keyboard.isOpen()) {
            this.countries = [];
            return;
        }
        this.countries = this.list.filter(function (item) { return item.toUpperCase().includes(_this.input.toUpperCase()); });
    };
    PostjobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postjob',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/postjob/postjob.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <ion-buttons start>\n      <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    </ion-buttons>\n\n    <ion-title>Post Job</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="maincontent">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-card>\n                <p style="margin-top: 20px" align="center"><ion-icon name="ios-clock-outline"></ion-icon></p>\n                <p style="margin-top: 5px"  align="center">Short term or part time work</p>\n                <p style="margin-top: 5px" align="center">Less than 30 hrs/week</p>\n                <p style="margin-bottom: 20px; margin-top: 5px" align="center">Less than 3 months</p>\n            </ion-card>\n        </ion-col>\n\n        <ion-col>\n            <ion-card>\n                <p style="margin-top: 20px" align="center"><ion-icon name="ios-calendar-outline"></ion-icon></p>\n                <p style="margin-top: 5px"  align="center">Dedicated Long term work</p>\n                <p style="margin-top: 5px" align="center">More than 30 hrs/week</p>\n                <p style="margin-bottom: 20px; margin-top: 5px" align="center">3+ months</p>\n            </ion-card>\n        </ion-col>\n      </ion-row>\n\n      <br>\n      <b style="margin-left: 11px; margin-bottom: 7px; ">Enter the title of your job post here</b>\n      <ion-row class="itemclass">\n          <ion-input\n            placeholder="Enter Job Description Here" required></ion-input>  \n      </ion-row>\n\n\n      <br>\n      <b style="margin-left: 11px; margin-bottom: 1px; ">\n        Job Category</b>\n      \n      <ion-card>\n            <ion-item>\n                    <ion-label style="opacity: 0.7; margin: 10px">Select Job Category </ion-label>\n                    <ion-select>\n                      <ion-option>Function QA</ion-option>\n                      <ion-option>Translation</ion-option>\n                      <ion-option>Writing</ion-option>\n                      <ion-option>IT & Networking</ion-option>\n                      <ion-option>Accounting & Consulting</ion-option>\n                      <ion-option>Data Science & Analytics</ion-option>\n                      <ion-option>Legal</ion-option>\n                      <ion-option>Sales & Marketing</ion-option>\n                      <ion-option>Web, Mobile & Software Dev</ion-option>\n                      <ion-option>Engineering & Architecture</ion-option>\n                      <ion-option>Admin Support</ion-option>\n                      <ion-option>Design & Creative</ion-option>\n                      <ion-option>Customer Service</ion-option>\n                      \n                    </ion-select>\n            </ion-item>\n         \n      </ion-card>\n\n\n\n       <!-- <ion-auto-complete [dataProvider]="CompletetestProvider"></ion-auto-complete>-->\n\n\n    <br>\n      <b style="margin-left: 13px; margin-bottom: 7px; ">\nAdd skill tags</b>\n\n    <div class="autocomplete">\n      <ion-item>\n        <ion-input  type="text" \n                    placeholder="Search skill tags here"\n                    [(ngModel)]="input"\n                    (ionChange)="search()"\n                    (ionBlur)="removeFocus()"\n                    debounce=500></ion-input>\n      </ion-item>\n      <ion-list>\n        <ion-item *ngFor="let country of countries" (click)="add(country)">\n          {{country}}\n        </ion-item>\n      </ion-list>\n</div>\n\n<div class="skillsdiv">\n  <ion-grid>\n    <ion-row *ngFor="let row of grid">\n      <ion-col width-50 *ngFor="let skill of row">\n        {{skill}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n\n\n      <br>\n      <b style="margin-left: 11px; margin-bottom: 7px; ">Enter job description here</b>\n      <ion-row class="item2class">\n          <ion-input\n            placeholder="Enter Job Description Here" required></ion-input>  \n      </ion-row>\n\n\n      <br>\n      <b style="margin-left: 11px; margin-bottom: 1px; ">Additional project files</b>\n      <ion-card>\n          <ion-item>\n              <ion-icon name="add" item-left></ion-icon>\n                <div>Upload</div>                \n          </ion-item>\n      </ion-card>\n\n      <br>\n    <button ion-button color="testone" style="margin-left: 50px; margin-right: 50px">\n        Post Job\n    </button>    \n    <br>  \n\n    </ion-grid>  \n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/postjob/postjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */]])
    ], PostjobPage);
    return PostjobPage;
}());

//# sourceMappingURL=postjob.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileclientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the ProfileclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileclientPage = /** @class */ (function () {
    function ProfileclientPage(navCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    ProfileclientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfileclientPage');
    };
    ProfileclientPage.prototype.showBox = function (index) {
        var placeholder;
        switch (index) {
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
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    ProfileclientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profileclient',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/profileclient/profileclient.html"*/'<ion-header>\n  <ion-navbar ion-fixed align-title="center"  color="light">\n      <button ion-button left menuToggle>\n            <ion-icon class="icon ion-home custom-icon" name="menu"></ion-icon>\n      </button>\n\n      <ion-title>  \n        My Profile\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class="topdiv" >\n\n    <div style="width: 100%; height: 7vh;"></div>\n\n    <div class="user-photo">\n      <img src="../../assets/one.jpg">\n    </div>\n\n  </div>\n\n  <div>\n    <ion-list>\n      \n          <ion-item-divider>\n              Account Info \n              <ion-icon color="white" name="ios-create-outline" \n              \n              item-right></ion-icon>   \n          </ion-item-divider>\n\n          <ion-item detail-push (click)="showBox(0)">\n              Edung\n              <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>   \n          </ion-item>\n\n          <ion-item detail-push (click)="showBox(1)">\n              Divinefavour \n              <ion-icon color="white" name="ios-contact-outline" item-left></ion-icon>   \n          </ion-item>\n\n          <ion-item detail-push (click)="showBox(2)">\n              lawrenedickson49@gmail.com \n              <ion-icon color="white" name="ios-mail-outline" item-left></ion-icon>   \n          </ion-item>\n\n\n\n\n\n          <ion-item-divider>\n              Change Password\n              <ion-icon color="white" name="ios-create-outline" \n              item-right></ion-icon>   \n          </ion-item-divider>\n\n          <ion-item detail-push (click)="showBox(3)">\n              New Password\n              <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>   \n          </ion-item>\n\n          <ion-item detail-push (click)="showBox(4)">\n              Confirm Password \n              <ion-icon color="white" name="ios-lock-outline" item-left></ion-icon>   \n          </ion-item>\n\n\n          <ion-item-divider>\n              Connected Accounts\n              <ion-icon color="white" name="ios-create-outline" \n              item-right></ion-icon>   \n          </ion-item-divider>\n\n    </ion-list>\n  </div>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/profileclient/profileclient.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProfileclientPage);
    return ProfileclientPage;
}());

//# sourceMappingURL=profileclient.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(479);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_linkedin_ngx__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_emoji__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatdetails_chatdetails__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabsclient_tabsclient__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabsfreelancer_tabsfreelancer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_jobs_jobs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_postjob_postjob__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shortlisted_shortlisted__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_freelancers_freelancers__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_profilefreelancer_profilefreelancer__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profileclient_profileclient__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic2_auto_complete__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_completetest_completetest__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_joblist_joblist__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_chat_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_detailsfreelancer_detailsfreelancer__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_register_register__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_countriesapi_countriesapi__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_setupprofile_setupprofile__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_geolocation_ngx__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_modal_modal__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { Chat } from '../pages/chat/chat';






























// import { WriteupPage } from '../pages/writeup/writeup';
var firebaseconfig = {
    apiKey: "AIzaSyAKq8NqNzRd7Z_GMe2XVK95Km8HTHOlYYs",
    authDomain: "tech-tinder.firebaseapp.com",
    databaseURL: "https://tech-tinder.firebaseio.com",
    projectId: "tech-tinder",
    storageBucket: "tech-tinder.appspot.com",
    messagingSenderId: "857697500539"
};
__WEBPACK_IMPORTED_MODULE_10_firebase__["initializeApp"](firebaseconfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                // Chat,
                __WEBPACK_IMPORTED_MODULE_32__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_joblist_joblist__["a" /* JoblistPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jobs_jobs__["a" /* JobsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shortlisted_shortlisted__["a" /* ShortlistedPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_detailsfreelancer_detailsfreelancer__["a" /* DetailsfreelancerPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabsclient_tabsclient__["a" /* TabsclientPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profilefreelancer_profilefreelancer__["a" /* ProfilefreelancerPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_setupprofile_setupprofile__["a" /* SetupprofilePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profileclient_profileclient__["a" /* ProfileclientPage */],
                // WriteupPage,
                __WEBPACK_IMPORTED_MODULE_21__pages_freelancers_freelancers__["a" /* FreelancersPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabsfreelancer_tabsfreelancer__["a" /* TabsfreelancerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_postjob_postjob__["a" /* PostjobPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                // DragulaModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ionic2_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(firebaseconfig),
                __WEBPACK_IMPORTED_MODULE_26__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true,
                    // tabsLayout:'icon-left',
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/jobtags/jobtags.module#JobtagsPageModule', name: 'JobtagsPage', segment: 'jobtags', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usertype/usertype.module#UsertypePageModule', name: 'UsertypePage', segment: 'usertype', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shortlisted_shortlisted__["a" /* ShortlistedPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_freelancers_freelancers__["a" /* FreelancersPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_profilefreelancer_profilefreelancer__["a" /* ProfilefreelancerPage */],
                // WriteupPage,
                __WEBPACK_IMPORTED_MODULE_32__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profileclient_profileclient__["a" /* ProfileclientPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_setupprofile_setupprofile__["a" /* SetupprofilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_jobs_jobs__["a" /* JobsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_joblist_joblist__["a" /* JoblistPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_detailsfreelancer_detailsfreelancer__["a" /* DetailsfreelancerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_postjob_postjob__["a" /* PostjobPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tabsclient_tabsclient__["a" /* TabsclientPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabsfreelancer_tabsfreelancer__["a" /* TabsfreelancerPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_linkedin_ngx__["a" /* LinkedIn */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_geolocation_ngx__["a" /* Geolocation */],
                // Http,
                __WEBPACK_IMPORTED_MODULE_33__providers_countriesapi_countriesapi__["a" /* CountriesapiProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_chat_service__["a" /* ChatService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_emoji__["a" /* EmojiProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_completetest_completetest__["a" /* CompletetestProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_countriesapi_countriesapi__["a" /* CountriesapiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabsclient_tabsclient__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_postjob_postjob__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profileclient_profileclient__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, storage, events, statusBar, splashScreen) {
        this.platform = platform;
        this.storage = storage;
        this.events = events;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.initializeApp();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabsclient_tabsclient__["a" /* TabsclientPage */];
        // this.storage.get("type").then((res) =>{
        //   console.log(res);
        //   if(res == null){
        //       //  this.rootPage = LoginPage;  
        //       this.rootPage = LogintwoPage;
        //   }
        //   else{
        //     if(res == "recruiter"){
        this.pages = [
            { title: 'Home', icon: 'ios-home', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabsclient_tabsclient__["a" /* TabsclientPage */], pageName: 'GotopremiumPage', index: 1 },
            { title: 'Profile', icon: 'ios-person', component: __WEBPACK_IMPORTED_MODULE_7__pages_profileclient_profileclient__["a" /* ProfileclientPage */], pageName: 'GotopremiumPage', index: 0 },
            { title: 'Settings', icon: 'ios-settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabsclient_tabsclient__["a" /* TabsclientPage */], pageName: 'GotopremiumPage', index: 1 },
            { title: 'Post Job!', icon: 'ios-alert', component: __WEBPACK_IMPORTED_MODULE_6__pages_postjob_postjob__["a" /* PostjobPage */], pageName: 'GotopremiumPage', index: 2 },
            { title: 'Logout', icon: 'ios-log-out', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */], pageName: 'GotopremiumPage', index: 6 },
        ];
        //       this.rootPage = TabsclientPage;
        //     }else if(res == "freelancer"){
        // this.pages = [
        //   { title: 'Home', icon : 'ios-home', component: TabsfreelancerPage, pageName: 'GotopremiumPage', index: 0 },        
        //   { title: 'Job Posts', icon : 'ios-briefcase', component: JoblistPage, pageName: 'GotopremiumPage', index: 1 },
        //   { title: 'Invite', icon : 'ios-alert',  component: TabsfreelancerPage, pageName: 'GotopremiumPage', index: 2 },
        //   { title: 'Logout', icon : 'ios-log-out',   component: LogintwoPage, pageName: 'GotopremiumPage', index: 6 },
        // ];   
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
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/app/app.html"*/'<ion-menu persistent="true" [content]="content" type="overlay">\n  <ion-header no-border>\n    <ion-toolbar>\n              <div class="container">\n                  <img class="userimage" src="../../assets/one.jpg">\n                  <b class="user-name">Edung Divinefavour</b>\n                  <div class="user-mail">lawrenedickson49@gmail.com</div>\n                  <br>\n                  <br>\n                 \n              </div>\n\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n\n      <ion-list>\n        <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon"></ion-icon>\n            <!-- <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon> -->\n            {{ p.title }}\n          </button>\n      </ion-list>\n\n<!-- \n            <ion-list>\n        <button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n            <ion-icon item-start [name]="p.icon"></ion-icon>\n            {{ p.title }}\n          </button>\n      </ion-list> -->\n    </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
var EmojiProvider = /** @class */ (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletetestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CompletetestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CompletetestProvider = /** @class */ (function () {
    function CompletetestProvider(http) {
        this.http = http;
        this.labelAttribute = "name";
    }
    CompletetestProvider.prototype.getResults = function (keyword) {
        return this.http.get("https://restcountries.eu/rest/v1/name/" + keyword)
            .map(function (result) {
            return result.json()
                .filter(function (item) { return item.name.toLowerCase().startsWith(keyword.toLowerCase()); });
        });
    };
    CompletetestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], CompletetestProvider);
    return CompletetestProvider;
}());

//# sourceMappingURL=completetest.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoblistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JoblistPage = /** @class */ (function () {
    function JoblistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JoblistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoblistPage');
    };
    JoblistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joblist',template:/*ion-inline-start:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/joblist/joblist.html"*/'<ion-header>\n    <ion-navbar color="light">\n      <ion-buttons start>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      </ion-buttons>\n  \n     \n    <ion-buttons end>\n        <button ion-button icon-only (click)="openSecondModal()">\n            <ion-icon  class="icon ion-home custom-icon" name="ios-search"></ion-icon>\n        </button>\n    </ion-buttons>\n      <ion-title>Find Jobs</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <div style="margin-top: 10px">\n          <h2 style="color: #287AB0">Developer needed for creating site</h2>\n          <ion-icon style="position: absolute; z-index: 5;\n          top: 20px;\n           right: 20px;" name="ios-heart-outline"></ion-icon>\n      </div>\n      \n      <br>\n      <div><b>Hourly</b> - Just now</div>\n      <br>\n      <div>\n          <p>Skill Level</p>\n          <p>Intermediate</p>\n          <p style="position: absolute; z-index: 5;\n          bottom: 20px;\n           right: 20px;">3/5(19)</p>\n      </div>\n      \n      <div></div>\n    </ion-item>\n\n    <ion-item>\n        <div style="margin-top: 10px">\n            <h2 style="color: #287AB0">Developer needed for creating site</h2>\n            <ion-icon style="position: absolute; z-index: 5;\n            top: 20px;\n             right: 20px;" name="ios-heart-outline"></ion-icon>\n        </div>\n        \n        <br>\n        <div><b>Hourly</b> - 5minutes ago</div>\n        <br>\n        <div>\n            <p>Skill Level</p>\n            <p>Intermediate</p>\n            <p style="position: absolute; z-index: 5;\n            bottom: 20px;\n             right: 20px;">3/5(19)</p>\n        </div>\n        \n        <div></div>\n      </ion-item>\n\n      <ion-item>\n          <div style="margin-top: 10px">\n              <h2 style="color: #287AB0">Developer needed for creating site</h2>\n              <ion-icon style="position: absolute; z-index: 5;\n              top: 20px;\n               right: 20px;" name="ios-heart-outline"></ion-icon>\n          </div>\n          \n          <br>\n          <div><b>Hourly</b> - 19minutes ago</div>\n          <br>\n          <div>\n              <p>Skill Level</p>\n              <p>Intermediate</p>\n              <p style="position: absolute; z-index: 5;\n              bottom: 20px;\n               right: 20px;">3/5(19)</p>\n          </div>\n          \n          <div></div>\n        </ion-item>\n\n        <ion-item>\n            <div style="margin-top: 10px">\n                <h2 style="color: #287AB0">Developer needed for creating site</h2>\n                <ion-icon style="position: absolute; z-index: 5;\n                top: 20px;\n                 right: 20px;" name="ios-heart-outline"></ion-icon>\n            </div>\n            \n            <br>\n            <div><b>Hourly</b> - 19minutes ago</div>\n            <br>\n            <div>\n                <p>Skill Level</p>\n                <p>Intermediate</p>\n                <p style="position: absolute; z-index: 5;\n                bottom: 20px;\n                 right: 20px;">3/5(19)</p>\n            </div>\n            \n            <div></div>\n          </ion-item>\n\n          <ion-item>\n              <div style="margin-top: 10px">\n                  <h2 style="color: #287AB0">Developer needed for creating site</h2>\n                  <ion-icon style="position: absolute; z-index: 5;\n                  top: 20px;\n                   right: 20px;" name="ios-heart-outline"></ion-icon>\n              </div>\n              \n              <br>\n              <div><b>Hourly</b> - 19minutes ago</div>\n              <br>\n              <div>\n                  <p>Skill Level</p>\n                  <p>Intermediate</p>\n                  <p style="position: absolute; z-index: 5;\n                  bottom: 20px;\n                   right: 20px;">3/5(19)</p>\n              </div>\n              \n              <div></div>\n            </ion-item>\n\n            <ion-item>\n                <div style="margin-top: 10px">\n                    <h2 style="color: #287AB0">Developer needed for creating site</h2>\n                    <ion-icon style="position: absolute; z-index: 5;\n                    top: 20px;\n                     right: 20px;" name="ios-heart-outline"></ion-icon>\n                </div>\n                \n                <br>\n                <div><b>Hourly</b> - 19minutes ago</div>\n                <br>\n                <div>\n                    <p>Skill Level</p>\n                    <p>Intermediate</p>\n                    <p style="position: absolute; z-index: 5;\n                    bottom: 20px;\n                     right: 20px;">3/5(19)</p>\n                </div>\n                \n                <div></div>\n              </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/lawrene/Desktop/DeepakTech_Tinder/src/pages/joblist/joblist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], JoblistPage);
    return JoblistPage;
}());

//# sourceMappingURL=joblist.js.map

/***/ })

},[370]);
//# sourceMappingURL=main.js.map