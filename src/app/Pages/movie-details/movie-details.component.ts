import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/Service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }

  getMovieDetailsResult: any | undefined;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {

    let getParamId = this.router.snapshot.paramMap.get('id');
    // console.log(getParamId, 'getParamId=');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getMovieDetails');
      this.getMovieDetailsResult = result;
    })
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      // console.log(result, 'getMovieVideo'); 
      result.results.forEach((element: any) => {
        if (element.type == "Trailer") {
          this.getMovieVideoResult = element.key
        }
      });
    })
  }

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      // console.log(result, 'getMovieCast');
      this.getMovieCastResult = result.cast
    })
  }
}

// getMovieCast
// getMovieVideo