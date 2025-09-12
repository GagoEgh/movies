import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { HttpService } from '../../../../core/services/http-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'move-upcoming-movies-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './upcoming-movies-component-page.html',
 styleUrls: ['../../../../shared/ui/style/movie-card.css']
})
export class UpcomingMoviesPage {
  public movies$:Observable<IMovie[]>;
  private readonly httpService = inject(HttpService);

  constructor(){
   this.movies$ = this.httpService.getCinemaNow();
  }

}
