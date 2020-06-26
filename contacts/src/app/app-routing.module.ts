import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'contactList'},
{path: 'newcontact', component: ContactFormComponent},
{path: 'contactList', component: ContactListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
