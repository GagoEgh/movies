import { ChangeDetectionStrategy, ChangeDetectorRef, Component, effect,inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GenrePage } from '../pages/genre-page/genre-page-component';
import { SearchIcon } from '../../../shared/ui/icons/search-icon/search-icon';
import { Path } from '../../../shared/interfaces/movie.interface';
import { HttpService } from '../../../core/services/http-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../../../shared/services/movie-service';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'movies-component',
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink, RouterLinkActive, GenrePage,SearchIcon],
  templateUrl: './movies-component.html',
  styleUrl: './movies-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Movies{
  private readonly httpService= inject(HttpService);
  private readonly movieServie = inject(MovieService)
  private readonly router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  public readonly path = Path;
  public searchControl = new FormControl('');


  constructor(){
    this.initGenreChange();
    this.initLoadingEffect();
    this.updateActiveStyle()
  }

  public deleteMovie(){
    this.searchControl.reset();
  }

  private initGenreChange(){
    effect(()=>{
     if(this.movieServie.isChangetGenre()){
      this.searchControl.reset()
     }
     this.movieServie.isChangetGenre.set(false)
    })
  }

  private initLoadingEffect(){
    effect(()=>{
      this.httpService.loading();
      this.cdr.markForCheck();
    });
  }

  private updateActiveStyle(){
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe((res)=>{
        if(res){
          this.router.navigate(['movies', 'search'], {
            queryParams: { key: res }
          });
        }
      })
  }
}
