

// registration.service.ts  
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({  
  providedIn: 'root'  
})  
export class RegistrationService {  

  private apiUrl = "http://localhost:3000/user"; // Replace with your actual API endpoint  

  constructor(private http: HttpClient) { }  

  registerUser(data: any): Observable<any> {  
    return this.http.post<any>(this.apiUrl, data);  
  }  
}