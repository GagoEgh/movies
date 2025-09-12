export interface IMovie{
    adult:boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: 755898
    original_language:string,
    original_title: string,
    overview:string,
    popularity: number,
    poster_path:string,
    release_date: string,
    title: string,
    video: false
    vote_average:number
    vote_count: number
}

export enum Path{
    all='all',
    top='top',
    upcoming= 'upcoming',
    search='search'
}