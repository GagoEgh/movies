import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, effect,inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GenrePage } from '../pages/genre-page/genre-page-component';
import { SearchIcon } from '../../../shared/ui/icons/search-icon/search-icon';
import { Path } from '../../../shared/interfaces/movie.interface';
import { HttpService } from '../../../core/services/http-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'movies-component',
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink, RouterLinkActive, GenrePage,SearchIcon],
  templateUrl: './movies-component.html',
  styleUrl: './movies-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Movies implements AfterViewInit{
  private readonly httpService= inject(HttpService);

  private readonly router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  public readonly path = Path;
  public searchControl = new FormControl('');


  constructor(){
    this.initLoadingEffect();
     this.updateActiveStyle()
  }

  ngAfterViewInit(): void {
    // this.updateActiveStyle()
  }

  public deleteMovie(){
    this.searchControl.reset();
  }

  private initLoadingEffect(){
    effect(()=>{
      this.httpService.loading();
      this.cdr.markForCheck();
    });
  }

  private updateActiveStyle(){
    this.searchControl.valueChanges
      .subscribe((res)=>{
        if(res){
          this.router.navigate(['movies', 'search'], {
            queryParams: { key: res }
          });
        }
      })
  }
}
