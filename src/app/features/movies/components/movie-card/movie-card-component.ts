import { Component, effect, inject, Input } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { StarIcon } from '../../../../shared/ui/icons/star-icon/star-icon';
import { IGener } from '../../../../shared/interfaces/gener.interface';
import { MovieService } from '../../../../shared/services/movie-service';

@Component({
  selector: 'movie-card',
  imports: [StarIcon],
  templateUrl: './movie-card-component.html',
  styleUrl: './movie-card-component.css'
})
export class MovieCard {
  public  genres:IGener[]|undefined;
  public genre:IGener|undefined
  @Input()movie!:IMovie;

  private readonly movieService = inject(MovieService);


  constructor(){
    effect(()=>{
      this.genres = this.movieService.genres();
      if(this.genres && this.genres.length){
       this.genre = this.genres?.find(genre=>genre.id===this.movie.genre_ids[0])
      }

    })
  }

  public  getBackdropUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  public sliceVoteAverege(){
    let voteAverage = this.movie.vote_average.toString();
    return voteAverage.slice(0,3)
  }
}
