import { inject, Injectable, Signal } from '@angular/core';
import { HttpService } from '../../core/services/http-service';
import { IGener } from '../interfaces/gener.interface';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly httpService = inject(HttpService);

  public genres:Signal<IGener[] | undefined> = toSignal(this.httpService.getGenre())
}
