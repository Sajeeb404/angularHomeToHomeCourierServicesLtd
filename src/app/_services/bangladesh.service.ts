import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class BangladeshService {

 

  private AUTH_API = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) { }

  getDistricts(){
    return this.http.get(this.AUTH_API + '/districts');
  }


  getUpazilas(id:any){
    return this.http.get(this.AUTH_API + '/upazilas?dis_id='+id);
  }

  getDistrict(id:any){
    return this.http.get(this.AUTH_API + '/districts?dis_id='+id);
  }


}
