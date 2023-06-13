import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../_services/auth-service.service';
import { StorageServiceService } from '../_services/storage-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

 form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  username: string=''


  constructor(private authService: AuthServiceService, private storageService: StorageServiceService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }


  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
        next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;
        const user = this.storageService.getUser();
        this.username = this.storageService.getUser().userName;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }



  reloadPage(): void {
    window.location.reload();
  }


  
  
}
