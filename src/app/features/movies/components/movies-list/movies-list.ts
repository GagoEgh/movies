import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../movie-card/movie-card-component';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { searchMoviesAction } from '../../../../store/actions/movies-action';
import { selectSearchMovies } from '../../../../store/selectors/movies-selector';

@Component({
  selector: 'movies-list',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './movies-list.html',
  styleUrls: ['../../../../shared/ui/style/movie-card.css']
})
export class MoviesList{
  private store = inject(Store);
  private readonly activatedRoute = inject(ActivatedRoute)
  public movies$!:Observable<IMovie[]>;
  
  constructor(){
    this.getMovies();
  }

  private getMovies(){
    this.movies$ = this.activatedRoute.queryParams
    .pipe(
      switchMap((res)=>{
      this.store.dispatch(searchMoviesAction.loadingSearchMovies({query:res['key'],page:1}));
      return this.store.pipe(select(selectSearchMovies))
    }))
  }
}
