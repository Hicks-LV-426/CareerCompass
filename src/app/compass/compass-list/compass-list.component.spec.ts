import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassListComponent } from './compass-list.component';

describe('CompassListComponent', () => {
  let component: CompassListComponent;
  let fixture: ComponentFixture<CompassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompassListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
