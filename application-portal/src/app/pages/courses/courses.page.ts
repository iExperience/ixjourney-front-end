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
      this.choicesService.setProgramLocations(cities);

      // get cities available in this course
      let availableCities = this.choicesService.addAvailableCities(cities);

      // push course and cities to array_elem
      array_elem.push(this.courses[i]);
      array_elem.push(availableCities);

      this.availableCourses.push(array_elem);
    }
  }

  navToCourseInfo(index, course) {
    this.choicesService.setProgram(course[0].id);
    let cities = this.choicesService.getLocationsByProgramId(course[0].id);
    this.choicesService.setProgramLocations(cities);
    this.navCtrl.navigateForward('course-info');
  }

}
