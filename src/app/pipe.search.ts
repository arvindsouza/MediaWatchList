import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(pipeData, pipeModifier) {
        if (pipeData) {
            return pipeData.filter((eachItem) => {
                if (pipeModifier)
                    return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
                        eachItem['platform'].toLowerCase().includes(pipeModifier);
            });
        }
    }
}