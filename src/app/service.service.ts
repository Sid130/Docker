import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  getData(apiurl)
  {
    let url=apiurl
    return this._http.get(url)

  }
  
  username:string;
  fullname:string;
  
}
