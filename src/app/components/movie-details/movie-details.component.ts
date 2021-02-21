import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { MovieStore } from 'src/app/state/moviesStore';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  filterargs = ['Title','Ratings','Response','Poster'];
  
  constructor(
    private data: DataService, 
    private route: ActivatedRoute, 
    public movieStore : MovieStore
  ) { }


  get store() {
    return this.movieStore.movies;
  }

  async ngOnInit() {
    let ord = Number(this.route.snapshot.params['ord']);
    this.movie =  this.data.getMovieByIndex(ord)
    let res = await this.data.fetchOmdbapiByMovieId(this.movie.imdbID);
    if(res.Response === "False"){
      console.log(res.Error)
    }
    this.movie = res
  }

}
