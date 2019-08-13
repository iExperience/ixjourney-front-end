import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';

@Component({
 selector: 'app-welcome',
 templateUrl: './welcome.page.html',
 styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public choicesService: ChoicesService
  ) { }

 navToFields() {
   this.navCtrl.navigateForward("fields")
 }

 ngOnInit() {
 }

}