import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangessliderComponent } from './rangesslider.component';

describe('RangessliderComponent', () => {
  let component: RangessliderComponent;
  let fixture: ComponentFixture<RangessliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangessliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangessliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
