import { Component, OnInit } from '@angular/core';
import { AddnewbranchService } from '../_services/addnewbranch.service';
import { BranchModel } from '../admin/add-branches/new-branch-adds/branch';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewhomebranches',
  templateUrl: './viewhomebranches.component.html',
  styleUrls: ['./viewhomebranches.component.css']
})
export class ViewhomebranchesComponent implements OnInit {

  form!: any;
  fors!:FormGroup;
  constructor(private servise:AddnewbranchService){}


  ngOnInit(): void {
    this.fors = new FormGroup({
      id:new FormControl(),
      branchName:new FormControl(''),
      districtName:new FormControl(''),
      thanaName:new FormControl(''),
      email:new FormControl(''),
      phoneNumber:new FormControl('')
    })

    this.servise.getTasK().subscribe((res)=>{
      this.form = res;

    })
 


    
  }




}
