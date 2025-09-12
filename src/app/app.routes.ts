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
        
        { path: 'search', loadComponent:()=>import('./features/movies/components/movies-list/movies-list').then(c=>c.MoviesList)},
        {path:  'genre/:id',loadComponent:()=>import('./features/movies/pages/genres-item-page/genres-item-page').then(c=>c.GenresItemPage)}
        ]
    },
    { path: '**', component: NotFound }

];
