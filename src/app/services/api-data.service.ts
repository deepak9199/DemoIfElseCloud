import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/ApiBaseUrl/apiBaseUrl';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get<any>(baseUrl, {});
  }
}
