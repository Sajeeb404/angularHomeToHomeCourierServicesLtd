import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddnewbranchService } from 'src/app/_services/addnewbranch.service';
import { AuthServiceService } from 'src/app/_services/auth-service.service';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { p_informationModel } from 'src/app/user/product-information/productInformation';
import { BranchModel } from '../add-branches/new-branch-adds/branch';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{



  
  
  formBranchModel: any = {
    id: null,
    branchName: null,
    districtName: null,
    thanaName: null,
    email: null,
    phoneNumber: null,
    
  };

  formPending: any = {
    id: 0,
    p_senderName: null,
    p_senderGender: null,
    p_senderPhone: null,
    p_senderAddress: null,

    p_ReceiverName: null,
    p_ReceiverGender: null,
    p_ReceiverPhone: null,
    p_ReceiverAddress: null,

    prodcuttype: null,
    productname: null,
    productweight: 0,
    chargeAmount: 0,
    userName: null,
    courierStatus: null,
    
  };

  formReceived: any = {
    id: 0,
    p_senderName: null,
    p_senderGender: null,
    p_senderPhone: null,
    p_senderAddress: null,

    p_ReceiverName: null,
    p_ReceiverGender: null,
    p_ReceiverPhone: null,
    p_ReceiverAddress: null,

    prodcuttype: null,
    productname: null,
    productweight: 0,
    chargeAmount: 0,
    userName: null,
    courierStatus: null,
    
  };
  formOnTheWay: any = {
    id: 0,
    p_senderName: null,
    p_senderGender: null,
    p_senderPhone: null,
    p_senderAddress: null,

    p_ReceiverName: null,
    p_ReceiverGender: null,
    p_ReceiverPhone: null,
    p_ReceiverAddress: null,

    prodcuttype: null,
    productname: null,
    productweight: 0,
    chargeAmount: 0,
    userName: null,
    courierStatus: null,
    
  };
  formCancel: any = {
    id: 0,
    p_senderName: null,
    p_senderGender: null,
    p_senderPhone: null,
    p_senderAddress: null,

    p_ReceiverName: null,
    p_ReceiverGender: null,
    p_ReceiverPhone: null,
    p_ReceiverAddress: null,

    prodcuttype: null,
    productname: null,
    productweight: 0,
    chargeAmount: 0,
    userName: null,
    courierStatus: null,
    
  };
  formDelivered: any = {
    id: 0,
    p_senderName: null,
    p_senderGender: null,
    p_senderPhone: null,
    p_senderAddress: null,

    p_ReceiverName: null,
    p_ReceiverGender: null,
    p_ReceiverPhone: null,
    p_ReceiverAddress: null,

    prodcuttype: null,
    productname: null,
    productweight: 0,
    chargeAmount: 0,
    userName: null,
    courierStatus: null,
    
  };
  formForAllCorier: any = {
    id: 0,
    p_senderName: null,
    p_senderGender: null,
    p_senderPhone: null,
    p_senderAddress: null,

    p_ReceiverName: null,
    p_ReceiverGender: null,
    p_ReceiverPhone: null,
    p_ReceiverAddress: null,

    prodcuttype: null,
    productname: null,
    productweight: 0,
    chargeAmount: 0,
    userName: null,
    courierStatus: null,
 
  };
  formForAlluser: any = {
    id: 0,
    username: null,
    userfullname: null,
    email: null,
    password: null
  };


  constructor(private AddnewBranchservise:AddnewbranchService, 
    private authservic:AuthServiceService, private CouriearServise:UserCourierServisesService){}
  
  ngOnInit(): void {
    this.AddnewBranchservise.getTasK().subscribe((res)=>{
      this.formBranchModel = res;
           
    })

    this.authservic.getTasK().subscribe((res)=>{
      this.formForAlluser = res;
    })

    this.CouriearServise.getCourier('Pending').subscribe((res:any)=>{
      this.formPending = res;    
               
    })
    this.CouriearServise.getCourier('Received').subscribe((res:any)=>{
      this.formReceived = res;    
               
    })
    this.CouriearServise.getCourier('OnTheWay').subscribe((res:any)=>{
      this.formOnTheWay = res;    
               
    })
    this.CouriearServise.getCourier('Cancel').subscribe((res:any)=>{
      this.formCancel = res;    
               
    })
    this.CouriearServise.getCourier('Delivered').subscribe((res:any)=>{
      this.formDelivered = res;    
               
    })

    this.CouriearServise.getCourier(null).subscribe((res)=>{
      this.formForAllCorier = res;
    })


    // this.formgroupForCourier =new FormGroup({
    //   id: new FormControl(),
    //   p_senderName: new FormControl(''),
    //   p_senderGender: new FormControl(''),
    //   p_senderPhone: new FormControl(''),
    //   p_senderAddress: new FormControl(''),

    //   p_ReceiverName: new FormControl(''),
    //   p_ReceiverGender: new FormControl(''),
    //   p_ReceiverPhone: new FormControl(''),
    //   p_ReceiverAddress: new FormControl(''),
      
    //   prodcuttype: new FormControl(''),
    //   productname: new FormControl(''),
    //   productweight: new FormControl(),
    //   chargeAmount: new FormControl(),
    //   paymentMethod: new FormControl(''),
    //   courierStatus: new FormControl(''),
    //   })

      // this.formgroupForBranch = new FormGroup({
      //   id:new FormControl(),
      //   branchName:new FormControl(''),
      //   districtName:new FormControl(''),
      //   thanaName:new FormControl(''),
      //   email:new FormControl(''),
      //   phoneNumber:new FormControl('')
      // })  
      
  }


 

}
