import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  // styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(
    private addressBookService: AddressBookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.persons = this.addressBookService.getPersons();
  }

  deletePerson(index: number) {
    this.addressBookService.deletePerson(index);
    this.persons = this.addressBookService.getPersons();
  }

  // ✅ Navigate to Add Person Form
  goToForm() {
    this.router.navigate(['/form']);
  }
}
