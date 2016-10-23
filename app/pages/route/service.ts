import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RutasService{

	public status: string;

constructor(private _http: Http){}

	//getRutas(){
	//	return this._http.get("http://....")
	//						.map(res => res.json());
	//}

	getRutas(){

		let rutas = [ { 
			"nombre":"Tren Interurbano Pavas",
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
						   "final": 5,
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
							   			 "destino":5,
							   			 "hora2":730

						            }
						   		   ]
				      }]	
          },

          { 
          	"nombre":"Tren Interurbano Heredia",
          	"inicio":2,
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
						   "final": 5,
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
							   			 "destino":5,
							   			 "hora2":730

						            }
						   		   ]
				      }]	
          },

          { "nombre":"Tren Interurbano Belen",
          	"inicio":3,
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
						   "final": 5,
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
							   			 "destino":5,
							   			 "hora2":730

						            }
						   		   ]
				      }]	
          },

          { 
            "nombre":"Tren Interurbano Cartago",
          	"inicio":4,
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
						   "final": 5,
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
							   			 "destino":5,
							   			 "hora2":730

						            }
						   		   ]
				      }]	
          },

          { 
          	"nombre":"Tren Interurbano Alajuela",
          	"inicio":5,
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
						   "final": 5,
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
							   			 "destino":5,
							   			 "hora2":730

						            }
						   		   ]
				      }]	
          }
];


return rutas;





		/////////
	}

}