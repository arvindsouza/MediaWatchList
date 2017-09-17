import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(pipeData, pipeModifier) {
        console.log(pipeData.json());
       return pipeData.filter((eachItem)=> {
             return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase());
        });
    }
}