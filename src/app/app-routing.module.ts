import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemListComponent } from './poem-list/poem-list.component';
import { StoryListComponent } from './story-list/story-list.component';

const routes: Routes = [
  { path: '', component: PoemListComponent},
  { path: 'stories', component: StoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
