import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../services/user.service';
export interface UpdateClicked {
  // filedetails:any;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: User[] = [];
  @Output() UpdateClicked: EventEmitter<UpdateClicked> = new EventEmitter();
  constructor(private userDataService: UserService) {}

  ngOnInit() {
    this.GetUserList();
  }
  GetUserList() {
    this.userDataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  editUser(user: User) {
    this.UpdateClicked.emit({
      user: user,
    });
  }

  deleteUser(user: User) {
    this.userDataService.deleteUser(user.id).subscribe(() => {
      // Refresh the user list after deletion
      this.users = this.users.filter((u) => u !== user);
    });
  }
}
