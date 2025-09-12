import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { MovieCard } from '../../components/movie-card/movie-card-component';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../core/services/http-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'move-top-page',
  imports: [AsyncPipe,MovieCard],
  templateUrl: './top-page-component.html',
  styleUrls: ['../../../../shared/ui/style/movie-card.css']
})
export class TopPage {
  public movies$:Observable<IMovie[]>;
  private readonly httpService = inject(HttpService)

  constructor(){
    this.movies$ = this.httpService.getTopMovies()
  }
}
