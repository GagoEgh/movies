import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../movie-card/movie-card-component';
import { HttpService } from '../../../../core/services/http-service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'movies-list',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css'
})
export class MoviesList{

  private readonly httpService = inject(HttpService);
  private readonly activatedRoute = inject(ActivatedRoute)
  public movies$:Observable<IMovie[]>;
  

  constructor(){
    this.movies$ = this.activatedRoute.queryParams
    .pipe(switchMap((res)=>{
      return this.httpService.searchMovies(res['key'])})
    )
  }
}
