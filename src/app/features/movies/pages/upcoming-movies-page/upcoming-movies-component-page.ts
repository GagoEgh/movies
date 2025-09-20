import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { nowMoviesAction } from '../../../../store/actions/movies-action';
import { selectNowMovies } from '../../../../store/selectors/movies-selector';

@Component({
  selector: 'move-upcoming-movies-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './upcoming-movies-component-page.html',
 styleUrls: ['../../../../shared/ui/style/movie-card.css']
})
export class UpcomingMoviesPage {
  private store = inject(Store)
  public movies$:Observable<IMovie[]>;

  constructor(){
    this.store.dispatch(nowMoviesAction.loadingNewMovies({page:1}));
    this.movies$ = this.store.pipe(select(selectNowMovies));
  }

}
