import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../_services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username?: string;
  constructor(
    private storageService: StorageServiceService,
    private router: Router

  ) {}
  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.userName;
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

}
