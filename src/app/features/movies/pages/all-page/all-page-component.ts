import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { popularMoviesAction } from '../../../../store/actions/movies-action';
import { selectPopularMovies } from '../../../../store/selectors/movies-selector';

@Component({
  selector: 'move-all-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './all-page-component.html',
  styleUrls: ['../../../../shared/ui/style/movie-card.css']
})
export class AllPage{
  private readonly store = inject(Store)
  public movies$:Observable<IMovie[]>;

  constructor(){
    this.store.dispatch(popularMoviesAction.loadingPopularMovies({page:1}));
    this.movies$ = this.store.pipe(select(selectPopularMovies))
  }

}
