import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZeldaDataService } from '../../services/zelda-data.service';
import { DetailsModalComponent } from '../../components/details-modal/details-modal.component';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonNote, IonIcon
} from '@ionic/angular/standalone';
import {NgForOf, NgIf} from "@angular/common";
import {ItemDetailModalComponent} from "../../components/item-detail-modal/item-detail-modal.component";

@Component({
  selector: 'app-paw',
  templateUrl: './paw.page.html',
  styleUrls: ['./paw.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonThumbnail, DetailsModalComponent, NgForOf, NgIf, IonNote, IonIcon]
})
export class PawPage implements OnInit {
  creatures: any[] = [];

  constructor(
    private zeldaDataService: ZeldaDataService,
    private modalController: ModalController,
    ) {}

  ngOnInit() {
    this.zeldaDataService.getCreatures().subscribe((data: any) => {
      this.creatures = data.data;
    });
  }

  getHeartsArray(hearts: any): any[] {
    // Verifica si hearts es un número, redondea y asegúrate de que sea positivo
    const roundedHearts = Math.round(hearts);
    return typeof roundedHearts === 'number' && roundedHearts > 0 ? Array(roundedHearts).fill(0) : [];
  }

  async openDetailsModal(paw: any) {
    const modal = await this.modalController.create({
      component: ItemDetailModalComponent,
      componentProps: { item: paw },
    });
    return await modal.present();
  }
}
