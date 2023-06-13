import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegiFormComponent } from './regi-form/regi-form.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductInformationComponent } from './user/product-information/product-information.component';
import { ProductPickUpPointComponent } from './user/product-pick-up-point/product-pick-up-point.component';
import { ProductReceivePointComponent } from './user/product-receive-point/product-receive-point.component';
import { ProductChargeDetailsComponent } from './user/product-charge-details/product-charge-details.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AddBranchesComponent } from './admin/add-branches/add-branches.component';
import { NewEmployeeComponent } from './admin/addemployee/new-employee/new-employee.component';
import { ViewEmployeeListComponent } from './admin/addemployee/view-employee-list/view-employee-list.component';
import { NewBranchAddsComponent } from './admin/add-Branches/new-branch-adds/new-branch-adds.component';
import { VeiwBranchListComponent } from './admin/add-Branches/veiw-branch-list/veiw-branch-list.component';
import { ParcelDetailsComponent } from './admin/parcel-details/parcel-details.component';
import { ViewservicsComponent } from './viewservics/viewservics.component';
import { ViewhomebranchesComponent } from './viewhomebranches/viewhomebranches.component';
import { ViewFindUsComponent } from './view-find-us/view-find-us.component';
import { EmployeeComponent } from './employee/employee.component';
import { CourierViewListComponent } from './user/courier-view-list/courier-view-list.component';
import { ViewAllCourierListComponent } from './admin/parcel-details/view-all-courier-list/view-all-courier-list.component';
import { ViewCourierRecivedListComponent } from './admin/parcel-details/view-courier-recived-list/view-courier-recived-list.component';
import { ViewCourierDeliveredListComponent } from './admin/parcel-details/view-courier-delivered-list/view-courier-delivered-list.component';
import { ViewCourierPendingListComponent } from './admin/parcel-details/view-courier-pending-list/view-courier-pending-list.component';
import { ViewCourierCancelListComponent } from './admin/parcel-details/view-courier-cancel-list/view-courier-cancel-list.component';
import { ViewCourierOntheWayListComponent } from './admin/parcel-details/view-courier-onthe-way-list/view-courier-onthe-way-list.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { AllReportsViewComponent } from './admin/all-reports-view/all-reports-view.component';
import { ViewCareerComponent } from './view-career/view-career.component';
import { ViewloginuserShowserviceComponent } from './viewloginuser-showservice/viewloginuser-showservice.component';
import { ViewuserratingListComponent } from './viewuserrating-list/viewuserrating-list.component';


const routes: Routes = [
  {path:'', redirectTo: 'homePage', pathMatch:'full'},
  {path:'homePage', component:HomePageComponent},
  {path:'employeePage', component:EmployeeComponent},
  {path:'nab-bar', component:NavBarComponent},
  {path:'loginForm', component:LoginFormComponent},
  {path:'regiForm', component:RegiFormComponent},
  {path:'aboutPage', component:AboutPageComponent},
  {path:'viewProfile', component:ViewprofileComponent},
  {path:'viewCareerList', component:ViewCareerComponent},
  {path:'loiginuserService', component:ViewloginuserShowserviceComponent},
  {path:'loigretingList', component:ViewuserratingListComponent},

  {path:'viewService', component:ViewservicsComponent},
  {path:'viewFindUs', component:ViewFindUsComponent},
  {path:'viewAllBranches', component:ViewhomebranchesComponent},
  
  {path:'ProductInformation', component:ProductInformationComponent},
  {path:'ProductPickUpPoint', component:ProductPickUpPointComponent},
  {path:'ProductReceivePoint', component:ProductReceivePointComponent},
  {path:'ProductChargeDetails', component:ProductChargeDetailsComponent},
  {path:'CourieraViewlist', component:CourierViewListComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'admins', component:AdminComponent,

  children:[
    {path:'', redirectTo: 'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'profile', component:ViewprofileComponent},
    {path:'allReports', component:AllReportsViewComponent},
    {path:'addemployee', component:AddemployeeComponent,
  
    children:[
      {path:'newEmployee', component:NewEmployeeComponent},
      {path:'', component:ViewEmployeeListComponent},
      {path:'viewEmplist', component:ViewEmployeeListComponent},
    ]
  },

    {path:'userList', component:UserListComponent},
    {path:'allCourierList', component:ViewAllCourierListComponent},
    {path:'parcelDetail', component:ParcelDetailsComponent,
    children:[
      {path:'addParcell', component:ProductInformationComponent},
      {path:'courierList', component:CourierViewListComponent},
      {path:'allCourierList', component:ViewAllCourierListComponent},
      {path:'cancelCourierList', component:ViewCourierCancelListComponent},
      {path:'pendingCourierList', component:ViewCourierPendingListComponent},
      {path:'deliverdCourierList', component:ViewCourierDeliveredListComponent},
      {path:'recivedCourierList', component:ViewCourierRecivedListComponent},
      {path:'onTheWayCourierList', component:ViewCourierOntheWayListComponent},
      {path:'', component:ViewCourierPendingListComponent},
    ]
  },

    {path:'branch', component:AddBranchesComponent,
    children:[
      {path:'newBranchadd', component:NewBranchAddsComponent},
      {path:'', component:VeiwBranchListComponent},
      {path:'BranchList', component:VeiwBranchListComponent},
      
    ]
  }

  ]

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
