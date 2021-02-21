import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieStore } from '../state/moviesStore';
import { Movie } from '../models/movie';


const apiUrl = 'http://www.omdbapi.com/?apikey=ed440c27';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient,
    public movieStore : MovieStore) {}


  get store() {
    return this.movieStore.movies;
  }

  cleanSearches(){
    this.movieStore.movies = [];
  }

  async fetchOmdbapi(searchValue: string): Promise<any> {
    let searchUrl = `${apiUrl}&s=${searchValue}`
    let res = await this.http.get<any>(searchUrl).toPromise();
    return res;
  }

  async fetchOmdbapiByMovieId(imdbID: string): Promise<any> {
    let searchUrl = `${apiUrl}&i=${imdbID}&plot=full`
    let res = await this.http.get<any>(searchUrl).toPromise();
    return res;
  }

  getAllTitles(): string[] {
    return this.store.map(m => m.Title);    
  }

  getAllReleasedYears(): string[] {
    return this.store.map(m => m.Year);    
  }

  getMoviesTitelsByReleasedYear(year : string): string[] {
    return this.store
    .filter(m => m.Year === year)
    .map(m => m.Title);    
  }

  getMovie(title: string): Movie {
    return this.store.find(m => m.Title === title);
  }

  getMovieByIndex(index: number): Movie {
    return this.store[index];
  }

  getMovieCount(): number {
    return this.store.length;    
  }
  
}

