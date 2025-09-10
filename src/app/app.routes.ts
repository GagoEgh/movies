import { Routes } from '@angular/router';
import { AllPage } from './features/movies/pages/all-page/all-page-component';
import { NotFound } from './features/not-found/not-found';
import { Movies } from './features/movies/movies-component/movies-component';

export const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    {
        path: 'movies',
        component: Movies,
        children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: AllPage },
        { path: 'top', loadComponent:()=>import('./features/movies/pages/top-page/top-page-component').then(c=>c.TopPage)},
        { path: 'upcoming',loadComponent:()=>import('./features/movies/pages/upcoming-movies-page/upcoming-movies-component-page').then(c=>c.UpcomingMoviesPage)},
        {path:'movie/:id', loadComponent:()=>import('./features/movies/components/movie-details/movie-details-component').then(c=>c.MovieDetails)}
        ]
    },
    { path: '**', component: NotFound }

];
