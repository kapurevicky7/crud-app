import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CreatePageModule } from '../components/create/create.module';
import { ListPageModule } from '../components/list/list.module';
import { UpdateUserPageModule } from '../components/update-user/update-user.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CreatePageModule,
    ListPageModule,
    UpdateUserPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
