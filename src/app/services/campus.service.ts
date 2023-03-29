import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campus } from './../models/campus.model';

const baseUrl = 'https://ariane-backend.vercel.app/api/campus';
@Injectable({
  providedIn: 'root',
})
export class CampusService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Campus[]> {
    return this.http.get<Campus[]>(baseUrl);
  }

  get(id: string): Observable<Campus> {
    return this.http.get<Campus>(`${baseUrl}/${id}`);
  }

  create(data: Campus): Observable<Campus> {
    return this.http.post<Campus>(baseUrl, data);
  }

  update(id: string, data: Campus): Observable<Campus> {
    return this.http.put<Campus>(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<Campus> {
    return this.http.delete<Campus>(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<Campus> {
  //   return this.http.delete(baseUrl);
  // }
}
