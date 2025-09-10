import { Component, effect, inject } from '@angular/core';
import { IGener } from '../../../../shared/interfaces/gener.interface';
import { MovieService } from '../../../../shared/services/movie-service';

@Component({
  selector: 'move-genre-page',
  imports: [],
  templateUrl: './genre-page-component.html',
  styleUrl: './genre-page-component.css'
})
export class GenrePage {

  private readonly movieService = inject(MovieService);
  public  genres:IGener[]|undefined

  constructor(){
    effect(()=>{
      this.genres = this.movieService.genres();
    })
  }

}
