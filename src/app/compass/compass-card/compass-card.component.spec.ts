import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassCardComponent } from './compass-card.component';

describe('CompassCardComponent', () => {
  let component: CompassCardComponent;
  let fixture: ComponentFixture<CompassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
