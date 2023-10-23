import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  user: any;

  constructor(private userDataService: UserService) {}

  // ngOnInit() {
  // }
  ngOnInit() {
    // this.userId = +this.route.snapshot.paramMap.get('id'); // Convert to a number
    // this.user = this.userService.getUserById(this.userId);
  }

  onUpdateUser(updatedUser: any) {
    // Update the user in your service or API
    this.user = updatedUser;
    console.log(this.user);
    //  this.userDataService.updateUser(this.userId, updatedUser);
  }
  // UpdateUser(updatedUser: any) {
  //   // // Update the user in your service or API
  //   // this.user = updatedUser;
  //   // console.log(this.user);
  //   this.userDataService.updateUser(updatedUser);
  // }
  UpdateUser(updatedUser: any) {
    this.userDataService.updateUser(updatedUser).subscribe(
      (response) => {
        console.log('User updated successfully:', response);
        // Optionally, update the local user data with the response from the API.
        // This depends on your application's design and requirements.
        this.user = response;
        this.resetForm();
      },
      (error) => {
        console.error('Error updating user:', error);
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
