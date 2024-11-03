import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList, IonNote,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ZeldaDataService} from "../../services/zelda-data.service";
import {ItemDetailModalComponent} from "../../components/item-detail-modal/item-detail-modal.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.page.html',
  styleUrls: ['./equipment.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonThumbnail, IonLabel, IonNote, IonIcon]
})
export class EquipmentPage implements OnInit {

  equipment: any[] = [];


  constructor(
    private zeldaDataService: ZeldaDataService,
    private modalController: ModalController,
    ) {}

  ngOnInit() {
    this.zeldaDataService.getEquipment().subscribe((data: any) => {
      this.equipment = data.data;
    });
  }

  async openDetailsModal(equipo: any) {
    const modal = await this.modalController.create({
      component: ItemDetailModalComponent,
      componentProps: { item: equipo },
    });
    return await modal.present();
  }

}
