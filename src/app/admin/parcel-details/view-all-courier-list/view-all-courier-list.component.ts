import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageServiceService } from 'src/app/_services/storage-service.service';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { p_informationModel } from 'src/app/user/product-information/productInformation';




@Component({
  selector: 'app-view-all-courier-list',
  templateUrl: './view-all-courier-list.component.html',
  styleUrls: ['./view-all-courier-list.component.css']
})
export class ViewAllCourierListComponent implements OnInit {

  constructor(private gerCourierServise:UserCourierServisesService, private storageService: StorageServiceService
    ){}

    formss!:p_informationModel[];
  
    UserListSearch:any;

    oderHeader:string="";
    isDescOrder:boolean=true;

    sort(headerName:string){
      this.isDescOrder= !this.isDescOrder;
    this.oderHeader=headerName; 
    }

  group!:FormGroup;
  groups!:FormGroup;
  payGroups!:FormGroup;


  ngOnInit(): void {
    this.gerCourierServise.getCourier(null).subscribe((res:any)=>{
      this.formss = res;   
       
    });
    this.group=new FormGroup({
      id: new FormControl(),
      userName: new FormControl(''),
      p_senderAddress: new FormControl(''),
      p_ReceiverAddress: new FormControl(''),
      availableDate: new FormControl(''),
      courierStatus: new FormControl(''),  
      paymentStatus: new FormControl(''),  
    });  
    
    this.groups=new FormGroup({
      id: new FormControl(),
      courierStatus: new FormControl(''),  
    });  

    this.payGroups=new FormGroup({
      id: new FormControl(),
      paymentStatus: new FormControl(''),  
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
    this.formss;
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
      createdAt: new FormControl(valu.createdAt),
      courierStatus: new FormControl(valu.courierStatus),

    });
  }

  edits(valu:p_informationModel){
    this.groups=new FormGroup({     
    id: new FormControl(valu.id),
    courierStatus: new FormControl(valu.courierStatus),

  });
}

editsPay(valu:p_informationModel){
  this.payGroups=new FormGroup({     
  id: new FormControl(valu.id),
  paymentStatus: new FormControl(valu.paymentStatus),

});
}

  update(){ 
      this.gerCourierServise.update(this.group.value).subscribe(()=>{
        alert("update successfully");
        this.ngOnInit();
      },(error)=>{alert("not update")})  
  }

  updates(){ 
    this.gerCourierServise.updates(this.groups.value).subscribe(()=>{
      alert("update successfully");
      this.ngOnInit();
    },(error)=>{alert("not update")})  
}

updatePayStatus(){ 
  this.gerCourierServise.updatesPay(this.payGroups.value).subscribe(()=>{
    alert("update successfully");
    this.ngOnInit();
  },(error)=>{alert("not update")})  
}


  viewPdf(valu:any){
    this.gerCourierServise.getTracking(valu)
  }

 


}
