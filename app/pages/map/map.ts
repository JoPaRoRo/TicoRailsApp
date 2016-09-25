import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import { SettingsPage} from '../settings/settings';

// Instalar esto para que funcione gps: ionic plugin add cordova-plugin-geolocation
// Geolocation es asincrono

declare var google;

@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {

  public settingsPage : any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController) {
    this.settingsPage = SettingsPage;
  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMap(){  // Escuela Informatica 9.970650, -84.129229
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      return position;
 
    }, (err) => {
      console.log(err);
      
    }).then((position) => {
        this.addMarker({lat: position.coords.latitude, lng: position.coords.longitude});
    });
 
  }

  addMarker(...args){
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: (args.length == 0) ? this.map.getCenter() : args[0]
    });
  
    let content = "<h4>Hola, somos Tico Rails!</h4>";          
  
    this.addPopUpMessage(marker, content);
 
  }

  addPopUpMessage(marker, content){
  
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
 
  }
}

