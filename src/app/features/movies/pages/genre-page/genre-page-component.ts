import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject } from '@angular/core';
import { IGener } from '../../../../shared/interfaces/gener.interface';
import { MovieService } from '../../../../shared/services/movie-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'move-genre-page',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './genre-page-component.html',
  styleUrl: './genre-page-component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class GenrePage {

  private readonly movieService = inject(MovieService);
  private cdr = inject(ChangeDetectorRef);

  public  genres:IGener[]|undefined

  constructor(){
    effect(()=>{
      this.genres = this.movieService.genres();
      this.cdr.markForCheck();
    })
  }

  public changePath(){
    this.movieService.isChangetGenre.set(true)
  }

}
