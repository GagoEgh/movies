import { Component } from '@angular/core';
import { MovieList } from '../components/movie-list/movie-list-component';
import { MovieCard } from '../components/movie-card/movie-card-component';

@Component({
  selector: 'movies-component',
  imports: [MovieList,MovieCard],
  templateUrl: './movies-component.html',
  styleUrl: './movies-component.css'
})
export class Movies {

}
