import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from './post/post.component';
import { PostList } from './post-list/post-list.component';



@NgModule({
  declarations: [
    PostList,
    Post
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostList
  ]
})
export class PostListModule { }
