import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRegBtnComponent } from './mobile-reg-btn.component';

describe('MobileRegBtnComponent', () => {
  let component: MobileRegBtnComponent;
  let fixture: ComponentFixture<MobileRegBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileRegBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileRegBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
