import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../user';

import { UserService } from '../../services/user.service';
export interface SubmitClicked {
  // filedetails:any;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  @Output() SubmitClicked: EventEmitter<SubmitClicked> = new EventEmitter();
  user: User = {
    id: 0,
    name: '',
    email: '',
  };
  constructor(private userDataService: UserService) {}

  ngOnInit() {}
  onSubmit() {
    // Here, you can send the user data to a service or API for further processing.
    // For example, using your UserService to add the user to your local server or remote API.
    this.userDataService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        // Optionally, you can reset the form after successful submission
        this.resetForm();
        this.SubmitClicked.emit({
          Submitted: true,
        });
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  resetForm() {
    this.user = {
      id: 0,
      name: '',
      email: '',
    };
  }
}
