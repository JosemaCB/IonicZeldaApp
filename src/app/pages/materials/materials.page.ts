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
import {ModalController} from "@ionic/angular";
import {ItemDetailModalComponent} from "../../components/item-detail-modal/item-detail-modal.component";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonThumbnail, IonLabel, IonIcon, IonNote]
})
export class MaterialsPage implements OnInit {

  materials: any[] = [];

  constructor(
    private zeldaDataService: ZeldaDataService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.zeldaDataService.getMaterials().subscribe((data: any) => {
      this.materials = data.data;
    });
  }

  getHeartsArray(hearts: any): any[] {
    // Verifica si hearts es un número, redondea y asegúrate de que sea positivo
    const roundedHearts = Math.round(hearts);
    return typeof roundedHearts === 'number' && roundedHearts > 0 ? Array(roundedHearts).fill(0) : [];
  }

  async openDetailsModal(material: any) {
    const modal = await this.modalController.create({
      component: ItemDetailModalComponent,
      componentProps: { item: material },
    });
    return await modal.present();
  }

}
