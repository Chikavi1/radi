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
		texto : "Rescate perruno es un proyecto que nace en Cutonala debido a la proliferación de animales abandonados , y tomando en cuenta el estado en el que llegan , que es desnutrición , maltrato , lesiones expuestas etc , se toma la decisión de formar este equipo . A lo largo de estos dos años ya hemos realizado 2 campañas de esterilización masivas en las cuales hemos esterilizado un total de 400 animales de manera gratuita , así como campaña de vacunación antirrábica y desparacitacion en el municipio de Tonalá , el salto y claro en el Cutonala"
	},
	// {
	// 	titulo: 'Aliados',
	// 	imagen: 'https://noticaribe.com.mx/wp/wp-content/uploads/2019/04/patito-veterinarias-900x425.jpg',
	// 	texto : 'Mejorar la vida de nuestros amigos que comparten lugar con nosotros. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum accusantium itaque facere quaerat, dignissimos necessitatibus nisi tenetur, quos.'
	// },
	{
		titulo: 'Administradores',
		imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbiPSelbDfEdnMVmTDeLBv_ybSgMGh9WMQPgyIZP2Hu7ljWYijVg",
		administradores : [
		{
			nombre : "Luis Rojas",
			correo : "chikavi@hotmail.com",
			numero : "33 2727 6923",
			cargo : "Desarrollador",
			imagen : "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/11880370_1060231210661615_6500303982536795316_n.jpg?_nc_cat=104&_nc_ht=scontent.fgdl3-1.fna&oh=95e9aadf3e7c6bd3ab4d54c6adb6abdd&oe=5D903030"

		},
		{
			nombre : "Caleb Víramontes",
			correo : "",
			numero : "33 1998 0517",
			cargo : "Admin Rescate perruno cut",
			imagen : "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/61929161_10214764432650867_5551057338145701888_n.jpg?_nc_cat=108&_nc_oc=AQnQsInaxnDNPRQzrvRzLOE1X9vrW9aycwbLIH6wUiOICLlpXCCtjaaDUk26ZbaeqhM&_nc_ht=scontent.fgdl3-1.fna&oh=6c2f475fe46afd208f09d05a2e313260&oe=5E103E03"
		}
		]
	}
	]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


goToSecondary(data){
	this.navCtrl.push(SecondaryPageInfoPage,{datos : data});
}
}
