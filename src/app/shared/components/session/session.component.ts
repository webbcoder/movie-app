import {Component, Input, OnInit} from '@angular/core';
import {BookTicket, Session} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../session.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  form: FormGroup;
  @Input() session: Session;
  params: HttpParams;
  errorMessage: string = '';

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.form = new FormGroup({
      place: new FormControl('', Validators.required)
    });
    this.params = new HttpParams();
  }

  submit() {
    let place = this.form.value.place.split(':');


    const ticket: BookTicket = {
      movieShow_id: this.session.movie_id,
      row_id : place[0],
      place_position : place[1],
      isFree: this.session.places[place[0]][place[1]].isFree
    };
    this.sessionService.pay(ticket).subscribe(response => {
    }, error => {
        this.errorMessage = 'Sorry, service is unavailable '
    });

    this.form.reset();
  }
}
