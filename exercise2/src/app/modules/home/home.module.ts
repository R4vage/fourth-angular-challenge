import { PostListModule } from './../post-list/post-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OngoingComponent } from './ongoing/ongoing.component';
import { GraphComponent } from './graph/graph.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [
    OngoingComponent,
    GraphComponent,
    TeamComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    PostListModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
