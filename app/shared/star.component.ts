import { Component, OnChanges, Input, Output, EventEmitter } from 'angular2/core'

@Component({
  selector: 'ai-star',
  templateUrl: 'app/shared/star.component.html',
  styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{

  //Aggiungiamo Input() decorator
  @Input() rating: number;

  //Aggiungiamo il lifecycle Hook OnChanges perchè vogliamo che
  //il valore della width cambi ogni volta che viene aggiornato il valore.
  //Va importato, aggiunto agli implements della classe e dichiarata fun() ngNomeHook

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = (this.rating* 86) / 5;
  }

  //2.1 Dichiaro EventEmitter
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();


  //2.2 Dichiaro evento che emette l'EventEmitter, bindato dal (click) nell'html
  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} is clicked!`);
  }


}
