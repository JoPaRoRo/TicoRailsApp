import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';
import { RouteSpecificPage} from '../route-specific/route-specific';
import { RutasService} from '../route/service';

/*
  Generated class for the RoutePage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/route/route.html',
  providers: [RutasService]
})
export class RoutePage implements OnInit {
  public settingsPage : any;
  public RouteSpecificPage : any;
  public trains: any;
  public stations: any;
  public status: string;
  public errorMessage;

  constructor(private navCtrl: NavController,private _RutasService: RutasService) {
    this.settingsPage = SettingsPage;
    this.RouteSpecificPage = RouteSpecificPage;
  }

   	ngOnInit() {
   		this.getTrains();
   		this.getStations();
	}

	goRoutes(route){
		this.navCtrl.push(RouteSpecificPage,{route:route,stations:this.stations});
	}
	
	getStations(){
		this._RutasService.getStations()
									.subscribe(
										result => {
											this.stations = result;
									
										},
										error => {
										
												alert("Error en la petición");
											
										}
									);
	}


		getTrains(){
		this._RutasService.getTrains()
									.subscribe(
										result => {
												console.log(result);
												this.trains = result;
												//this.status = result.status;
												//if(this.status !== "success"){
												//	alert("Error en el servidor");
												//}
										},
										error => {
												alert("Error en la petición");
											}
										
									);
	}
}