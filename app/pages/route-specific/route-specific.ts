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
    this.stations = params.get("stations");
  	this.RouteDetailPage = RouteDetailPage;
  	
  }

  ngOnInit() {
    
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

   goStationes(schedule){
  	this.navCtrl.push(RouteDetailPage,{scheduleStations:schedule,stations:this.stations});
  }
 
  getStationById(id){

    return this.stations.filter(function(s){
            return s._id==id;})[0]; 
  }


 timeFormat(timeP){

  let time = timeP.toString();
  let timeX;
   if(time.length < 4){ 
      let hour = time.charAt(0);
      let min;
     if(time.length === 1){
       min = "00";
      }else{       
        if(time.length === 2){ 
         hour = time.substr(0,1);       
         min = "00";
        }else{
          min = time.substr(1,2);
        }       
      }  
      timeX = hour+":"+min; 
    }else{
      let hour = time.substr(0,2);
      let min = time.substr(2,3);
      timeX = hour+":"+min; 
    }
      return timeX;
}
 

}
