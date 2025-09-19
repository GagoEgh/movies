import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { topMoviesAction } from '../../../../store/actions/movies-action';
import { selectTopMovies } from '../../../../store/selectors/movies-selector';

@Component({
  selector: 'move-top-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './top-page-component.html',
  styleUrls: ['../../../../shared/ui/style/movie-card.css']
})
export class TopPage {
  private store = inject(Store);
  public movies$:Observable<IMovie[]>;

  constructor(){
    this.store.dispatch(topMoviesAction.loadingTopMovies({page:1}));
    this.movies$ = this.store.pipe(select(selectTopMovies))
  }
}
