import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { AppRoutingModule } from './app-routing.module'; // ✅ Import routing module

@NgModule({
  declarations: [AppComponent, PersonListComponent, PersonFormComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // ✅ Add routing module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
