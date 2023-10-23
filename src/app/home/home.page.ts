import { Component, ViewChild } from '@angular/core';
import { ListPage } from '../../app/components/list/list.page';
import { UpdateUserPage } from '../../app/components/update-user/update-user.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(ListPage)
  ListPage: ListPage | undefined;
  @ViewChild(UpdateUserPage)
  UpdateUserPage: UpdateUserPage | undefined;
  constructor() {}

  SubmitClicked(event: any) {
    if (event.Submitted) {
      this.ListPage?.GetUserList();
    }
  }
  UpdateClicked(event: any) {
    if (event.user) {
      // this.onUpdateUser(event.user);
      this.UpdateUserPage?.onUpdateUser(event.user);
    }
  }
}
