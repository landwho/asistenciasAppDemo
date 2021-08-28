import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-hometeacher',
  templateUrl: './hometeacher.page.html',
  styleUrls: ['./hometeacher.page.scss'],
})
export class HometeacherPage implements OnInit {

  constructor(private router: Router, private _api: UserService) { }

  ngOnInit() {
  }


  // toControlPanel(){
  //   this.router.navigate(['tabs']);
  // }


user;
data;
email;
pass;
loadingFlag = false;

isEmail;
id;

error;

  toControlPanel(){

    this.user = {
      "email_catedratico": this.email,
      "password_catedratico": this.pass
    }

    this.loadingFlag = true;

    this._api.loginCatedratico(this.user).subscribe( (data) => {
      console.log(data);
      this.data = data;
      this.isEmail = this.data[0].email_catedratico;
      this.id = this.data[0].id_catedratico;
  
        this._api.setUserData(data);
        this._api.setUserCarnet(this.isEmail);
        this._api.setUserId(this.id);
        this.router.navigate(['tabs']);
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
