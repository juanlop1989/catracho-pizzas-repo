

import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import {

  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonInput,
  
  
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [IonApp, IonRouterOutlet, IonCard, IonAlert, IonButton, IonCardHeader, IonCardContent, IonImg, IonCardTitle, IonLabel, IonInput, CommonModule],
})


export class ProductCardComponent  {
  num:number = 1;

  constructor() {}

  sumarCantidad() {
    this.num += 1;
  }

  restarCantidad() {
    this.num -= 1;
    if (this.num < 1) this.num = 1;
  }

  alerta(){
    alert('Producto agregado al carrito');
  }
}

