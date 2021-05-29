import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = "http://localhost:9788/Site/Admin/Auth/";
  constructor(private http: HttpClient) { }

  Login(model: any) {
    return this.http.post(this.baseurl + 'login', model).pipe(
      map((resp: any) => {
        const user = resp;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }
  register(model: any) {
    return this.http.post(this.baseurl + 'Register', model);
  }
}
