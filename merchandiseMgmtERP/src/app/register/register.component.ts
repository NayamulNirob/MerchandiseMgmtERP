import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  // registrationForm: FormGroup;
  // passwordStrength: number = 0;
  // passwordMismatch: boolean = false;


  // constructor(private fb: FormBuilder) {
  //   this.registrationForm = this.fb.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     rememberMe: [false],
  //   });
  // }

  // checkPasswordStrength() {
  //   const password = this.registrationForm.get('password')?.value;
  //   this.passwordStrength = 0;

  //   if (password.length >= 6) this.passwordStrength += 20;
  //   if (/[A-Z]/.test(password)) this.passwordStrength += 20;
  //   if (/[a-z]/.test(password)) this.passwordStrength += 20;
  //   if (/[0-9]/.test(password)) this.passwordStrength += 20;
  //   if (/[!@#$%^&*]/.test(password)) this.passwordStrength += 20;
  // }

  // checkPasswordMatch() {
  //   const password = this.registrationForm.get('password')?.value;
  //   const confirmPassword = this.registrationForm.get('confirmPassword')?.value;
  //   this.passwordMismatch = password !== confirmPassword;
  // }

  // onSubmit() {
  //   if (this.registrationForm.valid && !this.passwordMismatch) {
  //     const registrationData = {
  //       username: this.registrationForm.value.username,
  //       email: this.registrationForm.value.email,
  //       password: this.registrationForm.value.password,
  //       rememberMe: this.registrationForm.value.rememberMe,
  //     };
  //     console.log('Registration Data:', registrationData);
  //     // Here you can send registrationData to your backend API as JSON  
  //   }
  // }

  registrationForm: FormGroup;  
  passwordStrength: number = 0;  
  passwordMismatch: boolean = false;  

  constructor(private fb: FormBuilder) {  
    this.registrationForm = this.fb.group({  
      username: ['', Validators.required],  
      email: ['', [Validators.required, Validators.email]],  
      password: ['', [Validators.required, Validators.minLength(6)]],  
      confirmPassword: ['', Validators.required],  
      rememberMe: [false],  
    });  
  }   
  ngOnInit(): void {
    this.registrationForm
  }
  
  checkPasswordStrength() {  
    const password = this.registrationForm.get('password')?.value; // Added optional chaining  
    this.passwordStrength = 0;  

    if (password && password.length >= 6) this.passwordStrength += 20;  
    if (password && /[A-Z]/.test(password)) this.passwordStrength += 20;  
    if (password && /[a-z]/.test(password)) this.passwordStrength += 20;  
    if (password && /[0-9]/.test(password)) this.passwordStrength += 20;  
    if (password && /[!@#$%^&*]/.test(password)) this.passwordStrength += 20;  
  }  

  checkPasswordMatch() {  
    const password = this.registrationForm.get('password')?.value; // Added optional chaining  
    const confirmPassword = this.registrationForm.get('confirmPassword')?.value; // Added optional chaining  
    this.passwordMismatch = password !== confirmPassword;  
  }  

  onSubmit() {  
    if (this.registrationForm.valid && !this.passwordMismatch) {  
      const registrationData = {  
        username: this.registrationForm.value.username,  
        email: this.registrationForm.value.email,  
        password: this.registrationForm.value.password,  
        rememberMe: this.registrationForm.value.rememberMe,  
      };  
      console.log('Registration Data:', registrationData);  
      // Here you can send registrationData to your backend API as JSON  
    }  
  }  

}


