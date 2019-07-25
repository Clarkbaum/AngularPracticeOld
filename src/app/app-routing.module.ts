import { NgModule } from '@angular/core';
import { NewProfileComponent } from './new-profile/new-profile.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'new-profile', component: NewProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
