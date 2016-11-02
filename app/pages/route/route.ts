import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
	public settingsPage: any;
	public RouteSpecificPage: any;
	public trains: any;
	public stations: any;
	public status: string;
	public errorMessage;
	public loading: any;

	constructor(private navCtrl: NavController, private _RutasService: RutasService, private loadingController: LoadingController) {
		this.settingsPage = SettingsPage;
		this.RouteSpecificPage = RouteSpecificPage;
		this.loading = loadingController.create({
            content: "Cargando Trenes..."
        });

		console.log(this.loading);
	}

   	ngOnInit() {
		this.getTrains();
		this.getStations();
	}

	goRoutes(route) {
		this.navCtrl.push(RouteSpecificPage, { route: route, stations: this.stations });
	}

	getStations() {
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


	getTrains() {
		this.loading.present();
		this._RutasService.getTrains()
			.subscribe(
			result => { this.trains = result; },
			error => { alert("Error en la petición"); },
			() => { this.loading.dismiss() }

			);
	}
}