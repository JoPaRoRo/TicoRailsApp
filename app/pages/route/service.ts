import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RutasService{

	public status: string;
	public stations: any;

constructor(private _http: Http){

	
}

	getTrains(){
		return this._http.get("http://ticorailsapi.herokuapp.com/api/train")
							.map(res => res.json());
	}

	getStations(){
		return this._http.get("http://ticorailsapi.herokuapp.com/api/station")
							.map(res => res.json());
	}


}