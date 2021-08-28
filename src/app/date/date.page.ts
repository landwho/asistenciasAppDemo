import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-date',
  templateUrl: './date.page.html',
  styleUrls: ['./date.page.scss'],
})
export class DatePage implements OnInit {

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




  toFetchDate(){

    let d = new Date(this.date)
    let data = {
      "fecha_asistencia" : this.date,
      "cursoID" : this.courseID,
      "estudianteID" : this.userID
    }


    console.log(data)

     this._api.sendAsistencia(data).subscribe(data=>{
      this.presentAlert();
     console.log(data);
     })







    
  }










  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito!!',
      message: 'Tu asistencia fue enviada.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.router.navigate(['courses'])
  }















}
