import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if(username == "reinhard.conde@innovaritp.com" || username == "admin"){
      if(password == "password") {
        this.isLogged = true;
        return true;
      }
    }
    return false;
  }

  logout(): boolean{
    this.isLogged = false;
    return false;
  }

}
