import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../core/services/http-service';
import { Observable, of, switchMap } from 'rxjs';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { AsyncPipe } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { genreItemMoviesAction } from '../../../../store/actions/movies-action';
import { selectGenreItem } from '../../../../store/selectors/movies-selector';

@Component({
  selector: 'move-genres-item-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './genres-item-page.html',
  styleUrls: ['../../../../shared/ui/style/movie-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenresItemPage {
  private store = inject(Store);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly httpService = inject(HttpService);
  private cdr = inject(ChangeDetectorRef);

  public movies$!:Observable<IMovie[]>;
  constructor(){
    this.getMovies()
  }

  getMovies(){
    this.movies$ = this.activatedRoute.paramMap
      .pipe(switchMap((res)=>{
        const value = res.get('id')
        this.cdr.markForCheck()
        if(value){
          this.store.dispatch(genreItemMoviesAction.loadingGenreItem({genersId:value,page:1}))
        }
        return this.store.pipe(select(selectGenreItem))
      }
    ))
  }
}
