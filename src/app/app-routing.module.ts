import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MentorFormComponent } from './mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { ProfilePresentationComponent } from './profile-presentation/profile-presentation.component';

const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'mentor-form', component: MentorFormComponent
  },
  {
    path: 'mentor-list', component: ProfilePresentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
