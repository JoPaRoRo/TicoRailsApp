import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage} from '../settings/settings';
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
  public rutas: any;
  public status: string;
  public errorMessage;

  constructor(private navCtrl: NavController,private _RutasService: RutasService) {
    this.settingsPage = SettingsPage;
  }

   	ngOnInit() {
   		this.getRutas();
	}


	getRutas(){
		this.rutas = this._RutasService.getRutas();
	}


/*		getRutas(){
		this._RutasService.getRutas()
									.subscribe(
										result => {
												this.rutas = result.data;
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