import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
// import logo from './assets/img/logo_agendate.png';
//import { logo } from './logo_agendate.png';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  val: any;

  constructor(private route: Router) {}

  ngOnInit() {
    // this.route.navigate(['/login']);
  }
}
