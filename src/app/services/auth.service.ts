import { Injectable } from '@angular/core';
import { AngularFireAuth }  from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { reject } from 'q';
import { initializeApp } from 'firebase';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err))
    });
  }

  // *** The Auth Service should not be used to create a new user
  // newUser(email: string, password: string){
  //   return new Promise((resolve, reject) => {
  //     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then(userData => resolve(userData),
  //     err => reject(err))
  //   });
  // }

  newUser(email: string, password: string){
    var secondaryApp = initializeApp(environment.firebase, "Secondary");

    secondaryApp.auth().createUserWithEmailAndPassword(email, password);
    secondaryApp.auth().signOut();
  }

  
  
  
  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
