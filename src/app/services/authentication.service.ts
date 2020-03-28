import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService{

  auth_service_uri: string = 'http://localhost:9101';
  

  private currentUser: User;



  constructor(private http: HttpClient) {

  }

 
  public getCurrentUser():Observable<User> {
    return this.http.get<any>(this.auth_service_uri + '/jwt/currentUser');
  }

  
  login(username: string, password: string) {
    //login request
    return this.http.post<any>(this.auth_service_uri + '/login', { username, password }, {
      observe: 'response'
    })
      .pipe(map(response => {
        console.log(response.headers.get('Authorization'));
        let token = JSON.stringify(response.headers.get('Authorization')).substring(1);
        token = token.substring(0, token.length - 1);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('token', token);
        return response;
      }));
  }

  logout() {
    sessionStorage.removeItem('token');
  }
}
