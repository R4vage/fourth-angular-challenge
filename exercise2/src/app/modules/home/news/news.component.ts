import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  @Input() newsText:string = "";
  @Input() newsTitle:string = "";
  @Input() newsImgUrl:string = "";
  @Input() newsDate:string = "";
  @Input() newsCreator:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
