import { inject, Injectable, signal, Signal } from '@angular/core';
import { IGener } from '../interfaces/gener.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { select, Store } from '@ngrx/store';
import { genreMoviesAction } from '../../store/actions/movies-action';
import { selectGenre } from '../../store/selectors/movies-selector';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private store = inject(Store);
  public genres:Signal<IGener[]|undefined>;

  constructor(){
    this.store.dispatch(genreMoviesAction.loadingGenre());
    this.genres =  toSignal(this.store.pipe(select(selectGenre)))
  }
 
  public isChangetGenre = signal(false);
}
