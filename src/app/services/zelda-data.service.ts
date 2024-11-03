import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZeldaDataService {
  private creaturesUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures';
  private equipmentUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment';
  private materialsUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials';

  constructor(private http: HttpClient) { }

  getCreatures(): Observable<any> {
    return this.http.get(this.creaturesUrl);
  }

  getEquipment(): Observable<any> {
    return this.http.get(this.equipmentUrl);
  }

  getMaterials(): Observable<any> {
    return this.http.get(this.materialsUrl);
  }
}
