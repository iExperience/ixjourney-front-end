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

 techClick() {
  let techCourses = this.choicesService.getProgramsByField("tech");
  // push field name to end of array
  techCourses.push("tech");
  this.choicesService.setFieldPrograms(techCourses);
  this.navCtrl.navigateForward("courses");
 }

 businessClick() {
  let businessCourses = this.choicesService.getProgramsByField("business");
  // push field name to end of array
  businessCourses.push("business");
  this.choicesService.setFieldPrograms(businessCourses);
  this.navCtrl.navigateForward("courses");
 }

 designClick() {
  let designCourses = this.choicesService.getProgramsByField("design");
  // push field name to end of array
  designCourses.push("design");
  this.choicesService.setFieldPrograms(designCourses);
  this.navCtrl.navigateForward("courses");
 }

 ngOnInit() {
 }

}