import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage} from '../contact/contact'
import { AboutPage} from '../about/about';
import { LoginPage} from '../login/login';


/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {

  public contactPage : any;
  public aboutPage : any;
 
  constructor(private navCtrl: NavController) {
    this.contactPage = ContactPage;
    this.aboutPage = AboutPage;
   
  }

  logout(){
    this.navCtrl.popToRoot();
    this.navCtrl.pop();
    this.navCtrl.setRoot(LoginPage);
  }

}
