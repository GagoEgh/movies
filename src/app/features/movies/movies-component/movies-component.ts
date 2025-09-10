import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GenrePage } from '../pages/genre-page/genre-page-component';
import { SearchIcon } from '../../../shared/ui/icons/search-icon/search-icon';

@Component({
  selector: 'movies-component',
  imports: [RouterOutlet,RouterLink, RouterLinkActive, GenrePage,SearchIcon],
  templateUrl: './movies-component.html',
  styleUrl: './movies-component.css'
})
export class Movies {

}
