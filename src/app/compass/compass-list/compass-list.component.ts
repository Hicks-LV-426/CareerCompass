import { Component, OnInit, OnDestroy } from '@angular/core';
import { Compass } from 'src/app/interfaces/compass';
import { CompassService } from 'src/app/services/compass.service';

@Component({
  selector: 'app-compass-list',
  templateUrl: './compass-list.component.html',
  styleUrls: ['./compass-list.component.less']
})
export class CompassListComponent implements OnInit, OnDestroy {

  constructor(private compasses: CompassService) { }
  ngOnDestroy(): void {
    //
  }
  items: Compass[] = []

  ngOnInit(): void {
    this.compasses.getCompasses().subscribe(x => this.items = x);
  }

}
