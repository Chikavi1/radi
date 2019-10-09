import { Injectable } from '@angular/core';
import { Http,Headers, } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  
  // Change to this http://ed43bb3b.ngrok.io/api/login
  static readonly LOGIN_URL = 'http://contoh.dev/api/login';
  // Change to this http://ed43bb3b.ngrok.io/api/register
  static readonly REGISTER_URL = 'http://contoh.dev/api/register';
  access: boolean;
  token: string;
  baseUrl = "https://www.chikavi.com/api/";
  baseUrlLocal:string = "http://127.0.0.1:8000/api/";

  constructor(public http: Http) {}

  // Login
  loginlaravel(email,password):any{
    let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append('X-Requested-With', 'XMLHttpRequest');
     return this.http.get(this.baseUrl+"ingresar_cuenta?"+"email="+email+"&password="+password,{headers: headers});
  }
  getUser(id):any{

     let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append('Authorization', 'Bearer '+ localStorage.getItem("token"));
    return this.http.get(this.baseUrl+"user?user="+id,{headers: headers});
  }

  create_user(name,email,psw,c_pws){
   return this.http.get(this.baseUrl+"crear_cuenta?name="+name+"&email="+email+"&password="+psw+"&password_confirmation="+c_pws);
  }
  
  public getToken() {
    return this.token;
  }

  changePassword(datos):any{
      let postdata = new FormData();
      postdata.append('id',datos.id);
      postdata.append('password',datos.password);
      postdata.append('newpassword',datos.newpassword);

      return new Promise(resolve => {
        this.http.post(this.baseUrl+"changepassword",postdata)
        .subscribe(data=>{
          resolve(data);
        });
      });
    }
  // Logout
  public logout(id) {
    return this.http.get(this.baseUrl+"deletesession?user_id="+id);
  }

}