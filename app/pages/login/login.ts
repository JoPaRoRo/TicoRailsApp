import { Component, OnInit } from '@angular/core';
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
export class LoginPage implements OnInit{

public username ="";
public password ="";
public credentials = [];

  constructor(private navCtrl: NavController,public toastCtrl: ToastController) {
      this.credentials.push({"user":"alocha16@gmail.com","pass":"12345"});
      this.credentials.push({"user":"nanojp@gmail.com","pass":"12345"});
  }


ngOnInit(){
 this.username ="";
 this.password ="";
}

  login(){
  	//if(this.validar(this.username,this.password)){
  		this.navCtrl.setRoot(TabsPage,null,{animate:true,animation:"transition"});
  }

  validar(u,p){
    let cred = this.credentials.filter(function(cre){
          return u == cre.user && p == cre.pass;
      });
    return cred.length > 0;
  }

  reg(){
          let valid = true;


          if(this.password ==""){
            this.presentToast("Por favor igrese una contraseña");
            valid = false;
          }

          if(this.username ==""){
            this.presentToast("Por favor igrese un nombre de usuario");
            valid = false;
          }

          if(!this.username.includes("@")){
            this.presentToast("Por favor igrese un correo valido");
            valid = false;
          }

          if(valid){
            this.credentials.push({"user":this.username,"pass":this.password});
            this.presentToast("Registro Correcto");
          }

  }


    presentToast(msj) {
    let toast = this.toastCtrl.create({
      message: msj,
      duration: 3000
    });
    toast.present();
  }




}
