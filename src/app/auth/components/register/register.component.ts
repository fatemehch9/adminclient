import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model:any={};
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
    
  }
  register(){
this.authservice.register(this.model).subscribe(next=>{
  console.log('ok');
},error=>{
  console.log(error);
});
  }
}
