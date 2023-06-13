import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../_services/auth-service.service';
import { StorageServiceService } from '../_services/storage-service.service';
import { EventBusServiceService } from '../_shared/event-bus-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private roles: any[] = [{roleName:'', roleDescription:''}];
  isLoggedIn = false;
  isLoggedOut = true;
  showAdminBoard = false;
  showModeratorBoard = false;
  showNormalBoard = false;
  isNab= true;

  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageServiceService,
    private authService: AuthServiceService,
    private eventBusService: EventBusServiceService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

   
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.role;
     
      if(this.roles.some(item => item.roleName === 'ROLE_ADMIN')){
        this.router.navigateByUrl('admins/dashboard');
        this.isNab = false;
        
      
      }
      if(this.roles.some(item => item.roleName === 'User')){
        this.router.navigateByUrl('homePage');
        this.isLoggedIn = true;
        this.isLoggedOut = false;
      
      }
      if(this.roles.some(item => item.roleName === 'Empoyee')){
        this.router.navigateByUrl('employeePage');
        this.isLoggedIn = true;
      
      }
      // if(this.roles.some(item => item.roleName === 'Employee')){
      //   this.router.navigateByUrl('homePage');
      //   this.isLoggedIn = true;
      // }

      // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // if(this.showAdminBoard = this.roles.some(item => item.roleName === 'ROLE_ADMIN')){
      // this.router.navigateByUrl('../admins/dashboard');
      // }
      // console.log('ROLE_ADMIN---',this.roles.some(item => item.roleName === 'ROLE_ADMIN'))

      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      // this.showModeratorBoard = this.roles.some(item => item.roleName === 'ROLE_MODERATOR')
      // console.log('ROLE_MODERATOR---',this.roles.some(item => item.roleName === 'ROLE_MODERATOR'))
      
      // this.showNormalBoard = this.roles.some(item => item.roleName === 'User');

      this.username = user.userName;
     
    }


    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    // this.authService.logout().subscribe({
    //   next: res => {
    //     console.log(res);
    //     this.storageService.clean();

    //     window.location.reload();
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // });

    this.storageService.clean();

    window.location.reload();
  }

  reloadPage(): void {
    window.location.reload();
  }



}
