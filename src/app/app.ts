import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpService } from './core/services/http-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  public isLoading = false;
  private readonly httpService = inject(HttpService);
  constructor(){
    effect(()=>{
      this.isLoading = this.httpService.loading()
    })
  }
}
