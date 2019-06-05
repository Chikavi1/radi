import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SecondaryPageInfoPage } from '../secondary-page-info/secondary-page-info';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

	data = [
	{
		titulo : 'rescate perruno',
		imagen : 'https://bucket1.glanacion.com/anexos/fotos/02/2749002w380.jpg',
		texto : "texto de caleb sobre rescate perruno Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ex. Obcaecati quisquam tempora, odit. Cum deleniti ut soluta ea tempora!"
	},
	{
		titulo: 'Administradores',
		imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbiPSelbDfEdnMVmTDeLBv_ybSgMGh9WMQPgyIZP2Hu7ljWYijVg",
		administradores : [
		{
			nombre : "Luis Rojas",
			correo : "chikavi@hotmail.com",
			numero : "33 2338 6175",
			cargo : "Desarrollador",
			imagen : "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/11880370_1060231210661615_6500303982536795316_n.jpg?_nc_cat=104&_nc_ht=scontent.fgdl3-1.fna&oh=95e9aadf3e7c6bd3ab4d54c6adb6abdd&oe=5D903030"

		},
		{
			nombre : "Caleb Víramontes",
			correo : "",
			numero : "33 1998 0517",
			cargo : "Admin Rescate perruno cut",
			imagen : "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-1/61929161_10214764432650867_5551057338145701888_n.jpg?_nc_cat=108&_nc_ht=scontent.fgdl3-1.fna&oh=32ef11cc2e57ecf62328d4c615aae566&oe=5D58B6B3"
		}
		]
	},
	{
		titulo: 'impacto',
		imagen: 'https://ionicframework.com/docs/v3/dist/preview-app/www/assets/img/card-sf.png',
		texto : 'Mejorar la vida de nuestros amigos que comparten lugar con nosotros. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium itaque facere quaerat, dignissimos necessitatibus nisi tenetur, quos.'
	}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


goToSecondary(data){
	this.navCtrl.push(SecondaryPageInfoPage,{datos : data});
}
}
