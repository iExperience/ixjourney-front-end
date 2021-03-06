import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';

@Component({
  selector: 'app-course-cities',
  templateUrl: './course-cities.page.html',
  styleUrls: ['./course-cities.page.scss'],
})
export class CourseCitiesPage implements OnInit {
  program;
  availableCities;

  constructor(
    public navCtrl: NavController,
    public choicesService: ChoicesService
    ) { 
      this.program = this.choicesService.getProgram();
      this.availableCities = this.choicesService.getProgramLocations();
    }

  navToCityInfo(index, city) {
    this.choicesService.setLocation(city.id);
    this.navCtrl.navigateForward('course-city');
  } 

  ngOnInit() {
  }

}