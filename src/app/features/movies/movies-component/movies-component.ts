import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GenrePage } from '../pages/genre-page/genre-page-component';
import { SearchIcon } from '../../../shared/ui/icons/search-icon/search-icon';
import { Path } from '../../../shared/interfaces/movie.interface';


@Component({
  selector: 'movies-component',
  imports: [RouterOutlet,RouterLink, RouterLinkActive, GenrePage,SearchIcon],
  templateUrl: './movies-component.html',
  styleUrl: './movies-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class Movies{
  public readonly path = Path;

}
