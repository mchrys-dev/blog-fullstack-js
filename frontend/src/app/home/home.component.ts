import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: any[] = [];
  public finishedApiCall = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    fetch('http://localhost:3000/api/posts')
      .then((resp) => resp.json())
      .then((data) => {
        this.posts = data;
        this.finishedApiCall = true;
      })
      .catch(function(error) {
        console.log(error);
      });     
  }
}
