import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }


}
