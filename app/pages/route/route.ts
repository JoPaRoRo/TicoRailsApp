import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';

/*
  Generated class for the RoutePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/route/route.html',
})
export class RoutePage {
  public settingsPage : any;
  constructor(private navCtrl: NavController) {
    this.settingsPage = SettingsPage;
  }
}
