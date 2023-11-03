import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AminityComponent } from './aminity.component';

describe('AminityComponent', () => {
  let component: AminityComponent;
  let fixture: ComponentFixture<AminityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AminityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AminityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
