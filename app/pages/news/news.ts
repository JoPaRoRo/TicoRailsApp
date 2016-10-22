import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SchedulePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/news/news.html',
})
export class NewsPage {

  public settingsPage : any;
  newsList : any;

  constructor(private navCtrl: NavController, public http: Http) {
    this.settingsPage = SettingsPage;

    //Loading news from TicoRails API
    this.http.get('https://ticorailsapi.herokuapp.com/api/news').map(res => res.json()).subscribe(
    data => {
        this.newsList = data;
    },
    err => {
        console.log("Error reading TicoRails News!");
    }
  );
  }

}
