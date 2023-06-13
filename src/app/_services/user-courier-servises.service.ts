import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { p_informationModel } from '../user/product-information/productInformation';
import { StorageServiceService } from './storage-service.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserCourierServisesService {

  // const httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient, private  stroragUser:StorageServiceService) {}

  private url="http://localhost:8080/courier/";


  public saveProduct(val:p_informationModel){
    const username:any = this.stroragUser.getUser().userName;

    
    return this.http.post(this.url+"Postcourier"+"?userName="+username,val, httpOptions);
   }


   delTracking(val:p_informationModel){
    return this.http.delete(this.url+ val.id, httpOptions)
   }

   getTracking(val:p_informationModel){
    this.http.get(this.url+"pdf?id="+ val.id,{ responseType: 'blob' }).subscribe(response =>{
      const file = new Blob([response], { type: 'application/pdf' });
      const downloadLink = document.createElement('a');
      const url = window.URL.createObjectURL(file);
      downloadLink.href = url;
      downloadLink.download = 'report.pdf';
      window.open(url);
    })

   }




   update(val:p_informationModel){
    const username:any = this.stroragUser.getUser().userName;
    return this.http.put(this.url+"Update"+"?userName="+username , val, httpOptions);
   }

   updates(val:p_informationModel){
    return this.http.put(this.url+"Updates", val, httpOptions,);
   }

   updatesPay(val:p_informationModel){
    return this.http.put(this.url+"UpdatesPay", val, httpOptions,);
   }


   getCourier(courierStatus: any){
    if(courierStatus===undefined || courierStatus===null ){
      return this.http.get(this.url + 'getCourierList');
    }
    else{
      return this.http.get(this.url + 'getCourierList?courierStatus='+ courierStatus);
    }
}

 
   getCouriers(userName: any){
    if(userName===undefined || userName===null ){
      return this.http.get(this.url + 'getCourierList');
    }
    else{
      return this.http.get(this.url + 'getCourierList?userName='+ userName);
    }
  }



}
