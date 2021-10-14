import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compass-card',
  templateUrl: './compass-card.component.html',
  styleUrls: ['./compass-card.component.less']
})
export class CompassCardComponent implements OnInit {

  @Input() color: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() url: string | null | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
