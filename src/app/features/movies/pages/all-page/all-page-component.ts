import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../core/services/http-service';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'move-all-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './all-page-component.html',
  styleUrl: './all-page-component.css'
})
export class AllPage{
  public movies$:Observable<IMovie[]>;
  private readonly httpService = inject(HttpService);

  constructor(){
   this.movies$ = this.httpService.getPopularMovies();
  }

}
