import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  pageNumber:string
  constructor(private http: HttpClient) {
    this.pageNumber=''
   }

  getData(pageNumber:string): Observable<any>{
    this.pageNumber=pageNumber
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=be168ad664a6c9d493f2831167e6816f&page="+this.pageNumber
    return this.http.get<any>(url)
  }
}

