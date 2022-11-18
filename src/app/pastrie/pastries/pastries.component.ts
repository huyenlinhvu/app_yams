import { Component, Input, OnInit } from '@angular/core';
import { Pastrie} from '../pastrie';
import { PASTRIES } from '../mock-pastries'


@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})

export class PastriesComponent implements OnInit {
  titlePage: string = "Page principale : liste des pâtisseries";
  pastries: Pastrie[] = PASTRIES;
  selectedPastry?: Pastrie;

  @Input() filters?: string|null;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.filters) {
      this.pastries = this.pastries.filter(pastrie => (pastrie.name.toLowerCase().includes(this.filters?.toLowerCase() || "")));
    }
    else {
      this.pastries = PASTRIES;
    }
    console.log(this.filters);

  }

  selectPastry(pastry: Pastrie) {
    this.selectedPastry = pastry;
  }

}
