import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { IMovie } from '../../shared/interfaces/movie.interface';
import { IGener } from '../../shared/interfaces/gener.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  private readonly http = inject(HttpClient);

  public getPopularMovies(page: number = 1): Observable<IMovie[]> {
    const headers = { Authorization: `Bearer ${this.apiKey}` };
    const params = new HttpParams().set('language', 'ru-RU').set('page', page);

    return(
      this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/movie/popular`, { headers, params })
      .pipe(map(response=>response.results))
    )
  }

  searchMovies(query: string, page: number = 1): Observable<{ results: any[] }> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'ru-RU')
      .set('query', query)
      .set('page', page);

    return this.http.get<{ results: any[] }>(`${this.baseUrl}/search/movie`, { params });
  }

  getMovieDetails(id: number): Observable<any> {
    const headers = { Authorization: `Bearer ${this.apiKey}` };
    const params = new HttpParams().set('language', 'ru-RU').set('id',id);

    return this.http.get<any>(`${this.baseUrl}/movie/${id}`, {headers, params });
  }

  getCinemaNow(page:number=1):Observable<IMovie[]>{
    const headers = { Authorization: `Bearer ${this.apiKey}`};
    const params = new HttpParams().set('language', 'ru-RU').set('page', page);
    return (this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/movie/now_playing`,{headers,params})
      .pipe(map(response=>response.results)))
  }

  getTopMovies(page:number=1):Observable<IMovie[]>{
    const headers = { Authorization: `Bearer ${this.apiKey}`};
    const params = new HttpParams().set('language', 'ru-RU').set('page', page);
    return this.http.get<{ results: IMovie[] }>(`${this.baseUrl}/movie/top_rated`,{headers,params})
    .pipe(map(response=>response.results))
  }

  getGenre():Observable<IGener[]>{
    const headers = { Authorization: `Bearer ${this.apiKey}`};
    const params = new HttpParams().set('language', 'ru-RU');
    return (
      this.http.get<{genres: IGener[] }>(`${this.baseUrl}/genre/movie/list`,{headers,params})
      .pipe(map(response=>response.genres))
    )
  }

  getWithGeners(genersId:string,page:number=1){
    //GET https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=ru-RU&with_genres=28,53&page=1
    const headers = { Authorization: `Bearer ${this.apiKey}`};
    const params = new HttpParams().set('language', 'ru-RU').set('page', page).set('with_genres',genersId);
    return this.http.get<any>(`${this.baseUrl}/discover/movie`,{headers,params})
  }

}
