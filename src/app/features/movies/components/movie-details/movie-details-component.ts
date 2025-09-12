import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { 
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { StarIcon } from '../../../../shared/ui/icons/star-icon/star-icon';
import { IMovieDetails } from '../../../../shared/interfaces/movie-details.interface';
import { NgIf, SlicePipe } from '@angular/common';

@Component({
  selector: 'movie-details',
  imports: [
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    StarIcon,
    NgIf,
    SlicePipe
  ],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.css'
})
export class MovieDetails {
 
  public data = inject<IMovieDetails>(MAT_DIALOG_DATA);
  public  getBackdropUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  public sliceVoteAverege(){
    let voteAverage = this.data.vote_average.toString();
    return voteAverage.slice(0,3)
  }
}
