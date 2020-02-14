import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  defaultImg = 'https://via.placeholder.com/300';
  @Output() onShowMovie: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {

  }



}
