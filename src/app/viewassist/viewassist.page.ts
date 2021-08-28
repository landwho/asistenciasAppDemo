import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viewassist',
  templateUrl: './viewassist.page.html',
  styleUrls: ['./viewassist.page.scss'],
})
export class ViewassistPage implements OnInit {


  

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
  }



assistFlag;



assistencias;
  toFetchDate(){

    let d = new Date(this.date)
    let data = {
      "cursoID" : parseInt(this.courseID),
      "fecha_asistencia" : this.date
    }


    console.log(data)

     this._api.seeAssist(data).subscribe(data=>{
  
      this.assistFlag=1;

      this.assistencias = data;
     console.log(data);
     });







    
  }
















}
