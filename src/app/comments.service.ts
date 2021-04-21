import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(searchTerm): Observable<any>{
    let url = "https://jsonplaceholder.typicode.com/comments?q=" + searchTerm;
    return this.http.get(url);
  }
}
