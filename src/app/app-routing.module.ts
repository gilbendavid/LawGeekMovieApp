import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchComponent } from './components/search/search.component';
import { EmptyListsGuard } from './guards/empty-list.guard';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'}, 
  {path: 'search', component: SearchComponent}, 
  {path: 'movies', component: MovieListComponent ,canActivate: [EmptyListsGuard]}, 
  {path: 'movies/:ord', component: MovieDetailsComponent, canActivate: [EmptyListsGuard]},
  {path: '**', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
