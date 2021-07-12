import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnurl:any;
  constructor(private authservice: AuthService,private router:Router,private toastr: ToastrService , private route: ActivatedRoute) { }
  ngOnInit() {
    this.returnurl=this.route.snapshot.params['retern']||'/panel';
    //this.route.queryParams.subscribe(params=>this.returnurl=params['return']||'/panel')
  }
  login() {
    this.authservice.Login(this.model).subscribe(next => {
     this.toastr.success('با موفقیت وارد شدید ','ورود');
      this.router.navigate([this.returnurl]);
        },error=>{
     console.log(error);
     this.toastr.error(error.error||error, 'خطا', {
      timeOut: 3000,
      });
    });
  }
}
