import {Injectable} from "@angular/core";
import {Http, Response, Headers,URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService{

constructor(private _http: Http){

	
}

	isValidUser(user:{username:string,password:string}){
        let params: URLSearchParams = new URLSearchParams();
        params.set('user', user.username);
        params.set('pass', user.password);
		return this._http.get("http://ticorailsapi.herokuapp.com/api/user",{ search:params})
					.map(res => res.json());
	}
}