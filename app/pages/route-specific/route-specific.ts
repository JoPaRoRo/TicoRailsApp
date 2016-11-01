import { Component,OnInit } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { RouteDetailPage} from '../route-detail/route-detail';
import { RutasService} from '../route/service';

/*
  Generated class for the RouteSpecificPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/route-specific/route-specific.html',
  providers: [RutasService]
})
export class RouteSpecificPage implements OnInit {

	public RouteDetailPage : any;
  public stations: any;
	public route:any;

  constructor(private navCtrl: NavController,public params:NavParams,private _RutasService: RutasService) {
  	this.route = params.get("route");
  	this.RouteDetailPage = RouteDetailPage;
  	
  }

  ngOnInit() {
      this.getStations();
  }

  getStations(){
    this.stations = this._RutasService.getStations();
  }

   goStationes(schedule){
  	this.navCtrl.push(RouteDetailPage,{scheduleStations:schedule});
  }
 
  getStationById(id){
    return this.stations.filter(function(s){
            return s.id==id;})[0]; 
  }

}
