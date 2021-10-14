import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassItemViewComponent } from './compass-item-view.component';

describe('CompassItemViewComponent', () => {
  let component: CompassItemViewComponent;
  let fixture: ComponentFixture<CompassItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassItemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
