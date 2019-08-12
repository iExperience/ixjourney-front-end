import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';

@Component({
 selector: 'app-fields',
 templateUrl: './fields.page.html',
 styleUrls: ['./fields.page.scss'],
})
export class FieldsPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public choicesService: ChoicesService
  ) { }

  fieldClick(field: string) {
    let fieldCourses = this.choicesService.getProgramsByField(field);
    this.choicesService.setFieldPrograms(fieldCourses);
    this.choicesService.setField(field);
    this.navCtrl.navigateForward("courses");
  }

  ngOnInit() {}

}