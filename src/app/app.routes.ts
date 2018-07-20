import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TypeOfTaskComponent } from './typeOfTask/type-of-task/type-of-task.component';
import { RoomComponent } from './typeOfTask/room/room/room.component';
import { BathroomComponent } from './typeOfTask/bathroom/bathroom/bathroom.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},

{
  path: 'room',
  component: RoomComponent,
},

{
  path: 'bathroom',
  component: BathroomComponent,
},

{
  path: '',
  component: MainComponent,
  children: [{
    component: DashboardComponent,
    path: '',
  }, {
    path: '',
    loadChildren: './users/users.module#UsersModule',
  },
  {
    path: 'type-of-task',
    component: TypeOfTaskComponent,
  },
  ],
},
];

export const appRoutes: any = RouterModule.forRoot(routes);
