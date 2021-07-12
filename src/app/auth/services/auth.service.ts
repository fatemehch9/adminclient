import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { userInfo } from 'os';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = "http://localhost:9788/Site/Admin/Auth/";
jwthelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  Login(model: any) {
    return this.http.post(this.baseurl + 'login', model).pipe(
      map((resp: any) => {
        const user = resp;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('username', model.username);
          //this.decodedtoken1=this.jwthelper.decodeToken(user.token);
          //this.decodedtoken2=localStorage.getItem('username')
          //this.decodedtoken3=model.username;
         // console.log(this.decodedtoken)
          //console.log(user.username);
         //console.log(this.decodedtoken1)
         // console.log(this.decodedtoken2);
          //console.log(this.decodedtoken3);
        }
      })
    );
  }
  register(model: any) {
    return this.http.post(this.baseurl + 'Register', model);
  }
  logedin(){
   const token=JSON.parse(localStorage.getItem('token')||'');
   //const token=JSON.parse(localStorage.getItem('token')!);
   return  !(this.jwthelper.isTokenExpired(token));


  }
}
