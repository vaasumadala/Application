import { TestBed } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactListService', () => {
  let service: ContactListService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
