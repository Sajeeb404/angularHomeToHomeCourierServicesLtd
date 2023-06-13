import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BranchModel } from '../admin/add-branches/new-branch-adds/branch';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AddnewbranchService {

  private AUTH_API = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  getTasK(){
       return this.http.get<BranchModel[]>(this.AUTH_API + 'getBranch');
  }

  addBranch(val:BranchModel) {
    return this.http.post<BranchModel>(this.AUTH_API +'postBranch',
    val, httpOptions);
  }


  delete(task: any) {
    return this.http.delete(this.AUTH_API + 'deleteBranch/' + task.id, httpOptions);
}


brchUpdate(task:any){
  return this.http.put(this.AUTH_API +'updateBranch/', task, httpOptions)
}

findDistance(arg1: DoubleRange, arg2: DoubleRange, arg3: DoubleRange, arg4: DoubleRange, arg5: string) {
  return this.http.get(this.AUTH_API + 'distanceCount?lat1=' + arg1 + '&lon1=' + arg2 + '&lat2=' + arg3 + '&lon2=' + arg4 + '&unit=' + arg5)
}

}
