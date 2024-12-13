import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080/api/clients';
  constructor(private http: HttpClient) { }
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }

  getClientBySharedKey(sharedKey: string): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${sharedKey}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl, client);
  }
}

export interface Client {
  sharedKey: string;
  businessId: string;
  email: string;
  phone: string;
  dateAdded: string;
  name: string;
  startDate: string;
  endDate: string;
}