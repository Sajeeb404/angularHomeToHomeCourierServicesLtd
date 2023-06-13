import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { p_informationModel } from 'src/app/user/product-information/productInformation';

@Component({
  selector: 'app-view-courier-cancel-list',
  templateUrl: './view-courier-cancel-list.component.html',
  styleUrls: ['./view-courier-cancel-list.component.css']
})
export class ViewCourierCancelListComponent implements OnInit {


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
    group!:FormGroup;

  ngOnInit(): void {
    this.gerCourierServise.getCourier('Cancel').subscribe((res:any)=>{
      this.form = res;    
               
    })

    this.group=new FormGroup({
      id: new FormControl(),
      userName: new FormControl(''),
      p_senderAddress: new FormControl(''),
      p_ReceiverAddress: new FormControl(''),
      createdAt: new FormControl(''),
      courierStatus: new FormControl(''),  
    });


}

}
