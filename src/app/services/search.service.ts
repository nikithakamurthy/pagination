import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchText:string
  constructor(private http: HttpClient) {
    this.searchText=''
   }

  getSearchData(searchText:string): Observable<any>{
    this.searchText=searchText
    const url = "http://api.themoviedb.org/3/search/movie?api_key=be168ad664a6c9d493f2831167e6816f&query="+this.searchText
    return this.http.get<any>(url)
  }
}
