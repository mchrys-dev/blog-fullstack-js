import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  public formData = {
    title: '',
    content: ''
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  public doApiCall() {
    fetch("http://localhost:3000/api/posts", {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
        title: this.formData.title,
        content: this.formData.content
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
