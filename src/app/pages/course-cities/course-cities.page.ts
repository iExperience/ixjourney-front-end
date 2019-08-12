import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-course-cities',
  templateUrl: './course-cities.page.html',
  styleUrls: ['./course-cities.page.scss'],
})
export class CourseCitiesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToCity() {
    this.navCtrl.navigateForward('course-city');
  }

}
