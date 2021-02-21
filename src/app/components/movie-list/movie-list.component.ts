import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MovieStore } from 'src/app/state/moviesStore';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  titles: string[] = [];
  releasedYear: string[] = [];
  filterReleasedYear: string; 

  constructor( 
    public data: DataService,
    private router: Router,
    public movieStore : MovieStore)
  {}

  get store() {
    return this.movieStore.movies;
  }

  ngOnInit() {
    this.titles = this.data.getAllTitles();
    this.releasedYear = this.data.getAllReleasedYears();
  }

  selectMovieIndex(index: number) {
    this.router.navigate(['movies', index]);
  }

  filterResults(){
    if(this.filterReleasedYear === ""){
      this.titles = this.data.getAllTitles();
    }
    else{
      this.titles = this.data.getMoviesTitelsByReleasedYear(this.filterReleasedYear);
    } 
    
  }

}
