import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Post implements OnInit {

  
  @Input() postText:string = "";
  @Input() postDate:string = "";
  @Input() postImgUrl:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
