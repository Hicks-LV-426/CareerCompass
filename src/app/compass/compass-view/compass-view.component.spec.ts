import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassViewComponent } from './compass-view.component';

describe('CompassViewComponent', () => {
  let component: CompassViewComponent;
  let fixture: ComponentFixture<CompassViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
