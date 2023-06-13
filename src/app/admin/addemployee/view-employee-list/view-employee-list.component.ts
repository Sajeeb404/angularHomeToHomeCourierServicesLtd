import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/_services/auth-service.service';

@Component({
  selector: 'app-view-employee-list',
  templateUrl: './view-employee-list.component.html',
  styleUrls: ['./view-employee-list.component.css']
})
export class ViewEmployeeListComponent implements OnInit{


  
  UserListSearch:any;



  form: any = {
  
    userName: null,
    userFullName: null,
    email: null,
    password: null,
    role:[{
      roleName:""
    }]  
  };

  forms:any = {
    username: "",
    userfullname: "",
    email: "",
    password: "",
  };

  constructor(private servise:AuthServiceService){}
  
  ngOnInit(): void {
     this.servise.getTasK().subscribe((res)=>{ 
      this.form = res;
    })
  }



  delete(task: any, status:boolean){
    this.servise.activeAndInactive(task,status ).subscribe((res)=>{
      this.ngOnInit();
    })
  }

  deletes(task: any){
    this.servise.delete(task).subscribe((res)=>{
      this.ngOnInit();
    })
  }


   edits(tasks:any){
      this.forms = tasks;
              
  }

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  


  onSubmit(): void {
    const { username, userfullname, email, password } = this.forms;
    this.servise.register(username, userfullname, email, password).subscribe({

    
    });
  }

  title ='pagination'
  POSTS:any;
  page:number =1;
  count:number =0;
  tableSize:number =5;
  tableSizes:any=[5,10,15,20];

  onTableSizechange(event:any){
    this.page= event;
    this.form;
  }
  pagenUmber(){
    this.tableSize
  }

  oderHeader:string="";
  isDescOrder:boolean=true;

  sort(headerName:string){
    this.isDescOrder= !this.isDescOrder;
  this.oderHeader=headerName; 
  }


}
