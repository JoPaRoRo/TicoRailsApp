import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  News section for TicoRails
*/
@Component({
  templateUrl: 'build/pages/news/news.html',
})
export class NewsPage {

  public settingsPage : any;
  newsList : any;
  platform : any;

  constructor(private navCtrl: NavController, platform : Platform, public http: Http) {
    this.settingsPage = SettingsPage;
    this.platform = platform;

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

  launch(url) {
        var cordova;
        this.platform.ready().then(() => {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
    }

}
