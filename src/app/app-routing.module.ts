import { NgModule } from '@angular/core';
import { NewProfileComponent } from './new-profile/new-profile.component';
import {RouterModule, Routes} from '@angular/router';
import {ListProfilesComponent} from './list-profiles/list-profiles.component';

const routes: Routes = [
  { path: 'new-profile', component: NewProfileComponent},
  { path: 'list-profiles', component: ListProfilesComponent},
  { path: '', component: ListProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
