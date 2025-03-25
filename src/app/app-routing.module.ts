import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // ✅ Default route to list
  { path: 'list', component: PersonListComponent },
  { path: 'form/:id', component: PersonFormComponent }, // ✅ Edit Route
  { path: 'form', component: PersonFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
