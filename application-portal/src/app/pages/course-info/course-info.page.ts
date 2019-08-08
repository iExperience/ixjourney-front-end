import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';
import { Program } from 'src/app/models/program/program';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.page.html',
  styleUrls: ['./course-info.page.scss'],
})
export class CourseInfoPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  course: Program;
  availableCities: string;
  otherOptions = [];

  getCourseInfo() {
    // get all data from choices service (program and associated locations)
    this.course = this.choicesService.getProgram();
    let cities = this.choicesService.getProgramLocations();

    // get city subtitle for image button header
    this.availableCities = this.choicesService.addAvailableCities(cities);

    // get other programs in the field for "more options" section
    let otherPrograms = this.findOtherPrograms();

    this.otherOptions = [];
    // add cities to each other program
    this.addCitiesToCourse(otherPrograms);
  }

  constructor(public navCtrl: NavController,
    public choicesService: ChoicesService
    ) { 
      this.getCourseInfo();
  }

  findOtherPrograms() {
    let fieldPrograms = this.choicesService.getFieldPrograms();
    let currCourse = this.course;

    // make new array of field-related programs other than current program
    var otherPrograms = fieldPrograms.filter(function(program) {
      return (program != currCourse);
    });

    return otherPrograms;
  }

  addCitiesToCourse(otherPrograms) {
    // make new array where each element is an array with course model and corresponding cities
    for (var i = 0; i < otherPrograms.length; i++) {
      let array_elem = [];

      // get all cities by program id
      let cities = this.choicesService.getLocationsByProgramId(otherPrograms[i].id);

      // get cities available in this course
      let availableCities = this.choicesService.addAvailableCities(cities);

      // push course and cities to array_elem
      array_elem.push(otherPrograms[i]);
      array_elem.push(availableCities);

      this.otherOptions.push(array_elem);
    }
  }

  navToCourseInfo(index, course) {
    this.choicesService.setProgram(course[0].id);
    this.getCourseInfo();
    this.content.scrollToTop();
  }

  navToCities() {
    this.navCtrl.navigateForward('course-cities');
  }

  ngOnInit() {
  }
}
