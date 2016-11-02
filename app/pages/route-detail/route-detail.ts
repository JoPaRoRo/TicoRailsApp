import { Component,OnInit } from '@angular/core';
import { NavController,NavParams,ModalController } from 'ionic-angular';
import { RutasService} from '../route/service';
import { ModalMapPage} from '../modal-map/modal-map';


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
  public ModalMapPage : any;

  errorMessage:any;

  constructor(private navCtrl: NavController,public params:NavParams,private _RutasService: RutasService,public modalCtrl: ModalController) {
  	this.scheduleStations = params.get("scheduleStations");
    this.stations = params.get("stations");
    this.ModalMapPage = ModalMapPage;
  }

    ngOnInit() {
      this.getStations();
  }

    getStationById(id){
    return this.stations.filter(function(s){
            return s._id==id;})[0]; 
  }

   modalMap(station){

    let modal = this.modalCtrl.create(ModalMapPage,{station:station,stations:this.stations});
    modal.present();
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

 timeFormat(timeP){

  let time = timeP.toString();
  let timeX;
   if(time.length < 4){        
      let hour = time.charAt(0);
      let min = time.substr(1,2);
      timeX = hour+":"+min; }
      else{
      let hour = time.substr(0,2);
      let min = time.substr(2,3);
      timeX = hour+":"+min; }

      return timeX;
      }


}
