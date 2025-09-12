import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../../core/services/http-service';
import { Observable, of, switchMap } from 'rxjs';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'move-genres-item-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './genres-item-page.html',
  styleUrl: './genres-item-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenresItemPage {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly httpService = inject(HttpService);
  private cdr = inject(ChangeDetectorRef);

  public movies$!:Observable<IMovie[]>;
  constructor(){
    this.getMovies()
    // this.movies$ = this.activatedRoute.paramMap
    //   .pipe(switchMap((res)=>{
    //     const value = res.get('id')
    //     this.cdr.markForCheck()
    //     return value?this.httpService.getWithGeners(value):of()
    //   }
    // ))

  }

  getMovies(){
    this.movies$ = this.activatedRoute.paramMap
      .pipe(switchMap((res)=>{
        const value = res.get('id')
        this.cdr.markForCheck()
        return value?this.httpService.getWithGeners(value):of()
      }
    ))
  }
}
