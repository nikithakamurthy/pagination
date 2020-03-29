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
  term: any

  constructor(private movie:MoviesService){
    this.data=new Array<any>()
  }

  getMovies(){
    this.movie.getData().subscribe((data)=>{
     
      this.data=data.results
    console.log(this.data)
      this.totalRecords=data.results.length
    
      
  
    })
  }
}


