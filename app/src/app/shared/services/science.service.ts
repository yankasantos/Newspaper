import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {

  apiUrl = 'https://api.nytimes.com/svc/topstories/v2/science.json?';
  
  httpOptions = {
    headers : new HttpHeaders({
        Content-Type : 'aplication/json'
    })
  };

  constructor(
    private httmClient : HttpClientModule
  ) { }

  public getPostListScience
}
