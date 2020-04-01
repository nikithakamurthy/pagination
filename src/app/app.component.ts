import { Component } from '@angular/core';
import {MoviesService} from './services/movies.service'
import {SearchService} from './services/search.service'


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
  pageNumber: string
  values = ''
  

  constructor(private movie:MoviesService, private search:SearchService){
    this.data=new Array<any>()
    this.searchText=''
    this.pageNumber=''
  }

  ngOnInit() {
    this.getMovies('1');
  }

  getMovies(pageNumber:string){
    this.page=pageNumber
    this.pageNumber=pageNumber
    this.movie.getData(this.pageNumber).subscribe((data)=>{
      this.data=data.results
      this.totalRecords=data.results.length  
    })
  }

  getSearch(val){
    if(val==''){
      this.getMovies('1')
    }
    else{
      this.searchText=val
      this.search.getSearchData(this.searchText).subscribe((data)=>{
        this.data=data.results
        this.totalRecords=data.results.length
      })
    }
  }

  onKey(event: any) { 
    this.values =event.target.value
    this.getSearch(this.values)
  }
}


