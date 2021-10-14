import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassTreeViewComponent } from './compass-tree-view.component';

describe('CompassTreeViewComponent', () => {
  let component: CompassTreeViewComponent;
  let fixture: ComponentFixture<CompassTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
