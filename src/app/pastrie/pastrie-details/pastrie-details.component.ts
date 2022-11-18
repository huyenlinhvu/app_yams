import {Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';
import { Pastrie, List } from '../pastrie';

import {INGREDIENTS_LISTS, PASTRIES} from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

  @Input() pastrie : Pastrie | null = null; 
  
  sens:boolean = true;
  list: List | undefined;
  ingredientsLists: List[] = []; 
  ingredients:Array<string> = [];

  constructor(private pastrieService: PastrieService) {

  }

  ngOnInit(): void {
    console.log(this.pastrie); 
  }

  
  ngOnChanges(){
   
    if(this.pastrie) {
      this.list = this.pastrieService.getPastrieIngredientsList(this.pastrie.id);  

      if (this.list)
        this.ingredients = this.list?.list;  
    }
  }

}
