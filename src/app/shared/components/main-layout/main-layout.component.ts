import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MovieService} from "../../movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  form: FormGroup;

  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('', Validators.required)
    })
  }


  submit() {
    if(this.form.invalid){
      return
    }
    this.router.navigate(['/search'],
      { queryParams: { name: this.form.value.search }});
    this.form.reset()
  }
}
