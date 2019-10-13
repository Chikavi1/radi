import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class ApiProvider {
	baseUrl:string = "https://www.chikavi.com/api/";
	baseUrlLocal:string = "http://127.0.0.1:8000/api/";
	imagen;
	  constructor(public http: HttpClient) {
	  	  }
	  getDogs(id){
	  	return this.http.get(this.baseUrl+"getDogs?user_id="+id);
	  }


	createDogProfile(datos){
  		let postdata = new FormData();
  		postdata.append('nombre',datos.nombre);
  		postdata.append('especie',datos.especie);
  		postdata.append('raza',datos.raza);
  		postdata.append('color',datos.color);
  		postdata.append('image',datos.imagenPreview);
  		postdata.append('sexo',datos.sexo);
  		postdata.append('senas',datos.senas);
  		postdata.append('notas',datos.notas);
  		postdata.append('status',datos.status);
  		postdata.append('place'," ");
  		postdata.append('user_id',localStorage.getItem("user"));
  		postdata.append('owner'," ");
  		postdata.append('history'," ");

	  	return new Promise(resolve => {
		  this.http.post(this.baseUrl+"createdog",postdata)
		     .subscribe(data => {
		       resolve(data);
		      });
		 });
	}

	deleteDog($dog_id){
		let user_id = localStorage.getItem("user");
		return this.http.get(this.baseUrl+"deletedog?id="+$dog_id+"&user_id="+user_id	);
	}


	  solicitud(data,id):Observable <any> {
	    let nombre = data.nombre;
	  	let telefono = data.telefono;
	    let vivienda = data.vivienda;
	    let dormir = data.dormir;
	    let adopcion = data.adopcion;
	    let de_acuerdo = data.de_acuerdo;
	    let medidas = data.medidas;
	    console.log("-------");
	    console.log(id);
	    console.log("----------");
		return  this.http.get(
		    	this.baseUrl+
		    	"create_request?"+
		    	"nombre="+nombre+
		    	"&telefono="+telefono+
		    	"&vivienda="+vivienda+
		    	"&dormira="+dormir+
		    	"&adoptado_anterior="+adopcion+
		    	"&acuerdo="+de_acuerdo+
		    	"&medidas="+medidas+
				"&dog_id="+id);

		 }

		denuncia(data):Observable <any>{
			let nombre = data.nombre;
			let telefono = data.telefono;
			let description = data.description;

			return this.http.get(this.baseUrl+
					"create_complaint?"+
					"nombre="+nombre+
					"&telefono="+telefono+
					"&description="+description);
		}
	getAllies():any{
		return this.http.get(this.baseUrl+"alies");
	}
	getEvents():any{
		return this.http.get(this.baseUrl+"events");
	  }

	  getEventsFinished():any{
		return this.http.get(this.baseUrl+"eventsFinished");
	  }

	 searchQrCode(qrcode):any{
	 	return this.http.get(this.baseUrl+"search_qr_code?qrcode="+qrcode);
	 }

	 getVaccinations(id):any{
	 	return this.http.get(this.baseUrl+"getVaccinations?id="+id);
	 }


	 getDewormings(id):any{
	 	return this.http.get(this.baseUrl+"getDewormings?id="+id);
	 }
	  getStatus(status){
	  	return this.http.get(this.baseUrl+"getStatus?name="+status);
	  }
	  getCases(){
	  	return this.http.get(this.baseUrl+"getCases");
	  }
	}
