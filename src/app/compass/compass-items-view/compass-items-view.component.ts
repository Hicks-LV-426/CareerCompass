import { Component, OnInit, Input } from '@angular/core';
import { CompassItem } from 'src/app/interfaces/compass-item';

@Component({
  selector: 'app-compass-items-view',
  templateUrl: './compass-items-view.component.html',
  styleUrls: ['./compass-items-view.component.less']
})
export class CompassItemsViewComponent implements OnInit {

  @Input() items: CompassItem[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
