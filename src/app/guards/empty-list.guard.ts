
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { DataService } from '../services/data.service';
import { MovieStore } from '../state/moviesStore';


@Injectable({
  providedIn: 'root'
})
export class EmptyListsGuard implements CanActivate {
  constructor(
    public data: DataService,
    private router: Router,
    public movieStore : MovieStore)
  {}

  get store() {
    return this.movieStore.movies;
  }

 canActivate(): boolean |  UrlTree {
    const listCount =  this.store.length
    if (listCount > 0) return true;
    return this.router.createUrlTree(['search']);
  }
  
}
