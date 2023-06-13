import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AddnewbranchService } from 'src/app/_services/addnewbranch.service';
import { UserCourierServisesService } from 'src/app/_services/user-courier-servises.service';
import { BranchModel } from 'src/app/admin/add-branches/new-branch-adds/branch';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent implements OnInit{



  BranchList!: BranchModel[];
  formGroupForBran!:FormGroup;

  constructor(private ser:UserCourierServisesService, private servise:AddnewbranchService, private router: Router){}

  form!:FormGroup;

  ngOnInit(): void {

    
    
    this.form=new FormGroup({
      id:new FormControl(),

    //    SenderVaiable
      p_senderName:new FormControl(''),
      p_senderPhone:new FormControl(''),
      p_senderAddress:new FormControl(''),
      p_senderBranch:new FormControl(''),

    //    ReciverVariable
      p_ReceiverName:new FormControl(''),
      p_ReceiverPhone:new FormControl(''),
      p_ReceiverAddress:new FormControl(''),
      p_ReceiverBranch:new FormControl(''),

    //    courier item variable
      prodcuttype:new FormControl(''),
      productname:new FormControl(''),
      productweight:new FormControl(''),
      chargeAmount:new FormControl(''),
      paymentMethod:new FormControl(''),
      // paymentStatus:new FormControl(''),
      userName:new FormControl(''),
     })

     this.formGroupForBran = new FormGroup({
      id:new FormControl(),
      branchName:new FormControl(''),
      districtName:new FormControl(''),
      thanaName:new FormControl(''),
      email:new FormControl(''),
      phoneNumber:new FormControl(''),
      latitude:new FormControl(),
      longitude:new FormControl()
    })

    this.servise.getTasK().subscribe((res:BranchModel[])=>{
      this.BranchList =res;
    })
  }


  saveValue(){
        this.ser.saveProduct(this.form.value).subscribe(() => {alert("success")})
    // this.router.navigateByUrl('CourieraViewlist');
   
    this.ngOnInit();
    
  }

  fromLocation: any;
  toLocation: any;

  latitude1!: DoubleRange;
  longitude1!: DoubleRange;
  latitude2!: DoubleRange;
  longitude2!: DoubleRange;
  distance!: any;

  loop() {
    for (var product of this.BranchList) {  
      if ((product.branchName +" "+ product.thanaName +" "+ product.districtName) === this.fromLocation) {     
        this.latitude1 = product.latitude;
        this.longitude1 = product.longitude;
        console.log(this.latitude1);
        console.log(this.longitude1);    
      }
      if ((product.branchName +" "+ product.thanaName +" "+ product.districtName) === this.toLocation) {
        this.latitude2 = product.latitude;
        this.longitude2 = product.longitude;
        console.log(this.latitude2);
        console.log(this.longitude2);      
      }
    }
   
  }

  onChange() {
    this.fromLocation = this.form.value.p_senderBranch;
    this.toLocation = this.form.value.p_ReceiverBranch;
    this.loop();
    this.calculatingFair();
  }



  calculatingFair():any {
    console.log('-----------------', this.latitude1, this.longitude1, this.latitude2, this.longitude2);
    this.servise.findDistance(this.latitude1, this.longitude1, this.latitude2, this.longitude2, 'KM').subscribe((abc:any) => {
      this.distance = Math.round(abc);
    })

  }

  total: any = 0;
calculateTk(){
if(this.distance!=null){
  this.total = ((this.distance * 5)+(this.form.value.productweight*20));
}

}

}
