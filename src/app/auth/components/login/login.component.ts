import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authservice: AuthService,private router:Router) { }
  ngOnInit() {
  }
  login() {
    this.authservice.Login(this.model).subscribe(next => {
      //this.toastr.success('با موفقیت وارد شدید ','ورود')
      this.router.navigate(['/panel']);
        },error=>{
      //console.log(error)
     // this.toastr.error('error', 'خطا', {
       // timeOut: 3000,
      //});
    });
  }
}
