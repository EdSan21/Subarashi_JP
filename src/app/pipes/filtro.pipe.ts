import { Pipe, PipeTransform } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform { 
//Logica para que busque de acuerdo a la valoración del producto 
  transform(value: any, arg: any): any {
    const resultPost = [];
    for(const post of value){
      if(post.Valoracion.indexOf(arg) > -1){
        console.log('a')
        resultPost.push(post);
      };
    };
    return resultPost;   
  };

}
