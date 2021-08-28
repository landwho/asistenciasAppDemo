import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[UserService]
})
export class HomePage {

  constructor(private router: Router, private _api: UserService) { }

  ngOnInit() {
  }
  

  carnet;
  error;
  solvencia;
  data;
  message;
  loadingFlag =false;
  isCarnet;
  pass;
  user;
  id;


  toControlPanel(){

      this.user = {
        "carnet_estudiante": this.carnet,
        "password_estudiante": this.pass
      }

      this.loadingFlag = true;

      // this._api.getAllCourses().subscribe(data=>{ console.log(data)});



      this._api.getUser(this.user).subscribe( (data) => {
        console.log(data);
        this.data = data;
        this.isCarnet = this.data[0].carnet_estudiante;
        this.id = this.data[0].id_estudiante;
    
        
          this._api.setUserData(data);
          this._api.setUserCarnet(this.isCarnet);
          this._api.setUserId(this.id);
          this.router.navigate(['courses']);
          this.loadingFlag = false;
        
      },
      (error) => {
        let message = error.error;
        this.error = message.text
        console.log(this.error);
        this.loadingFlag = false;
      });
      
    
  }








}
