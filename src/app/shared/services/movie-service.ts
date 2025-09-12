import { inject, Injectable, signal, Signal } from '@angular/core';
import { HttpService } from '../../core/services/http-service';
import { IGener } from '../interfaces/gener.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly httpService = inject(HttpService);

  public genres:Signal<IGener[] | undefined> = toSignal(this.httpService.getGenre());
  public movie:Signal<IMovie[] | undefined> = toSignal(this.httpService.getPopularMovies());
  public isChangetGenre = signal(false);
}
