import {Component, Input, OnInit} from '@angular/core';
import {Place} from "../../../interfaces";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  @Input() places: Place[];
  @Input() parentForm: FormGroup;
  @Input() row: number;
  constructor() { }

  ngOnInit() {
  }

}
