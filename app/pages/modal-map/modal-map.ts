import { Component, ViewChild, ElementRef,OnInit} from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';
import { RutasService} from '../route/service';
import 'rxjs/add/operator/map';

/*
  Generated class for the ModalMapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var google;

@Component({
  templateUrl: 'build/pages/modal-map/modal-map.html',
  providers: [RutasService]
})

export class ModalMapPage implements OnInit{
  address;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  searchMap; // Buscar estacion
  public station: any;
  public stations: any;
  public long: any;
  public lat: any;

  constructor(private navCtrl: NavController,public params:NavParams,public viewCtrl: ViewController,private _RutasService: RutasService) {
  	this.station = params.get("station");
    this.stations = params.get("stations");
    this.setLocation();
  }

  ngOnInit() {
  }

  ionViewLoaded(){
    this.loadMap();
  }

  setLocation(){
    let id = this.station.destino;
    this.long = this.getStationById(id).lng;
    this.lat = this.getStationById(id).lat;
  }

  getStationById(id){
    return this.stations.filter(function(s){
            return s._id==id;})[0]; 
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

    loadMap(){ 

 
      let latLng = new google.maps.LatLng(this.lat,this.long);
 
      let mapOptions = {
        center: latLng,
        myLocationButton: true,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.routeMarker("assets/img/myLocation.png",{lat : this.lat, lng:this.long},"<h4>"+this.getStationById(this.station.destino).station+"</h4>");
      //this.routeMarker("assets/img/myLocation.png",{lat : this.lat, lng:this.long},"<h4></h4>");
  }


    dismiss() {
    this.viewCtrl.dismiss();
  }


}
