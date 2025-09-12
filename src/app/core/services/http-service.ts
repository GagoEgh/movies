import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { finalize, map, Observable } from 'rxjs';
import { IMovie } from '../../shared/interfaces/movie.interface';
import { IGener } from '../../shared/interfaces/gener.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public loading = signal(false);

  private baseUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  public getPopularMovies(page: number = 1): Observable<IMovie[]> {
    this.loading.set(true);
    const params = new HttpParams().set('page', page);
    return(
      this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/movie/popular`, { params })
      .pipe(
        map(response=>response.results),
        finalize(() => this.loading.set(false))
      )
    )
  }

  public  searchMovies(query: string, page: number = 1): Observable<IMovie[]> {
    this.loading.set(true);
    const params = new HttpParams()
      .set('query', query)
      .set('page', page);

    return this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/search/movie`, { params })
    .pipe(
      map(response=>response.results),
      finalize(() => this.loading.set(false)));
  }

  public getMovieDetails(id: number): Observable<any> {
    this.loading.set(true);
    const params = new HttpParams().set('id',id);

    return this.http.get<any>(`${this.baseUrl}/movie/${id}`, { params })
    .pipe(finalize(() => this.loading.set(false)))
  }

  public getCinemaNow(page:number=1):Observable<IMovie[]>{
    this.loading.set(true);
    const params = new HttpParams().set('page', page);
    return (this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/movie/now_playing`,{params})
      .pipe(
        map(response=>response.results),
        finalize(() => this.loading.set(false))
      ))
  }

  public getTopMovies(page:number=1):Observable<IMovie[]>{
    this.loading.set(true);
    const params = new HttpParams().set('page', page);
    return this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/movie/top_rated`,{params})
    .pipe(
      finalize(() => this.loading.set(false)),
      map(response=>response.results))
  }

  public getGenre():Observable<IGener[]>{
    return (
      this.http.get<{genres: IGener[] }>(`${this.baseUrl}/genre/movie/list`)
      .pipe(map(response=>response.genres))
    )
  }

  public getWithGeners(genersId:string,page:number=1){
    this.loading.set(true);
    const params = new HttpParams().set('page', page).set('with_genres',genersId);
    return this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/discover/movie`,{params})
    .pipe(
       map(response=>response.results),
        finalize(() => this.loading.set(false)))
  }

}
