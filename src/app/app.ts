import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpService } from './core/services/http-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit{
  private readonly httpService = inject(HttpService)

  movies:any = [];

  ngOnInit(): void {
  }

  getBackdropUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
