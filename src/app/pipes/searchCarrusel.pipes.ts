import { Injectable,Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'searchCarrusel'
    
})

@Injectable()
    export class SearchCarruselPipe implements PipeTransform{
        transform(items: any,term:any):any{
            if (term === undefined) {
                return items;
                
            }
            return items.filter(function(item){

            if(item.cuenta_habiente._id){
                return item.cuenta_habiente._id.toUpperCase().includes(term.toUpperCase()) + item.estatus_carrusel.toUpperCase().includes(term.toUpperCase());
            }
                
                
            })
        }
    }
