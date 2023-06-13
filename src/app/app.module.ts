import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegiFormComponent } from './regi-form/regi-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProductInformationComponent } from './user/product-information/product-information.component';
import { ProductPickUpPointComponent } from './user/product-pick-up-point/product-pick-up-point.component';
import { ProductReceivePointComponent } from './user/product-receive-point/product-receive-point.component';
import { ProductChargeDetailsComponent } from './user/product-charge-details/product-charge-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AddBranchesComponent } from './admin/add-branches/add-branches.component';
import { NewEmployeeComponent } from './admin/addemployee/new-employee/new-employee.component';
import { ViewEmployeeListComponent } from './admin/addemployee/view-employee-list/view-employee-list.component';
import { NewBranchAddsComponent } from './admin/add-Branches/new-branch-adds/new-branch-adds.component';
import { VeiwBranchListComponent } from './admin/add-Branches/veiw-branch-list/veiw-branch-list.component';
import { ParcelDetailsComponent } from './admin/parcel-details/parcel-details.component';
import { ViewFindUsComponent } from './view-find-us/view-find-us.component';
import { ViewservicsComponent } from './viewservics/viewservics.component';
import { ViewhomebranchesComponent } from './viewhomebranches/viewhomebranches.component';
import { CourierViewListComponent } from './user/courier-view-list/courier-view-list.component';
import { ViewAllCourierListComponent } from './admin/parcel-details/view-all-courier-list/view-all-courier-list.component';
import { ViewCourierRecivedListComponent } from './admin/parcel-details/view-courier-recived-list/view-courier-recived-list.component';
import { ViewCourierDeliveredListComponent } from './admin/parcel-details/view-courier-delivered-list/view-courier-delivered-list.component';
import { ViewCourierPendingListComponent } from './admin/parcel-details/view-courier-pending-list/view-courier-pending-list.component';
import { ViewCourierCancelListComponent } from './admin/parcel-details/view-courier-cancel-list/view-courier-cancel-list.component';
import { ViewCourierOntheWayListComponent } from './admin/parcel-details/view-courier-onthe-way-list/view-courier-onthe-way-list.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { OrderModule } from 'ngx-order-pipe';
import { AllReportsViewComponent } from './admin/all-reports-view/all-reports-view.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewCareerComponent } from './view-career/view-career.component';
import { ViewloginuserShowserviceComponent } from './viewloginuser-showservice/viewloginuser-showservice.component';
import { ViewuserratingListComponent } from './viewuserrating-list/viewuserrating-list.component';





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    UserComponent,
    LoginFormComponent,
    RegiFormComponent,
    HomePageComponent,
    NavBarComponent,
    FooterBarComponent,
    AboutPageComponent,
    ProductInformationComponent,
    ProductPickUpPointComponent,
    ProductReceivePointComponent,
    ProductChargeDetailsComponent,
    DashboardComponent,
    AddemployeeComponent,
    UserListComponent,
    AddBranchesComponent,
    NewEmployeeComponent,
    ViewEmployeeListComponent,
    NewBranchAddsComponent,
    VeiwBranchListComponent,
    ParcelDetailsComponent,
    ViewFindUsComponent,
    ViewservicsComponent,
    ViewhomebranchesComponent,
    CourierViewListComponent,
    ViewAllCourierListComponent,
    ViewCourierRecivedListComponent,
    ViewCourierDeliveredListComponent,
    ViewCourierPendingListComponent,
    ViewCourierCancelListComponent,
    ViewCourierOntheWayListComponent,
    ViewprofileComponent,
    AllReportsViewComponent,
    ViewCareerComponent,
    ViewloginuserShowserviceComponent,
    ViewuserratingListComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    NgSelectModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
