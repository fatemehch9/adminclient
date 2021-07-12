import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice:AuthService, private router:Router, private toaster:ToastrService ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authservice.logedin()){
      return true;
    }else{
      this.toaster.error('عدم دسترسی','شما به این بخش دسترسی ندارید');
      this.router.navigate(['auth/login'],{queryParams:{return: state.url}});
      return false;
    }
  }
  
}
