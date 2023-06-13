import { Component } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  btnNumber:number =2;

  btnClick(btn:number){
    this.btnNumber = btn;
  }

}
