import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stack } from './../models/stack.model';

const baseUrl = 'https://ariane-backend.vercel.app/api/stacks';

@Injectable({
  providedIn: 'root',
})
export class StacksService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Stack[]> {
    return this.http.get<Stack[]>(baseUrl);
  }

  get(id: string): Observable<Stack> {
    return this.http.get<Stack>(`${baseUrl}/${id}`);
  }

  create(data: Stack): Observable<Stack> {
    return this.http.post<Stack>(baseUrl, data);
  }

  update(id: string, data: Stack): Observable<Stack> {
    return this.http.put<Stack>(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<Stack> {
    return this.http.delete<Stack>(`${baseUrl}/${id}`);
  }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
}
