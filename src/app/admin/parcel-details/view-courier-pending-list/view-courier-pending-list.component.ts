import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { p_informationModel } from 'src/app/user/product-information/productInformation';

@Component({
  selector: 'app-view-courier-pending-list',
  templateUrl: './view-courier-pending-list.component.html',
  styleUrls: ['./view-courier-pending-list.component.css']
})
export class ViewCourierPendingListComponent implements OnInit {


  constructor(private gerCourierServise:UserCourierServisesService, 
    ){}

    form!:p_informationModel[];

    UserListSearch:any;
    oderHeader:string="";
    isDescOrder:boolean=true;

    sort(headerName:string){
      this.isDescOrder= !this.isDescOrder;
    this.oderHeader=headerName; 
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


  ngOnInit(): void {
    this.gerCourierServise.getCourier('Pending').subscribe((res:any)=>{
      this.form = res;    
    })

    this.groups=new FormGroup({
      id: new FormControl(),
      courierStatus: new FormControl(''),  
    });  

}


groups!:FormGroup;

updates(){ 
  this.gerCourierServise.updates(this.groups.value).subscribe(()=>{
    alert("update successfully");
    this.ngOnInit();
  },(error)=>{alert("not update")})  
}

edits(valu:p_informationModel){
  this.groups=new FormGroup({     
  id: new FormControl(valu.id),
  courierStatus: new FormControl(valu.courierStatus),

});
}


}
