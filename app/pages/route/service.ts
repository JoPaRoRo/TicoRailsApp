import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RutasService{

	public status: string;

constructor(private _http: Http){}

	//getTrains(){
	//	return this._http.get("http://....")
	//						.map(res => res.json());
	//}

		//getStations(){
	//	return this._http.get("http://....")
	//						.map(res => res.json());
	//}


	getStations(){
		let stations = [
			{
			 "id":1,
			 "nombre":"U. Latina",
			 "longitud":2344,
			 "latitud":2345
			},
			{
			 "id":2, 
			 "nombre":"Estacion Central",
			 "longitud":2344,
			 "latitud":2345
			},
			{
			 "id":3,
			 "nombre":"Estacion Atlantico",
			 "longitud":2344,
			 "latitud":2345
			},
		];

		return stations;

	}

	getTrains(){

		let trains = [ {
			"nombre":"Tren Interurbano Pavas",
			 "rutas":[
			 			{ 
							"nombre":"Este - Oeste",
							"inicio":1,
							"final":10,
							"horarios":[{
										   "inicio":1,
										   "final": 3,
										   "hora":7,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":7,
											   			 "destino":2,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            }
										   		   ]
								      },
								      {
								      	   "inicio":1,
										   "final": 3,
										   "hora":9,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":9,
											   			 "destino":3,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":3,
											   			 "hora1":715,
											   			 "destino":2,
											   			 "hora2":730

										            }
										   		   ]
								      }]	
				          },

				          { 
				          	"nombre":"Oeste - Este",
				          	"inicio":2,
							"final":1,
							"horarios":[{
										   "inicio":1,
										   "final": 3,
										   "hora":7,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":7,
											   			 "destino":2,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            }
										   		   ]
								      },
								      {
								      	   "inicio":1,
										   "final": 3,
										   "hora":9,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":9,
											   			 "destino":3,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":3,
											   			 "hora1":715,
											   			 "destino":1,
											   			 "hora2":730

										            }
										   		   ]
								      }]	
				          }
							 		 ]
			},

			 {
			"nombre":"Tren Interurbano Heredia",
			 "rutas":[
			 			{ 
							"nombre":"Heredia - Atlantico",
							"inicio":1,
							"final":2,
							"horarios":[{
										   "inicio":1,
										   "final": 3,
										   "hora":7,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":7,
											   			 "destino":2,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            }
										   		   ]
								      },
								      {
								      	   "inicio":1,
										   "final": 2,
										   "hora":9,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":9,
											   			 "destino":3,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":3,
											   			 "hora1":715,
											   			 "destino":1,
											   			 "hora2":730

										            }
										   		   ]
								      }]	
				          },

				          { 
				          	"nombre":"Atlantico - Heredia",
				          	"inicio":2,
							"final":3,
							"horarios":[{
										   "inicio":1,
										   "final": 3,
										   "hora":1,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":7,
											   			 "destino":2,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            }
										   		   ]
								      },
								      {
								      	   "inicio":1,
										   "final": 3,
										   "hora":3,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":9,
											   			 "destino":3,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":3,
											   			 "hora1":715,
											   			 "destino":1,
											   			 "hora2":730

										            }
										   		   ]
								      },{
										   "inicio":1,
										   "final": 3,
										   "hora":6,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":7,
											   			 "destino":2,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            }
										   		   ]
								      },{
										   "inicio":1,
										   "final": 3,
										   "hora":9,
										   "paradas":[{
											   			 "proveniente":1,
											   			 "hora1":7,
											   			 "destino":2,
											   			 "hora2":715
										            },
										            {
										            	 "proveniente":2,
											   			 "hora1":715,
											   			 "destino":3,
											   			 "hora2":730

										            }
										   		   ]
								      }]	
				          }
							 		 ]
			},

			{
				//BELEN

		    },

		    {
		    	//CARTEGO
		    },

		    {
		    	//ALAJUELA
		    }
		    ];


return trains;


	}





}