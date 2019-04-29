import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  writeup = "dffdf";
  callback;
  constructor(public navCtrl: NavController, 
    public view: ViewController,
    public element:ElementRef,
    public navParams: NavParams) {

    this.callback = this.navParams.get('callback');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  goPrevious(){
 
    this.callback(this.writeup).then( () => {
       this.navCtrl.pop() 
      });

  }

  

  protected autoSizeDescription(): void {
		let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
		textArea.style.overflow = 'hidden';
		textArea.style.height 	= 'auto';
		textArea.style.height 	= textArea.scrollHeight + 'px';
		return;
}

}