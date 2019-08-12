import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChoicesService } from '../../services/choices/choices.service';

@Component({
  selector: 'app-financialaid',
  templateUrl: './financialaid.page.html',
  styleUrls: ['./financialaid.page.scss'],
})
export class FinancialaidPage implements OnInit {

  constructor(private navCtrl: NavController, private choicesService: ChoicesService) { }

  ngOnInit() {
  }

  setFinAid(choice: Boolean) {
    this.choicesService.setFinAid(choice);
    this.navToOptions();
  }

  navToOptions() {
    this.navCtrl.navigateForward('youroptions');
  }

}
