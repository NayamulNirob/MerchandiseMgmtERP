import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from "../model/UserModel.1";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  selectedFile: File | null = null;
  user: UserModel = new UserModel();




  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  regFrom!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fromBulider: FormBuilder,
    private userService:UserService
  ) {
    this.regFrom = this.fromBulider.group({
      name: [''],
      email: [''],
      password: [''],
      image: ['']

    })
  }

  onSubmit(): void {

    if (this.regFrom.valid) {
      const user: UserModel = this.regFrom.value;
      this.authService.regitration(user).subscribe({
        next: (res) => {
          console.log('user registration Successfully:', res);
          alert('User Registration Successfull');
          this.authService.storeToken(res.token);
          this.router.navigate(['/login']);

        },
        error: (error) => {
          alert('User Registration Unsuccessfull')
          console.error('Error registering user:', error);
        }

      });
    }
    else {
      alert("Complete mandatory Filed");
    }

    if (this.selectedFile) {
      this.userService.addUser(this.user, this.selectedFile).subscribe({
        next: res => {
          console.log("User Added succesfully", res);
          // alert('User Registration Successfull');
          this.router.navigate(['/userview']);
  
        },
        error: err => {
          // alert('User Registration Unsuccessfull')
          console.error("User Not Added", err)
        }
      });
    }
    else {
      alert('Please Select an image');
    }

  }

  

}

