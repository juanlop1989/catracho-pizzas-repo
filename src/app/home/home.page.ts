import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import {
  ActionSheetController,
  AlertController,
  IonActionSheet,
  IonAlert,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonInput,
  
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonApp, IonRouterOutlet, IonCard, IonAlert, IonButton, IonCardHeader, IonCardContent, IonImg, IonCardTitle, IonLabel, IonInput, CommonModule],
})


export class HomePage {
  num:number = 1;

  constructor(private alertController: AlertController) {}

  sumarCantidad() {
    this.num += 1;
  }

  restarCantidad() {
    this.num -= 1;
    if (this.num < 1) this.num = 1;
  }

  async ordenar() {
    const alert = await this.alertController.create({
      header: 'Felicidades',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
