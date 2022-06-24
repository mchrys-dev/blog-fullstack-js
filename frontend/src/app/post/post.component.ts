import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: any;
  private id: any;

  public finishedApiCall: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.displayPost();
  }

  private displayPost() {
    fetch('http://localhost:3000/api/posts/' + this.id)
      .then((resp) => resp.json())
      .then((data) => {
        this.post = data;
        this.finishedApiCall = true;
      })
      .catch(function(error) {
        console.log(error);
      }); 
  }

}
