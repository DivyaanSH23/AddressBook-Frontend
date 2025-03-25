import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  private persons: Person[] = [];

  getPersons() {
    return this.persons;
  }

  addPerson(person: Person) {
    this.persons.push(person);
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }
}
