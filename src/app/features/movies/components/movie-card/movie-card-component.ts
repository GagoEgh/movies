import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject, Input } from '@angular/core';
import { IMovie } from '../../../../shared/interfaces/movie.interface';
import { StarIcon } from '../../../../shared/ui/icons/star-icon/star-icon';
import { IGener } from '../../../../shared/interfaces/gener.interface';
import { MovieService } from '../../../../shared/services/movie-service';
import { MatDialog,} from '@angular/material/dialog';
import { MovieDetails } from '../movie-details/movie-details-component';
import { HttpService } from '../../../../core/services/http-service';

@Component({
  selector: 'movie-card',
  imports: [StarIcon],
  templateUrl: './movie-card-component.html',
  styleUrl: './movie-card-component.css',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class MovieCard {
  public  genres:IGener[]|undefined;
  public genre:IGener|undefined
  @Input()movie!:IMovie;

  private readonly dialog = inject(MatDialog);
  private readonly movieService = inject(MovieService);
  private readonly httpService = inject(HttpService)
  private cdr = inject(ChangeDetectorRef);
  constructor(){
    effect(()=>{
      this.genres = this.movieService.genres();
      if(this.genres && this.genres.length){
       this.genre = this.genres?.find(genre=>genre.id===this.movie.genre_ids[0]);
      }
      this.httpService.loading();
      this.cdr.markForCheck();
    })
  }

  public openDialog() {
    if(this.movie){
      this.httpService.getMovieDetails(this.movie.id)
      .subscribe(details=>{
        this.dialog.open(MovieDetails,{
          data:details,
          width: '40%',
          height: '500px',
          maxHeight:'600px',
          autoFocus: true
        });
      })
    }
  }

  public  getBackdropUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  public sliceVoteAverege(){
    let voteAverage = this.movie.vote_average.toString();
    return voteAverage.slice(0,3)
  }
}
