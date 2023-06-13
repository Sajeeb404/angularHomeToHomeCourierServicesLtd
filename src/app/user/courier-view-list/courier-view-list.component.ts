import { Component, OnInit } from '@angular/core';
import { p_informationModel } from '../product-information/productInformation';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { StorageServiceService } from 'src/app/_services/storage-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courier-view-list',
  templateUrl: './courier-view-list.component.html',
  styleUrls: ['./courier-view-list.component.css']
})
export class CourierViewListComponent implements OnInit{

  constructor(private gerCourierServise:UserCourierServisesService, private storageService: StorageServiceService 
    ){}

    form!:p_informationModel[];

    username?: string;
    UserListSearch:any;
    oderHeader:string="";
    isDescOrder:boolean=true;

    sort(headerName:string){
      this.isDescOrder= !this.isDescOrder;
    this.oderHeader=headerName; 
    }

    group!:FormGroup;


  ngOnInit(): void {
    const user = this.storageService.getUser();
    this.username = user.userName;

    this.gerCourierServise.getCouriers(this.username).subscribe((res:any)=>{
      this.form = res;    
               
    })

    this.group=new FormGroup({
      id: new FormControl(),
      userName: new FormControl(''),
      p_senderAddress: new FormControl(''),
      p_ReceiverAddress: new FormControl(''),
      availableDate: new FormControl(''),
      courierStatus: new FormControl(''),  
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

del(valu:any){
  this.gerCourierServise.delTracking(valu).subscribe(()=>{
    alert("Deleted successfully")
    this.ngOnInit();
  },(error)=>{alert(error+"not deleted")})
 
}



edit(valu:p_informationModel){
    this.group=new FormGroup({     
    id: new FormControl(valu.id),
    userName: new FormControl(valu.userName),
    p_senderAddress: new FormControl(valu.p_senderAddress),
    p_ReceiverAddress: new FormControl(valu.p_ReceiverAddress),
    availableDate: new FormControl(valu.availableDate),
    courierStatus: new FormControl(valu.courierStatus),
  });
}

update(){ 
    this.gerCourierServise.update(this.group.value).subscribe(()=>{
      alert("update successfully");
      this.ngOnInit();
    },(error)=>{alert("not update")})  
}


viewPdf(valu:any){
  // console.log(valu);
  
  // this.gerCourierServise.getTracking(valu).subscribe((res)=>{

  //   this.Data = res;
  //   alert("successfull")
  //   this.ngOnInit();
  // },(error)=>{alert(error+"not succesfull")})
  this.gerCourierServise.getTracking(valu)

}





}
