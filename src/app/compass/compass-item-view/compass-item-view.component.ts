import { Component, OnInit, Input } from '@angular/core';
import { CompassItem } from 'src/app/interfaces/compass-item';

@Component({
  selector: 'app-compass-item-view',
  templateUrl: './compass-item-view.component.html',
  styleUrls: ['./compass-item-view.component.less']
})
export class CompassItemViewComponent implements OnInit {

  @Input() item: CompassItem | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
