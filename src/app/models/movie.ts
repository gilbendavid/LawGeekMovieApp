export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;

    //Full Movie Details
    Actors? :string;
    Awards?: string;
    BoxOffice?: string;
    Country?: string;
    DVD?: string;
    Director?: string;
    Genre?: string;
    Language?: string;
    Metascore?:string;
    Plot?: string;
    Production?: string;
    Rated?: string;
    Ratings?: [];
    Released?: string;
    Runtime?: string;
    Website?: string;
    Writer?: string;
    imdbRating?: string;
    imdbVotes?: string;
    Response?: string; 
}