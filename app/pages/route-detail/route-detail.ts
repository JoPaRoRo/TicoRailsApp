import { Component,OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { RutasService} from '../route/service';


/*
  Generated class for the RouteDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/route-detail/route-detail.html',
    providers: [RutasService]
})
export class RouteDetailPage implements OnInit {

  public stations: any;
  public scheduleStations:any;

  constructor(private navCtrl: NavController,public params:NavParams,private _RutasService: RutasService) {
  	this.scheduleStations = params.get("scheduleStations");
  }

    ngOnInit() {
      this.getStations();
  }

    getStations(){
    this.stations = this._RutasService.getStations();
  }

    getStationById(id){
    return this.stations.filter(function(s){
            return s.id==id;})[0]; 
  }



  /*		getStations(){
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
