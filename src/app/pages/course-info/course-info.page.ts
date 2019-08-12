import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.page.html',
  styleUrls: ['./course-info.page.scss'],
})
export class CourseInfoPage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) {}

  ngOnInit() {
  }
  
  navToCourseCities() {
    this.navCtrl.navigateForward('course-cities');
  }

}
