import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerResult: any = []
  trendingResult: any = []
  ActionMovieResult: any = []
  AdventureMovieResult: any = []
  AnimationMovieResult: any = []
  ComedyMovieResult: any = []
  DocumentaryMovieResult: any = []
  ScienceFictionMovieResult: any = []
  ThrillerMovieResult: any = []


  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
    this.bannerData()
    this.trendingRowData()
    this.ActionMovieData()
    this.AdventureMovieData()
    this.AnimationMovieData()
    this.ComedyMovieData()
    this.DocumentaryMovieData()
    this.ScienceFictionMovieData()
    this.ThrillerMovieData()
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      // console.log(result, 'bannerdata');
      this.bannerResult = result.results;
    })
  }

  trendingRowData() {
    this.service.trendingMoviesApiData().subscribe((result) => {
      // console.log(result, 'trendingData');
      this.trendingResult = result.results;
    })
  }


  ActionMovieData() { this.service.getActionMovie().subscribe((result) => { this.ActionMovieResult = result.results; }) }
  AdventureMovieData() { this.service.getAdventureMovie().subscribe((result) => { this.AdventureMovieResult = result.results; }) }
  AnimationMovieData() { this.service.getAnimationMovie().subscribe((result) => { this.AnimationMovieResult = result.results; }) }
  ComedyMovieData() { this.service.getComedyMovie().subscribe((result) => { this.ComedyMovieResult = result.results; }) }
  DocumentaryMovieData() { this.service.getDocumentaryMovie().subscribe((result) => { this.DocumentaryMovieResult = result.results; }) }
  ScienceFictionMovieData() { this.service.getScienceFictionMovie().subscribe((result) => { this.ScienceFictionMovieResult = result.results; }) }
  ThrillerMovieData() { this.service.getThrillerMovie().subscribe((result) => { this.ThrillerMovieResult = result.results; }) }

}
