import { Component, inject } from '@angular/core';
import { HttpService } from '../../../../core/services/http-service';

@Component({
  selector: 'movie-list',
  imports: [],
  templateUrl: './movie-list-component.html',
  styleUrl: './movie-list-component.css'
})
export class MovieList {
    private readonly httpService = inject(HttpService)

  ngOnInit(): void {
    this.httpService.getPopularMovies()
    .subscribe((res)=>{
      console.log('RES',res)
    })

    this.httpService.getCinemaNow()
      .subscribe((res)=>{
      console.log('NOw',res)
    })

    this.httpService.getMovieDetails(1038392)
      .subscribe((res)=>{
      console.log('Details',res)
    })

    this.httpService.getTopMovies()
    .subscribe((res)=>{
      console.log('TOP',res)
    })

    this.httpService.getGenre()
    .subscribe((res)=>{
      console.log('G E  N',res)
    })

    this.httpService.getWithGeners('80')
    .subscribe((res)=>{
      console.log('WITH',res)
    })

  }

  getBackdropUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
