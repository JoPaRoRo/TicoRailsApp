import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';
import { Http } from '@angular/http';
import { Toast, InAppBrowser, SocialSharing } from 'ionic-native';
import 'rxjs/add/operator/map';

/*
  News section for TicoRails
*/
declare var window: any;

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
        if (this.platform.is('cordova')) {
            this.platform.ready().then(() => {
              window.plugins.toast.show("READY", "short", "center");
              InAppBrowser.open(url, "_system", "location=true");
            });
        }else{
            window.open(url,'_blank');
        }
    }

    whatsappShare(url){

        SocialSharing.shareViaWhatsApp("Enviado por TicoRails", null /*Image*/,  url /* url */)
        .then(()=>{
            console.log("Success");
        },
        ()=>{
            console.log("failed")
        })
    }

}
