import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-poem-list',
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent implements OnInit {

  poemList: Array<Object> = [];
  ratingArray: Array<RatingModel> = [];
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.getAllPoems();
  }
  public getAllPoems(): void {
    this.apiService.getPoems().subscribe((data: Array<Object>) => {
      this.poemList = data;
    });
  }

  public ratingSelected($event: RatingModel): void {
    const index = this.ratingArray.findIndex( x => x.ParentId === $event.ParentId );
    if (index >= 0 ) {
      this.ratingArray[index] = $event;
    } else {
      this.ratingArray.push($event);
    }
    console.log(this.ratingArray);
  }
}

interface RatingModel {
  ParentId: String ;
  Index: number ;
}
