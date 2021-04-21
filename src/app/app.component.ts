import { Component, OnInit } from '@angular/core';

import { CommentsService } from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search-content';
  searchList: string[] = [];
  searchTerm = "";
  counter = 0;

  constructor(private comment: CommentsService) {}

  ngOnInit() { }

  getResult(): void {
    if(this.searchTerm.length > 2 && this.counter < 20){
      this.counter++;
      this.comment.getComments(this.searchTerm).subscribe(comments => {
        this.searchList = comments.map(comment => {
          return {
            name: comment.name,
            email: comment.email,
            body: comment.body.slice(0,63)
          }
        });
        this.searchList = this.searchList.slice(0,20);   
      });
    }
  }
}
