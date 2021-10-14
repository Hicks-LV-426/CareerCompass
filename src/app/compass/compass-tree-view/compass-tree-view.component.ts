import { Component, OnInit, Input } from '@angular/core';
import { CompassItem } from 'src/app/interfaces/compass-item';
import { CompassTree } from 'src/app/interfaces/compass-tree';

@Component({
  selector: 'app-compass-tree-view',
  templateUrl: './compass-tree-view.component.html',
  styleUrls: ['./compass-tree-view.component.less']
})
export class CompassTreeViewComponent implements OnInit {

  @Input() compassTree: CompassTree | undefined;
  selectedItem: CompassItem | undefined;

  constructor() { }

  ngOnInit(): void {
    if(this.compassTree == undefined || this.compassTree?.items?.length > 0) {
      this.selectedItem = this.compassTree?.items[0];
    }
  }

  categoryChanged(item: CompassItem) {
    this.selectedItem = item;
  }

}
