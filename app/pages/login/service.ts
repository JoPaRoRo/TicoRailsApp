import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService{

constructor(private _http: Http){

	
}

	isValidUser(user:{user:String,pass:String}){
		return this._http.get("http://ticorailsapi.herokuapp.com/api/user/"+user.user+"/"+user.pass)
							.map(res => res.json());
	}
}