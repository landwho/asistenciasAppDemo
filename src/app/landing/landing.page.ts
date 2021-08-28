import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }




  goToControlPanel1(){
    this.router.navigate(['home']);
  }

  goToControlPanel2(){
    this.router.navigate(['hometeacher']);
  }




}
