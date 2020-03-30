import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=be168ad664a6c9d493f2831167e6816f"
    return this.http.get<any>(url)

  }


}

