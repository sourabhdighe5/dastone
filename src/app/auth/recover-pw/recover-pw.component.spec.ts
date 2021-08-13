import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPwComponent } from './recover-pw.component';

describe('RecoverPwComponent', () => {
  let component: RecoverPwComponent;
  let fixture: ComponentFixture<RecoverPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
