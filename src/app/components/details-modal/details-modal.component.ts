import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {IonButton, IonButtons, IonContent, IonHeader, IonImg, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonContent,
    IonImg
  ]
})
export class DetailsModalComponent {

  @Input() name: string = '';
  @Input() image: string = '';
  @Input() description: string = '';

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
