import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router, private http: HttpClient) { }

  url = "https://app-asistencia.herokuapp.com";

  // url = "http://localhost:33466";






  // getters

  getUser(data){
    const _urlGetUser = this.url+'/api/login';
    return this.http.post(_urlGetUser, data);
  }

  loginCatedratico(data){
    const _urlGetUser = this.url+'/api/logincc';
    return this.http.post(_urlGetUser, data);
  }

getUserCourses(id){ 
  const _urlGetUserCourses = this.url+'/api/user/courses/'+id;
  return this.http.get(_urlGetUserCourses);
}


getCatCourses(id){ 
  const _urlGetUserCourses = this.url+'/api/cat/courses/'+id;
  return this.http.get(_urlGetUserCourses);
}

getAllCourses(){
  const _urlGetUser = this.url+'/api/allcourses';
  return this.http.get(_urlGetUser);
}


getLoggedUser(){ 
  localStorage.getItem('user'); 
}


getCurrentUser(){
  let user_string = localStorage.getItem('currentUser');
  let user = JSON.parse(user_string);
  return user_string
}


seeAssist(data){
  const _urlSeeAssist = this.url+'/api/cat/seeassist';
  return this.http.post(_urlSeeAssist, data);
}



// setters 
setUserData(userdata){ 
  let user_string = JSON.stringify(userdata);
  localStorage.setItem('user', user_string); 
}
setUserCarnet(carnet){ localStorage.setItem('carnet', carnet); }
setUserId(id){ localStorage.setItem('id', id); }



sendAsistencia(data){
  const _urlSetUserAsistencia = this.url+'/api/user/enviarasistencia';
  return this.http.post(_urlSetUserAsistencia, data);
}


// view porcentaje de asistencia

viewAssists(data){
  const _urlSetUserAsistencia = this.url+'/api/cat/viewassist';
  return this.http.post(_urlSetUserAsistencia, data);
}


studentList(data){
  const _urlSetStudentList = this.url+'/api/cat/studentlist';
  return this.http.post(_urlSetStudentList, data);
}






  // utils
  isLoggedIn(){ return !!localStorage.getItem('carnet'); }
  logOut(){ localStorage.clear();}


}
