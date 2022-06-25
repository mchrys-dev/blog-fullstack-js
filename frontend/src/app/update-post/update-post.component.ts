import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {

  public post: any;
  private id: string = '';
  public finishedApiCall: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.loadPost();
  }

  public loadPost() {
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

  public updatePost(): void {
    fetch("http://localhost:3000/api/posts/" + this.id, {
      // Adding method type
      method: "PUT",
      // Adding body or contents to send
      body: JSON.stringify({
        title: this.post.title,
        content: this.post.content
      }),
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    // Converting to JSON
    .then(response => response.json())
    // Displaying results to console
    .then(json => console.log(json)); 
  }

}
