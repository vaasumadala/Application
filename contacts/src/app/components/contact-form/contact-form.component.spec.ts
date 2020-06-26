import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    const email = component.contactForm.get('email');
    expect(email.valid).toBeFalsy();
  });

  it('email field validity required', () => {
    let errors = {};
    const email = component.contactForm.get('email');
    errors = email.errors || {};
    // tslint:disable-next-line: no-string-literal
    expect(errors['required']).toBeTruthy();
  });

  it('email field pattern validity', () => {
    let errors = {};
    const email = component.contactForm.get('email');
    email.setValue('test');
    errors = email.errors || {};
     // tslint:disable-next-line: no-string-literal
    expect(errors['pattern']).toBeTruthy();
  });

  it('Phone field pattern validity', () => {
    let errors = {};
    const email = component.contactForm.get('email');
    email.setValue('134555');
    errors = email.errors || {};    // tslint:disable-next-line: no-string-literal
    expect(errors['pattern']).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.contactForm.valid).toBeFalsy();
    component.contactForm.patchValue({
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      phone: '8162873892',
      company: 'test',
      address: 'test address'
    });
    fixture.detectChanges();
    expect(component.contactForm.valid).toBeTruthy();
    component.validateAndPost();
  });
});
