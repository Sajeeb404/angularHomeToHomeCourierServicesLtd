import { Component, } from '@angular/core';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css']
})
export class ParcelDetailsComponent {


  btnNumber:number = 3;
  buttonColor(btn: number){
    this.btnNumber = btn    
   }


}
