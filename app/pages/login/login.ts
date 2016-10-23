import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage{

public username ="";
public password ="";

  constructor(private navCtrl: NavController,public toastCtrl: ToastController) {
      
  }

  login(){
  //	if((this.username == "alocha16@gmail.com" && this.password == "12345") || (this .username=="gavs272@gmail.com" && this.password == "12345")){
  			this.navCtrl.setRoot(TabsPage,null,{animate:true,animation:"transition"})
  		//}else{
  			//this.presentToast("Contraseña o Usuario Invalido");
  		//}
  }


    presentToast(msj) {
    let toast = this.toastCtrl.create({
      message: msj,
      duration: 3000
    });
    toast.present();
  }




}
