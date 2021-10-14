import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompassTree } from 'src/app/interfaces/compass-tree';
import { CompassService } from 'src/app/services/compass.service';


@Component({
  selector: 'app-compass-view',
  templateUrl: './compass-view.component.html',
  styleUrls: ['./compass-view.component.less']
})
export class CompassViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private compasses: CompassService) { }

  compassFileName: string | null = '';
  compassData: CompassTree | undefined;

  ngOnInit(): void {
    this.compassFileName = this.route.snapshot.paramMap.get('compassFileName');

    if(this.compassFileName == null || this.compassFileName?.length == 0) {
      this.router.navigate(['/home']);
    }
    else {
      this.compasses.getCompass(this.compassFileName).subscribe((data) => {
        this.compassData = data;
      });
    }

  }

}
