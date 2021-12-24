import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PortFolioDetails} from './port-folio-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private restApi="https://localhost:44344/api/NetWorth/GetPortFolioDetailsAll"

  constructor(private httpClient:HttpClient) { }
  public getRequest(){
    return this.httpClient.get(this.restApi);
  }
  
  public getRequestbyId(id:number)
  {
    
    return this.httpClient.get("https://localhost:44344/api/NetWorth/GetPortFolioDetailsByID/"+id)
  }
  public getNetworth(portFolioDetails:PortFolioDetails)
  {
    return this.httpClient.post("https://localhost:44344/api/NetWorth/GetNetWorth/",portFolioDetails)
  }
  public sellAsset( portFolioDetails:PortFolioDetails):Observable<any>
  {
    return this.httpClient.post("https://localhost:44344/api/NetWorth/SellAssets/",portFolioDetails)
  }
  public getAllStocks()
  {
    return this.httpClient.get("https://localhost:44333/api/Stock");
    
  }
 
}
