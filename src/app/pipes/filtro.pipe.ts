import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(players: any[], filter: string): any {
    // Return all objects if filter is not set
    if(!filter) return players;

    // Return objects filtered by the selected filter
    return players.filter(p => { return p.nick.charAt(0).toUpperCase() == filter }); 
  }

}
