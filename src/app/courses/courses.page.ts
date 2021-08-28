import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private router: Router, private _api: UserService) { }

  ngOnInit() {
    this.getUser();
  }


  toFetchDate(id,name){
    console.log(id)
    this.router.navigate(['date',id,name]);
    
  }




  nombre;
  apellido;
  carnet;
  data;
  user;
  courses

  getUser(){
  let user_string =  localStorage.getItem('user');
  let data = JSON.parse(user_string);
  this.user = data;
  this.nombre = this.user[0].nombre_estudiante;
  this.apellido = this.user[0].apellido_estudiante
  console.log(this.user);
  let carnet =  this.user[0].carnet_estudiante
  let id = this.user[0].id_estudiante;


  this._api.getUserCourses(id).subscribe((data)=>{
      console.log(data)
      this.courses = data;
  });
  

  }


  logOut(){
    this._api.logOut();
    window.location.reload();
  }

  
}
