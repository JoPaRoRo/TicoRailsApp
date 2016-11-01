import { Component, ViewChild, ElementRef} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Http } from '@angular/http';
import { SettingsPage } from '../settings/settings';
import 'rxjs/add/operator/map';

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
  stations: any;

  constructor(public navCtrl: NavController, public http: Http) {
    //this.loadMarkers();
    this.settingsPage = SettingsPage;
  }

  ionViewLoaded(){
    this.loadMap();
  }

  loadMarkers(){
    //Loading news from TicoRails API
    /*this.http.get('https://ticorailsapi.herokuapp.com/api/station').map(res => res.json()).subscribe(
        data => {
            this.stations = data;
        },
        err => {
            console.log("Error reading TicoRails Stations!");
        }
    );*/

    if (this.stations) {
      return Promise.resolve(this.stations);
    }

    return new Promise(resolve => {
      this.http.get('https://ticorailsapi.herokuapp.com/api/station')
      .map(res => res.json())
        .subscribe(data => {
          this.stations = data;
          resolve(this.stations);
        });
    });

  }

  addPopUpMessage(marker, content){
  
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
 
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

  drawingStations(arr){
      this.stations.forEach(function(element){
          if(element.lat != null && element.lng != null){
            //let obj = new google.maps.LatLng(element.lat, element.lng);
            console.log(element.lat +" , " + element.lng);
            //this.routeMarker("assets/img/station.png", {lat: 1, lng: 1}, "Hola");
            
          }
      });
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
        return this.loadMarkers();
    }).then((res) => {
        //console.log(this.stations[0].station);
        this.drawingStations(res);
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

  searchLocation(itemSelected)
  {
  
    let myStation = this.stations.filter(function(element){
                                          return element.station == itemSelected;
    });

     console.log("Buscar " + myStation[0].station);
     this.takeMeTo({lat: myStation[0].lat, lng: myStation[0].lng});

  }

  takeMeTo(toPos){
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

      var pointA = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var pointB = new google.maps.LatLng(toPos.lat, toPos.lng);

      this.calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);
      });
    
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay, fromPos, toPos) {

    var pointA = fromPos;
    var pointB = toPos;

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

