import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  stars: String[] = ['☆', '☆', '☆', '☆', '☆'];
  ratingMapper: Array<object> = [];
  emojiPath: String = '../../assets/media/Rating';
  emoji: String = '';
  @Input() parentId: string;
  @Output() ratingSelected = new EventEmitter<RatingModel>();
  constructor() { }

  ngOnInit() {
  }

  private changeStar(selected, spanArray, headStart): void {
    const star = selected === 0 ? '☆' : '★';
    this.stars = this.stars.map((value: String, index) => {
      if (index >= headStart) {
        return star;
      } else {
        return '☆';
      }
    });
  }

  public hover(index: number): void {
    this.emoji = this.emojiPath + (4 - index + 1).toString() + '.svg';
  }

  public click(index: number): void {
    this.changeStar(0, this.stars, 0);
    this.changeStar(1, this.stars, index);
    this.ratingSelected.emit({ParentId : this.parentId , Index : 4 - index + 1});
  }
}

interface RatingModel {
  ParentId: String ;
  Index: number ;
}
