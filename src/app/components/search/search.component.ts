import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MovieStore } from '../../state/moviesStore';
import { Movie } from '../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  isSearchServerError: boolean = false;
  searchServerError : string = "";

  constructor(
    private data: DataService,
    private router: Router,
    public movieStore : MovieStore
  ) { }

  get store() {
    return this.movieStore.movies;
  }

  ngOnInit() {
    this.data.cleanSearches()
  }

  async searchAction(value : string){
    this.isSearchServerError = false;
    let res = await this.data.fetchOmdbapi(value);
    if(res.Response === "False"){
      this.isSearchServerError = true;
      this.searchServerError = res.Error;
    }
    else{
      res.Search.forEach(movie => {
        this.store.push(movie)
      });
      this.router.navigate(['movies']);
    }
  }

}
