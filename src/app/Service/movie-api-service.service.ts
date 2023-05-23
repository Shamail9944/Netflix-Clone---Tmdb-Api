import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl: string = 'https://api.themoviedb.org/3/'
  apikey: string = '02904d86f4b40892165cf3d0d8dc0727'

  bannerApiData(): Observable<any> { return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`) }

  trendingMoviesApiData(): Observable<any> { return this.http.get(`${this.baseurl}/trending/movie/week?api_key=${this.apikey}`) }
  searchMovie(data: any): Observable<any> { return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`) }

  getMovieDetails(data: any): Observable<any> { return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`) }
  getMovieVideo(data: any): Observable<any> { return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`) }
  getMovieCast(data: any): Observable<any> { return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`) }

  getActionMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`) }
  getAdventureMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`) }
  getAnimationMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`) }
  getComedyMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`) }
  getDocumentaryMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`) }
  getScienceFictionMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`) }
  getThrillerMovie(): Observable<any> { return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`) }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) { console.error('An error occurred:', error.error); }
    else { console.error(`Backend returned code ${error.status}, (Error at server end) body was: `, error.error); }
    return throwError(() => new Error('Something bad happened (Error at user end) ; please try again later.'));
  }
}
