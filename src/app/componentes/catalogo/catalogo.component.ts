import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {


  constructor(private router:Router, public _servicio : InfoPaginaService) {
   
   }
   filterPost = '';
   posts = [
  {"Descripcion":"Sudadera negra con capucha marca Sugoi - My Hero Academy | Todoroki. ","Etiqueta":"Ropa","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F1.jpg?alt=media&token=8d082e18-831d-4c3e-bd7c-ef8a5ac64412","Nombre":"Sudadera - Todoriki_MHA","Precio":"Q 125.00","Stock":20,"Valoracion":"1"},
  {"Descripcion":"Sudadera negra + capucha marca Nihon. Akatsuki - Naruto","Etiqueta":"Ropa","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F2.jpg?alt=media&token=0b5d6439-0af0-487b-b35e-147d45ce24ef","Nombre":"Sudadera - Akatsuki","Precio":"Q 115.00","Stock":50,"Valoracion":"2"},
  {"Descripcion":"Camisa colorida para hombre marca Uzumaki - Hatsune Miku.","Etiqueta":"Ropa","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F3.jpg?alt=media&token=986feb6f-381c-4d07-830b-3fef22fd83c0","Nombre":"Camisa - Hatsune Miku","Precio":"Q 75.00","Stock":100,"Valoracion":"3"},
  {"Descripción":"Camiseta colorida unisex marca MK - Bakugo My Hero Academy","Etiqueta":"Ropa","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F4.jpg?alt=media&token=9c37e175-271b-4e25-9881-bac45a72db6e","Nombre":"Camiseta - HAnime ","Precio":"Q 45.00","Stock":75,"Valoracion":"4"},
  {"Descripcion":"Kit pulsera  + anillo de Konoha, incluye una cadena gratis.","Etiqueta":"Accesorio","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F5.jpg?alt=media&token=3ea4b09c-be49-4fa8-bd07-00ed949a8bf1","Nombre":"Kit de pulsera + anillo","Precio":"Q 165.00","Stock":15,"Valoracion":"5"},
  {"Descripcion":"Llavero colorido unisex de Tokyo Revengers marca Ikebukuro West Gate Park","Etiqueta":"Accesorio","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F6.jpg?alt=media&token=eff56073-36dd-4472-b2ac-075fd1551971","Nombre":"Llavero - Tokyo Revengers","Precio":"Q 50.00","Stock":250,"Valoracion":"5"},
  {"Descripcion":"Pulsera negra unisex de Konoha marca Uzumaki","Etiqueta":"Accesorio","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F7.jpg?alt=media&token=fca4cac6-a3cd-4d97-a2f2-33e3c11665fa","Nombre":"Pulsera - Konoha","Precio":"Q 35.00","Stock":150,"Valoracion":"4"},
  {"Descripcion":"Poster 45 cm x 25 cm de Kimetsu no Yaiba.","Etiqueta":"Decoración","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F8.jpg?alt=media&token=bc5aac16-2991-416c-b496-3940206d9193","Nombre":"Poster - Anime","Precio":"Q 15.00","Stock":300,"Valoracion":"3"},
  {"Descripcion":"Combo kit de 3 volúmenes del manga Your Name/Kimi no Nawa.","Etiqueta":"Lectura","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F9.jpg?alt=media&token=481a25e0-902c-4ac5-b86f-fbb86a0ef58d","Nombre":"Kit de 3 vols - Your Name","Precio":"Q 200.00","Stock":115,"Valoracion":"2"},
  {"Descripcion":"Set de 3 figuras de Dragon Ball Z - 15 cm x 5 cm","Etiqueta":"Colección","Imagen":"https://firebasestorage.googleapis.com/v0/b/proyectodwii.appspot.com/o/Imgs_Productos%2F10.jpg?alt=media&token=37b84183-c672-446a-948b-539305594f2a","Nombre":"Kit de 3 figs - DBZ","Precio":"Q 350.00","Stock":10,"Valoracion":"1"}
   ]
  ngOnInit(): void {
    
  }

  Detalle(id:number){
    this.router.navigate(['/Detalle',id])
  }

}
