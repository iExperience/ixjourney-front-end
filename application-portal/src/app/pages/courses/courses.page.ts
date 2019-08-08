import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  courses = [];
  availableCourses = [];
  field: string;
  numberOfCourses: number;

  constructor(
    public navCtrl: NavController,
    public choicesService: ChoicesService
    ) { 
      // get all field-related courses
      this.courses = this.choicesService.getFieldPrograms();

      // set field
      this.field = this.choicesService.getField();

      // set number of courses
      this.numberOfCourses = this.courses.length;

      this.addCitiesToCourse();
    }

  ngOnInit() {
  }

  addCitiesToCourse() {
    // make new array where each element is an array with course model and corresponding cities
    for (var i = 0; i < this.numberOfCourses; i++) {
      let array_elem = [];

      // get all cities by program id
      let cities = this.choicesService.getLocationsByProgramId(this.courses[i].id);

      // get cities available in this course
      let availableCities = this.addAvailableCities(cities);

      // push course and cities to array_elem
      array_elem.push(this.courses[i]);
      array_elem.push(availableCities);

      this.availableCourses.push(array_elem);
    }
  }

  addAvailableCities(cities) {
    // create cities subtitle
    let availableCities = "";
    
    for (var j = 0; j < cities.length; j++) {
      // if only one city, we don't want commas
      if (cities.length == 1) {
        availableCities = cities[j].name;
        break;
      }

      // if we're at the last city, add an "and" before the last city
      else if (j == (cities.length - 1)) {
        availableCities = availableCities + "and " + cities[j].name;
      }

      // otherwise, add city name and a comma to the string
      else {
        availableCities = availableCities + cities[j].name + ", ";
      }
    }
    return availableCities;
  }

  navToCourseInfo(index, course) {
    this.choicesService.setProgram(course);
    this.navCtrl.navigateForward('course-info');
  }

}
