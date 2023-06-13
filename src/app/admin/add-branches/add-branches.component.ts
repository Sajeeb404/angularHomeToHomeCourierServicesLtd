import { Component } from '@angular/core';

@Component({
  selector: 'app-add-branches',
  templateUrl: './add-branches.component.html',
  styleUrls: ['./add-branches.component.css']
})
export class AddBranchesComponent {

  
  btnNumber:number = 2;
  buttonColor(btn: number){
    this.btnNumber = btn    
   }

}
