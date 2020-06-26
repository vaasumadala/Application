import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactListComponent } from './contact-list.component';
import { ContactListService } from 'src/app/services/contact-list.service';
import { of } from 'rxjs';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let getQuoteSpy;
  let quoteEl;
  const mockData = [
    {
      _id: '5de91c005b98615393e74931',
      index: 0,
      firstName: 'Browning',
      lastName: 'Graham',
      company: 'MELBACOR',
      email: 'browninggraham@melbacor.com',
      phone: '+1 (906) 585-2525',
      address: '920 Hastings Street, Roosevelt, Puerto Rico, 5573'
    },
    {
      _id: '5de91c00d6b4d04e96ef44da',
      index: 1,
      firstName: 'Mcmahon',
      lastName: 'Fulton',
      company: 'ILLUMITY',
      email: 'mcmahonfulton@illumity.com',
      phone: '+1 (814) 489-3373',
      address: '676 Bainbridge Street, Abrams, Mississippi, 2652'
    },
    {
      _id: '5de91c007e02a7eb64124760',
      index: 2,
      firstName: 'Susan',
      lastName: 'Dyer',
      company: 'ZAGGLE',
      email: 'susandyer@zaggle.com',
      phone: '+1 (940) 547-2965',
      address: '853 Decatur Street, Waumandee, Nevada, 7107'
    },
    {
      _id: '5de91c002229191af175899d',
      index: 3,
      firstName: 'Becker',
      lastName: 'Gibson',
      company: 'SKINSERVE',
      email: 'beckergibson@skinserve.com',
      phone: '+1 (908) 466-2681',
      address: '995 Banner Avenue, Wollochet, Federated States Of Micronesia, 2706'
    },
    {
      _id: '5de91c000dd0867e858c4a8e',
      index: 4,
      firstName: 'Sparks',
      lastName: 'Bullock',
      company: 'COMBOGENE',
      email: 'sparksbullock@combogene.com',
      phone: '+1 (922) 456-2177',
      address: '267 Chestnut Street, Waterview, Maryland, 1246'
    }
  ];
  beforeEach(async(() => {
    const contactListService = jasmine.createSpyObj('ContactListService', ['getContactList']);
    getQuoteSpy = contactListService.getContactList.and.returnValue( of(mockData) );
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      providers: [  { provide: ContactListService, useValue: contactListService }],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    quoteEl = fixture.nativeElement.querySelector('table');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getContactList', () => {
    fixture.detectChanges(); // onInit()
    console.log(quoteEl);
    expect(quoteEl).toBeDefined();
    expect(getQuoteSpy.calls.any()).toBe(true, 'getContactList called');
  });
});
