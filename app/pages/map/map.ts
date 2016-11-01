import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { SettingsPage } from '../settings/settings';

// Instalar esto para que funcione gps: ionic plugin add cordova-plugin-geolocation
// Geolocation es asincrono

declare var google;

@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {
  address;
  public settingsPage : any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  searchMap; // Buscar estacion

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
        myLocationButton: true,
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

    var image = "assets/img/myLocation.png";
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: (args.length == 0) ? this.map.getCenter() : args[0],
      icon: image
    });
  
    let content = "<h4>Hola, somos Tico Rails!</h4>";          
  
    this.addPopUpMessage(marker, content);
 
  }

  routeMarker(imgUrl, pos, cont){

    var image = imgUrl;
 
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: pos,
      icon: image
    });
  
    let content = cont;          
  
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

  searchLocation()
  {
    console.log("Buscar" + this.searchMap);
  }

  nearestLocation(){
    console.log("Nearest");

    Geolocation.getCurrentPosition().then((position) => {

      var rendererOptions = {
        map: this.map,
        suppressMarkers : true
      }

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);

      let latLng = new google.maps.LatLng(9.868305, -84.067509);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      directionsDisplay.setMap(this.map);

      this.calculateAndDisplayRoute(directionsService, directionsDisplay, position);
      });
    
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay, myPos) {

    var pointA = new google.maps.LatLng(myPos.coords.latitude, myPos.coords.longitude);
    var pointB = new google.maps.LatLng(9.970650, -84.129229);

    this.routeMarker("assets/img/myLocation.png", pointA, "<h4>Usted está aquí!</h4>");
    this.routeMarker("assets/img/arrived.png", pointB, "<h4>Este es su destino!</h4>");

    directionsService.route({
      origin: pointA,
      destination: pointB,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

