import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.page.html',
  styleUrls: ['./listadoalumnos.page.scss'],
})
export class ListadoalumnosPage implements OnInit {


  constructor(private router: Router, private aroute: ActivatedRoute, private _api: UserService, public alertController: AlertController) { }

  courseName;
  date = new Date();
  userID;
  courseID;
  carnet;
  data;
  user;
  courses

  ngOnInit() {
    let id = this.aroute.snapshot.paramMap.get('id');
    let course = this.aroute.snapshot.paramMap.get('name');
    this.courseName = course ;
  
    let user_string =  localStorage.getItem('user');
    let data = JSON.parse(user_string);
    this.user = data;
    this.courseID = id;
    this.userID = this.user[0].id_estudiante;
    this.carnet =  this.user[0].carnet_estudiante

    this.viewList();

  }



assistFlag;



students;
  viewList(){

    let d = new Date(this.date)
    let data = {
      "cursoID" : parseInt(this.courseID)
    }


    console.log(data)

     this._api.studentList(data).subscribe(data=>{
  
      this.assistFlag=1;

      this.students = data;
     console.log(this.students);
     });







    
  }


}
