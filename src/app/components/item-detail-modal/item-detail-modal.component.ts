import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton, IonButtons, IonContent, IonHeader, IonImg, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-item-detail-modal',
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonImg]
})
export class ItemDetailModalComponent {
  @Input() item: any;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
