import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {flash, hammer, heart, leaf, paw, shield} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      heart: heart,
      flash: flash,
      shield: shield,
      paw: paw,
      hammer: hammer,
      leaf: leaf,
    });
  }
}
