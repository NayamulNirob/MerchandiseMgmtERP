import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../model/sale.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{


  regFrom!:FormGroup;

  constructor(
    private authService:AuthService,
    private router:Router,
    private fromBulider:FormBuilder
  ){
    this.regFrom=this.fromBulider.group({
     name:[''],
      email:[''],
      password:[''],
      photo:['']
      
    })
  }

  onSubmit():void{

    if(this.regFrom.valid){
      const user:UserModel=this.regFrom.value;
      this.authService.regitration(user).subscribe({
        next:(res)=>{
          console.log('user registration Successfully:',res);
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']);

        },
        error:(error)=>{
          console.error('Error registering user:',error);
        }

      });
    }
    else{
      alert("Complete mandatory Filed");
    }

}

}

