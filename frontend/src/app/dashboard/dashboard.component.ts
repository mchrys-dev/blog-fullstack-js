import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public posts: any[] = [];
  public finishedApiCall: boolean = false;

  constructor() { }

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
