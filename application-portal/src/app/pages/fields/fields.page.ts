import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
 selector: 'app-fields',
 templateUrl: './fields.page.html',
 styleUrls: ['./fields.page.scss'],
})
export class FieldsPage implements OnInit {

 constructor(public navCtrl: NavController) { }

 isbuttonClicked() {
   this.navCtrl.navigateForward("courses")
 }

 ngOnInit() {
 }

}