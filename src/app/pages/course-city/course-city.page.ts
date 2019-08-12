import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-course-city',
  templateUrl: './course-city.page.html',
  styleUrls: ['./course-city.page.scss'],
})
export class CourseCityPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToFinAid(){
    this.navCtrl.navigateForward('financialaid');
  }

}
