import { Injectable } from '@angular/core';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  private persons: Person[] = [];

  getPersons(): Person[] {
    return this.persons;
  }

  addPerson(person: Person): void {
    this.persons.push(person);
  }

  // ✅ Fix: Add the missing `deletePerson` method
  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }
}
