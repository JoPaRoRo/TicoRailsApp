import { Component,OnInit } from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';
import { RutasService} from '../route/service';

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

  searchMap; // Buscar estacion

  public station: any;
  public stations: any;
  public long: any;
  public lat: any;

  constructor(private navCtrl: NavController,public params:NavParams,public viewCtrl: ViewController,private _RutasService: RutasService) {
  	this.station = params.get("station");
  }

    ngOnInit() {
      this.getStations();
      this.setLocation();
  }

  setLocation(){
    let id = this.station.destino;
    this.long = this.getStationById(id).longitud;
    this.lat = this.getStationById(id).latitud;

  }

    getStations(){
    this.stations = this._RutasService.getStations();
    console.log(this.stations);
  }

    getStationById(id){
    return this.stations.filter(function(s){
            return s.id==id;})[0]; 
  }

    dismiss() {
    this.viewCtrl.dismiss();
  }



  /*    getStations(){
    this._RutasService.getStations()
                  .subscribe(
                    result => {
                        this.stations = result.data;
                        this.status = result.status;
                        if(this.status !== "success"){
                          alert("Error en el servidor");
                        }
                    },
                    error => {
                      this.errorMessage = <any>error;
                      if(this.errorMessage !== null){
                        console.log(this.errorMessage);
                        alert("Error en la petición");
                      }
                    }
                  );
  }*/




}
