import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'src/app/services/contact-list.service';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contactList$: Observable<Contact[]>;

  constructor(private contactListService: ContactListService) { }

  ngOnInit(): void {
    this.contactList$ = this.contactListService.getContactList();
  }

  public trackByIndex(index: number): number {
    return index;
  }

}
