import { Injectable } from '@angular/core';

import { Pastrie, List } from './pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  private pastries: Pastrie[] = PASTRIES; 
  private ingredientsList: List[] = INGREDIENTS_LISTS;

  constructor() {

  }

  getPastries(): Pastrie[] {

    return this.pastries.sort(
      (a, b) => { return b.quantity - a.quantity }
    );
  }

  getPastrie(id: string): Pastrie | undefined {

    return this.pastries.find(pastrie => pastrie.id === id);
  }

  
  getPastrieIngredientsList(id: string): List | undefined {

    return this.ingredientsList.find(list => list.id === id);
  }

}