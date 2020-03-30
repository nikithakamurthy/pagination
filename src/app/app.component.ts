import { Component } from '@angular/core';
import {MoviesService} from './services/movies.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pagination-app';
  data: Array<any>
  totalRecords:number
  page:string
  searchText: string

  constructor(private movie:MoviesService){
    this.data=new Array<any>()
    this.searchText=''
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movie.getData().subscribe((data)=>{
      this.data=data.results
      this.totalRecords=data.results.length   
    })
  }
}


