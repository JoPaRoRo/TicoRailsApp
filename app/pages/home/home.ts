import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  public settingsPage : any;
  constructor(private navCtrl: NavController) {
    this.settingsPage = SettingsPage;
  }
}
