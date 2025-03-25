import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookService } from '../../services/address-book.service';
import { Person } from '../../model/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent implements OnInit {
  person: Person = {
    name: '',
    city: '',
    phone: '',
    email: '',
  };

  errors: any = {};
  isEditMode = false; // ✅ Track if editing
  personId: number | null = null;

  constructor(
    private addressBookService: AddressBookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // ✅ Check if editing (URL contains ID)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.personId = +id; // Convert to number

        // ✅ Fetch existing data
        this.addressBookService.getPersonById(this.personId).subscribe((data) => {
          this.person = data;
        });
      }
    });
  }

  savePerson() {
    this.errors = {}; // ✅ Clear errors

    if (this.isEditMode && this.personId !== null) {
      // ✅ Update existing person
      this.addressBookService.updatePerson(this.personId, this.person).subscribe({
        next: () => {
          console.log('✅ Person updated successfully!');
          this.router.navigate(['/list']);
        },
        error: (err) => {
          console.error('❌ Error updating person:', err);
          if (err.error && err.error.errors) {
            err.error.errors.forEach((validationError: any) => {
              const field = validationError.field;
              this.errors[field] = validationError.defaultMessage;
            });
          }
        },
      });
    } else {
      // ✅ Add new person
      this.addressBookService.addPerson(this.person).subscribe({
        next: () => {
          console.log('✅ Person added successfully!');
          this.router.navigate(['/list']);
        },
        error: (err) => {
          console.error('❌ Error adding person:', err);
          if (err.error && err.error.errors) {
            err.error.errors.forEach((validationError: any) => {
              const field = validationError.field;
              this.errors[field] = validationError.defaultMessage;
            });
          }
        },
      });
    }
  }

  goToList() {
    this.router.navigate(['/list']);
  }
}
