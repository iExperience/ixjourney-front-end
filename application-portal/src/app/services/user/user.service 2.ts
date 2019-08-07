import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // initialize variables
  user: User;
  id: number;
  firstName: string;
  lastName: string;
  phoneNum: string;
  email: string;
  password: string;
  university: string;
  gradYear: number;
  birthDate: string;

  constructor() { }

  // Basic Get for User's fields, Get/Set for User
  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getId() {
    return this.user.id;
  }

  getFirstName() {
    return this.user.firstName;
  }

  getLastName() {
    return this.user.lastName;
  }

  getPhoneNum() {
    return this.user.phoneNum;
  }

  getEmail() {
    return this.user.email;
  }

  getUni() {
    return this.user.university;
  }

  getGradYear() {
    return this.user.gradYear;
  }

  getBirthDate() {
    return this.user.birthDate;
  }

}
