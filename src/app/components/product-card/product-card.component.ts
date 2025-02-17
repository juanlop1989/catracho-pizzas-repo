

import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AlertController } from '@ionic/angular';
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

  constructor(private alertController: AlertController) {}

  sumarCantidad() {
    this.num += 1;
  }

  restarCantidad() {
    this.num -= 1;
    if (this.num < 1) this.num = 1;
  }

  /*alerta(){
    alert('Ha agregado correctamente el producto a su carrito');
  }*/


  async ordenar() {
    const alert = await this.alertController.create({
      header: 'Felicidades',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}

