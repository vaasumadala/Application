import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  constructor(private httpClient: HttpClient) { }

  getContactList(): Observable<Contact[]> {
      return this.httpClient.get<Contact[]>( environment.apiBaseUrl + 'contact');
  }
}
