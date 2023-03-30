import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campus } from './../models/campus.model';

interface addCampusDto {
  name: string;
  address: string;
  city: string;
}

interface updateCampusDto {
  name?: string;
  address?: string;
  city?: string;
  isOpen?: boolean;
  updatedAt: string;
}

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

  create(data: addCampusDto): Observable<addCampusDto> {
    return this.http.post<any>(baseUrl, data);
  }

  update(id: string, data: updateCampusDto): Observable<updateCampusDto> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<Campus> {
    return this.http.delete<Campus>(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<Campus> {
  //   return this.http.delete(baseUrl);
  // }
}
