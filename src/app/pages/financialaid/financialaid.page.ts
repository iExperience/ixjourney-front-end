import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-financialaid',
  templateUrl: './financialaid.page.html',
  styleUrls: ['./financialaid.page.scss'],
})
export class FinancialaidPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navToOptions() {
    this.navCtrl.navigateForward('youroptions');
  }

}
