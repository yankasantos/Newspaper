import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { ScienceNewsComponent } from './science-news/science-news.component';
import { TechnologyNewsComponent } from './technology-news/technology-news.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'technology', component: TechnologyNewsComponent},
  {path: 'science', component: ScienceNewsComponent},
  {path: 'postDetail', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
