import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private router: Router, private _api: UserService) { }

  ngOnInit() {
    this.getUser();
  }



  toFetchDate(id, name){
    console.log(id)
    this.router.navigate(['viewassist',id, name]);
    
  }


  toViewAssists(id, name){
    console.log(id)
    this.router.navigate(['viewstudents',id, name]);
    
  }



  toViewList(id, name){
    console.log(id)
    this.router.navigate(['listadoalumnos',id, name]);
    }



user;
nombre;
apellido;
courses;



  getUser(){
    let user_string =  localStorage.getItem('user');
    let data = JSON.parse(user_string);
    this.user = data;
    this.nombre = this.user[0].nombre_catedratico;
    this.apellido = this.user[0].apellido_catedratico
    console.log(this.user);
    let carnet =  this.user[0].carnet_estudiante
    let id = this.user[0].id_catedratico;
  
  
    this._api.getCatCourses(id).subscribe((data)=>{
        console.log(data)
        this.courses = data;
    });
    
  
    }
  






  
  logOut(){
    this._api.logOut();
    window.location.reload();
  }




}
