import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../_services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent  implements OnInit{

  constructor(
    private storageService: StorageServiceService,
    private router: Router

  ) {}

  username?: string;
  userfullname?:string;
  emails?:string;
  passwords?:string;
  phn?:string;
  branchname?:string;
  gender?:string;




  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.userName;
    this.userfullname = user.userFullName;
    this.emails = user.email;
    this.passwords = user.password;
    this.phn = user.phNumber;
    this.branchname = user.branchName;
    
  }

  // this.servise.getTasK().subscribe((res)=>{
  //   this.form = res;

  // })


}
