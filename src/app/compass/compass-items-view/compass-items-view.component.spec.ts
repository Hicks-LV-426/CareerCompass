import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassItemsViewComponent } from './compass-items-view.component';

describe('CompassItemsViewComponent', () => {
  let component: CompassItemsViewComponent;
  let fixture: ComponentFixture<CompassItemsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassItemsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
