import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';
import { Location } from '../../models/location/location';

@Component({
  selector: 'app-course-city',
  templateUrl: './course-city.page.html',
  styleUrls: ['./course-city.page.scss'],
})
export class CourseCityPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  city: Location;
  otherOptions = [];

  getCityInfo() {
    // get current city from choices service
    this.city = this.choicesService.getLocation();

    // get other locations in the program for "more options" section
    this.otherOptions = this.findOtherLocations();
  }

  constructor(public navCtrl: NavController,
    public choicesService: ChoicesService
    ) { 
      this.getCityInfo();
  }

  ngOnInit() {
  }

  findOtherLocations() {
    let cities = this.choicesService.getProgramLocations();
    let currCity = this.city;

    // make new array of field-related programs other than current program
    var otherLocations = cities.filter(function(location) {
      return (location != currCity);
    });

    return otherLocations;
  }

  navToCityInfo(index, city) {
    this.choicesService.setLocation(city.id);
    this.getCityInfo();
    this.content.scrollToTop();
  }

  navToFinAid(){
    this.navCtrl.navigateForward('financialaid');
  }

}
