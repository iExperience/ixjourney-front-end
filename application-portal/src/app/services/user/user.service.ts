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

  // Basic Set/Get for user and all fields
  getUser() {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  getId() {
    return this.user.id;
  }

  // not sure when we would use this? but i included it
  setId(id: number) {
    this.user.id = id;
    this.id = id;
  }

  getFirstName() {
    return this.user.firstName;
  }

  setFirstName(fname: string) {
    this.user.firstName = fname;
    this.firstName = fname;
  }

  getLastName() {
    return this.user.lastName;
  }

  setLastName(lname: string) {
    this.user.lastName = lname;
    this.lastName = lname;
  }

  getPhoneNum() {
    return this.user.phoneNum;
  }

  setPhoneNum(num: string) {
    this.user.phoneNum = num;
    this.phoneNum = num;
  }

  getEmail() {
    return this.user.email;
  }

  setEmail(mail: string) {
    this.user.email = mail;
    this.email = mail;
  }

  // are password get and sets required?
  getPassword() {
    return this.user.password;
  }

  setPassword(pw: string) {
    this.user.password = pw;
    this.password = pw;
  }

  getUni() {
    return this.user.university;
  }

  setUni(uni: string) {
    this.user.university = uni;
    this.university = uni;
  }

  getGradYear() {
    return this.user.gradYear;
  }

  setGradYear(year: number) {
    this.user.gradYear = year;
    this.gradYear = year;
  }

  getBirthDate() {
    return this.user.birthDate;
  }

  setBirthDate(bday: string) {
    this.user.birthDate = bday;
    this.birthDate = bday;
  }
}
