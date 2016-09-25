import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';

/*
  Generated class for the SchedulePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/schedule/schedule.html',
})
export class SchedulePage {
  public settingsPage : any;
  constructor(private navCtrl: NavController) {
    this.settingsPage = SettingsPage;
  }

}
