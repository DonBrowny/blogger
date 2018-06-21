import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL  =  'http://downbrownyapi.us.openode.io';
  constructor(private  httpClient:  HttpClient) { }

  public getPoems() {
    return this.httpClient.get( this.API_URL + '/notes/0');
  }
}
