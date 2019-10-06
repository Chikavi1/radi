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
  baseUrlLocal:string = "http://127.0.0.1:8000/api/";

  constructor(public http: Http) {}

  // Login
  loginlaravel(email,password):any{
    let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append('X-Requested-With', 'XMLHttpRequest');

     return this.http.get(this.baseUrlLocal+"login?"+"email="+email+"&password="+password,{headers: headers});
  }
  getUser(id):any{

     let headers = new Headers();
      headers.append('Content-Type','application/x-www-form-urlencoded');
      headers.append('Authorization', 'Bearer '+ localStorage.getItem("token"));
    return this.http.get(this.baseUrlLocal+"user?user="+id,{headers: headers});
  }

  create_user(name,email,psw,c_pws){
   return this.http.get(this.baseUrlLocal+"signup?name="+name+"&email="+email+"&password="+psw+"&password_confirmation="+c_pws);
  }
  
  public getToken() {
    return this.token;
  }

  // Logout
  public logout() {
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

}