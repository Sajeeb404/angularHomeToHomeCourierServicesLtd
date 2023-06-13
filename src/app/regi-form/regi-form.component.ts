import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regi-form',
  templateUrl: './regi-form.component.html',
  styleUrls: ['./regi-form.component.css']
})
export class RegiFormComponent implements OnInit {

  form: any = {
    username: null,
    userfullname: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthServiceService, private router: Router) { }
 
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { username, userfullname, email, password } = this.form;
    this.authService.register(username, userfullname, email, password).subscribe({
      next: data => {
        this.isSuccessful = true; 
        this.isSignUpFailed = false;

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  


  popupClose(){
    this.isSuccessful = false;
    this.router.navigateByUrl('/loginForm');
    this.form =null;    

  }

  



}
