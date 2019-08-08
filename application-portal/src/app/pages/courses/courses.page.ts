import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  courses;
  availableCourses;
  field: string;
  numberOfCourses: number;

  constructor(
    public navCtrl: NavController,
    public choicesService: ChoicesService
    ) { 
      // get all field-related courses + field name
      this.courses = this.choicesService.getFieldPrograms();
      console.log(this.courses);

      // set field to last element (which is field's name)
      this.field = this.courses[this.courses.length-1];
      console.log(this.field);

      // remove field name - we don't need it anymore!
      this.courses.pop();

      // set number of courses
      this.numberOfCourses = this.courses.length;

      this.availableCourses = [];

      // make new array where each element is an array with both course name and city 
      for (var i = 0; i < this.numberOfCourses; i++) {
        let array_elem = [];

        // push course to array_elem
        array_elem.push(this.courses[i]);

        // get all cities by program id
        let cities = this.choicesService.getLocationsByProgramId(this.courses[i].id);
        
        // create cities subtitle and push to array_elem
        let availableCities = "";
        for (var j = 0; j < cities.length; j++) {
          // if only one city, we don't want commas
          if (cities.length == 1) {
            availableCities = cities[j].name;
            break;
          }

          // if we're at the last city, add an "and" before the last city
          else if (j == (cities.length - 1)) {
            console.log(j);
            console.log(cities.length - 1);
            availableCities = availableCities + "and " + cities[j].name;
          }

          // otherwise, add city name and a comma to the string
          else {
            availableCities = availableCities + cities[j].name + ", ";
          }
        }

        array_elem.push(availableCities);

        this.availableCourses.push(array_elem);
      }

      console.log(this.availableCourses);
    }

  ngOnInit() {
  }

  navToCourseInfo(index, course) {
    this.choicesService.setProgram(course);
    console.log(course);
    this.navCtrl.navigateForward('course-info');
  }

}
