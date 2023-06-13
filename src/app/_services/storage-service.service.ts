import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { p_informationModel } from '../user/product-information/productInformation';
import { HttpClient } from '@angular/common/http';


const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  public getToken(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      const userToken = JSON.parse(user)
      return userToken.jwtToken;
    }
    return {};
  }

  constructor(private http:HttpClient) {}
  private url="http://localhost:8080/product/";

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    
    if (user) {
      const userData = JSON.parse(user);
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(userData.jwtToken);


// Other functions
      const expirationDate = helper.getTokenExpirationDate(userData.jwtToken);

      const isExpired = helper.isTokenExpired(userData.jwtToken);


      return userData.user;
    }
    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem( 'auth-user');
    if (user) {
      return true;
    }
    return false;
  }











  

  
}
